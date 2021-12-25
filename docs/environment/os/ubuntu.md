---
sidebar_position: 3
---

# Linux Ubuntu

## Create bootable USB

1. Download [Ventoy](https://www.ventoy.net/en/index.html).
2. Download [Ubuntu](https://ubuntu.com/download/desktop).
3. Open Ventoy
4. Format your USB by Ventoy
5. Drag the ISO to the USB Ventoy

## Personal Preferences

### Pbcopy

https://ostechnix.com/how-to-use-pbcopy-and-pbpaste-commands-on-linux/

### Fix Super key mapping

https://askubuntu.com/questions/1137650/super-key-not-detected-in-ubuntu-19-04

### Fix screen flicking

https://hant.kaifa99.com/ubuntu/article_165740

### Download Nerd Fonts

https://www.nerdfonts.com/font-downloads

### Enable keyboard backlight for ASUS

```bash
sudo /etc/acpi/asus-keyboard-backlight.sh
```

### Support RTX Driver

Go to "Software & Updates" > "Additional Drivers"

![](https://i.imgur.com/0qb0Dz0.png)

### Install Softwares

How to do this in Spotify, Visual Studio Code, Telegram, Deepin Screenshot

### Short Password

```bash
sudo vi /etc/pam.d/common-password
```

Change

```
password    [success=1 default=ignore]  pam_unix.so obscure sha512
```

to

```
password    [success=1 default=ignore]  pam_unix.so sha512 minlen=1
```

Then,

```bash
sudo passwd <username>
```

## Install Packages

### Install Essentails

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install curl git zsh neovim ibus-cangjie -y
```

### Install Microsoft Edge

```bash
# Update the packages index
sudo apt update

# Install the dependencies
sudo apt install software-properties-common apt-transport-https wget

# Import the Microsoft GPG key
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -

# Enable the Edge browser repository
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main"

# Install Microsoft Edge
sudo apt install microsoft-edge-dev -y
```

### Install dotfiles

> Make sure the path is clean!
>
> E.g. put zsh related files under `$HOME/.config/zsh`

```bash
curl https://codeload.github.com/walkccc/dotfiles/tar.gz/main | \
  tar -xz --strip=1 dotfiles-main
rm README.md && rm LICENSE
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
