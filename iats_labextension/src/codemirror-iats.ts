import * as CodeMirror from 'codemirror';

import 'codemirror/lib/codemirror';
import 'codemirror/mode/mllike/mllike';

CodeMirror.defineMode("iats", (config) => {
    let hmode = CodeMirror.getMode(config, "mllike");
    return CodeMirror.multiplexingMode(
        hmode,
        {
            open: /:(?=!)/, // Matches : followed by !, but doesn't consume !
            close: /^(?!!)/, // Matches start of line not followed by !, doesn't consume character
            mode: CodeMirror.getMode(config, "text/plain"),
            delimStyle: "delimit"
        },
        {
            open: /\[r\||\[rprint\||\[rgraph\|/,
            close: /\|\]/,
            mode: CodeMirror.getMode(config, "text/x-rsrc"),
            delimStyle: "delimit"
        }
    );
});

CodeMirror.defineMIME("text/x-iats", "iats");

CodeMirror.modeInfo.push({
    ext: ['dats'],
    mime: "text/x-iats",
    mode: 'iats',
    name: 'iats'
});
