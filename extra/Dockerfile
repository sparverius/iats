FROM jupyter/minimal-notebook

USER root

WORKDIR /tmp

COPY ./ atskernel

RUN cd atskernel && pip install -e . --user
RUN cd atskernel/iats && python install_ats_kernel

WORKDIR /home/$NB_USER/

USER $NB_USER
