from setuptools import setup

setup(name='jupyter_ats_kernel',
      version='1.0.0',
      description='Minimalistic ATS kernel for Jupyter',
      author='Richard K',
      author_email='qpotizo@gmail.com',
      license='MIT',
      classifiers=[
          'License :: OSI Approved :: MIT License',
      ],
      url='https://github.com/sparverius/jupyter-ats-kernel/',
      download_url='https://github.com/sparverius/jupyter-ats-kernel/tarball/1.0.0',
      packages=['jupyter_ats_kernel'],
      scripts=['jupyter_ats_kernel/install_ats_kernel'],
      keywords=['jupyter', 'notebook', 'kernel', 'ats'],
      include_package_data=True
      )
