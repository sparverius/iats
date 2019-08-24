import {
    JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import './codemirror-iats';

import '../style/index.css';

/**
 * Initialization data for the extension1 extension.
 */
const extension: JupyterLabPlugin<void> = {
    id: 'iats',
    autoStart: true,
    requires: [],
    activate: (app: JupyterLab) => {
        app.serviceManager.ready
            .then(() => { defineIAts() });
    }
};

function defineIAts() {
    console.log('iats codemirror activated');
}


export default extension;
