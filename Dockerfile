FROM jupyter/minimal-notebook

USER root

WORKDIR /tmp

COPY ./ atskernel

RUN pip install --no-cache-dir atskernel/
RUN cd atskernel/iats && install_ats_kernel

WORKDIR /home/$NB_USER/

USER $NB_USER
