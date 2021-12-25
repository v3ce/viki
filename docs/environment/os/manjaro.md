---
sidebar_position: 4
---

# Linux Manjaro

## Create bootable USB

1. Download [Ventoy](https://www.ventoy.net/en/index.html).
2. Download [Minimal Minimal LTS](https://manjaro.org/downloads/official/kde/).
3. Open Ventoy
4. Format your USB by Ventoy
5. Drag the ISO downloaded to Rufus and make sure the Partition scheme is GPT.

## Personal Preference

### Todo: Magnet replacement?

### Set the password less than 4 characters

### Increase cursor speed

## Setup Essential Packages

### Brainlessly update everything

```bash
$ packman -Syu
```

### Install Essentials

```bash
$ sudo pacman -Syu yay
$ yay -S microsoft-edge
$ yay -S visual-studio-bin
$ yay -S nerd-fonts-complete
$ yay -S neovim python-neovim neofetch
$ yay -S latte-dock
$ yay -S obs-studio
$ yay -S anaconda
```

### Install dotfiles

> Make sure the path is clean!
>
> E.g. put zsh related files under `$HOME/.config/zsh`

```bash
curl https://codeload.github.com/walkccc/dotfiles/tar.gz/main | \
  tar -xz --strip=1 dotfiles-main
rm README.md
rm .gitignore
```

### Install [**zimfw**](https://github.com/zimfw/zimfw)

```bash
# Install zimfw
curl -fsSL https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh
```

Restart your terminal. Now you'll see Powerlevel10k configuration wizard.

### Install [vim-plug](https://github.com/junegunn/vim-plug) for Neovim

```bash
# https://github.com/junegunn/vim-plug
sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
       https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
```

```
:PlugInstall
```
