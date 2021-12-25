---
sidebar_position: 1
---

# Anaconda

## Download Anaconda

- For macOS: `brew install --cask anaconda`
- For Linux/Windows: Install [here](https://www.anaconda.com/products/individual#Downloads).

## Init `conda` because we don't have this command

```bash
./conda init zsh # The conda configuration is now in ~/.config/zsh/.zshrc
source $HOME/.config/zsh/.zshrc
```

## Check the PATH with `which -a python`

- In Windows, `$HOME/Anaconda3`
- In macOS with Intel chip, `/usr/local/anaconda3/bin`
- In macOS with Apple chip, `/opt/homebrew/anaconda3/bin`
- In Linux, `$HOME/anaconda3/bin`

## Update conda

```bash
conda update conda -y
conda update --all -y
```

## Create an environment by yml file

```bash
nvim ~/.config/conda/nyu.yml
```

Paste the following

```yaml=
name: NYU
channels:
  - pytorch
  - conda-forge
dependencies:
  # PyTorch + CUDA
  - pytorch==1.7.1
  - torchvision==0.8.2
  - torchaudio==0.7.2
  - cudatoolkit=11.0　# don't install 11.1, trouble with torchvision.ops.nms

  # Others
  # - jupyter
  - opencv
  - matplotlib
  - notebook
  - tqdm
```

---

```bash
nvim ~/.config/conda/cv.yml
```

Paste the following

```yaml=
name: CV
channels:
  - pytorch
  - conda-forge
dependencies:
  # PyTorch + CUDA
  - pytorch==1.10
  - torchvision==0.11.1
  - cudatoolkit=11.3

  # Others
  # - jupyter
  - opencv
  - matplotlib
  - notebook
  - tqdm
```

Run

```bash
conda env create -f ~/.config/conda/cv.yml
```

## Install formatter for jupyter notebook

```bash
pip install nb_black
```

## Auto activate base example

```bash
# Store config in ~/.condarc
conda config --set auto_activate_base true
```

## Create environment directly

```bash
# e.g.
# Create an env for Mkdocs deployment
conda create --name MKDOCS python=3.8

# Activate this environment
conda activate MKDOCS

# Now work with this cute MKDOCS env!
pip install mkdocs
pip install mkdocs-material
```

## Remove an environment

```bash
# Remove <ENV NAME>
conda remove --name <ENV NAME> --all

# Deactivate the current environment
conda deactivate
```
