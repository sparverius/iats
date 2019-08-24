FROM jupyter/minimal-notebook

USER root

WORKDIR /tmp

COPY ./ atskernel

RUN cd atskernel && pip install -e . --user
RUN cd atskernel/jupyter_ats_kernel && python install_ats_kernel

WORKDIR /home/$NB_USER/

USER $NB_USER
