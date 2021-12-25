---
sidebar_position: 1
---

# Microsoft Windows 11

## 前言

## 系統設定

### 概述

### 輸入法

### 螢幕顯示

### 滑鼠鍵盤

### 檔案總管

- [Flaticon](https://www.flaticon.com/)
- [Aconvert](https://www.aconvert.com/tw/icon/png-to-ico/)

### 地區語系

### 系統更新

https://www.nerdfonts.com/font-downloads

## 軟體管理

### 概述

這一部分將會安裝一些必要的軟體工具並且卸載一些不必要的軟體工具。如果曾經使用過 Unix/Linux 作業系統，會知道在各個發行版都有與之匹配的套件管理工具（Package Manger）。目前微軟主流的套件管理工具共有 [winget](https://github.com/microsoft/winget-cli)、[scoop](https://scoop.sh/) 與 [chocolatey](https://chocolatey.org/)。

[Scoop 並沒有那麼好](https://fduzs.github.io/archives/scoop-is-not-that-good.html)

### 官方網站安裝

- [Git](https://git-scm.com/)
- [Jetbrain Toolbox](https://www.jetbrains.com/toolbox-app/)
- [OBS Studio](https://obsproject.com/)
- [PotPlayer](https://potplayer.daum.net/)
- [PowerToys](https://)
- [Sublime Text](https://www.sublimetext.com/)
- [ScreenToGif](https://www.screentogif.com/)
- [Typora](https://typora.io/)
- [Visual Studio](https://visualstudio.microsoft.com/)
- [Visual Studio Code](https://code.visualstudio.com/#alt-downloads)
- [WinRAR](https://www.win-rar.com/)
- [WizNote](https://www.wiz.cn/)

### 微軟商店安裝

- [Line](https://)
- [UpNote](https://)
- [Snipaste](https://)
- [Screenbits](https://)
- [Telegram](https://)

### 套件管理安裝

- 字體
  - [FiraCode Nerd Font Mono](https://)
  - [DejavuSans Nerd Font Mono](https://)
- 命令工具
  - [aria2](https://)
  - [bat](https://)
  - [busybox](https://)
  - [ffmpeg](https://)
  - [lsd](https://)
  - [sudo](https://)
  - [neovim](https://)
  - [netcat](https://)

```pwsh
# Install Scoop to Custom Directory
$env:SCOOP='C:\ProgramData\scoop'
[environment]::setEnvironmentVariable('SCOOP', $env:SCOOP, 'User')
iwr -useb get.scoop.sh | iex
```

```pwsh
# 添加 bucket
scoop bucket add extras
scoop bucket add nerd-fonts

# install tools
scoop install aria2 git busybox
scoop install bat less ffmpeg lsd python sudo neovim

# intall fonts
sudo scoop install DejaVuSansMono-NF
```

### 移除冗贅軟體

```pwsh
> Disable-WindowsOptionalFeature -Online -FeatureName "WindowsMediaPlayer"
```

```pwsh
> Get-AppxPackage -Name "MicrosoftTeams" -AllUsers | Remove-AppxPackage -AllUsers
> Get-AppxPackage -Name "MicrosoftWindows.Client.WebExperience" -AllUsers | Remove-AppxPackage -AllUsers
```

## 工具設定

### Window Terminal

<details>
  <summary><strong>全局設定</strong></summary>

```json
{
  "$schema": "https://aka.ms/terminal-profiles-schema",
  "defaultProfile": "{GUID}",

  "copyOnSelect": true,
  "copyFormatting": false,

  "profiles": {
    "defaults": {
      // 視窗設定
      "initialCols": "",
      "initialRows": "",
      // 字體設定
      "fontFace": "",
      "fontSize": "",
      // 光標設定
      "cursorShape": "bar",
      "cursorColor": "#FFFFFF",
      // 行為設定
      "closeOnExit": true, // 關閉視窗時結束掛載的 process
      "historySize": 9000 // 歷程記錄
    }
  }
}
```

</details>

<details>
  <summary><strong>配置設定</strong></summary>

在微軟作業系統中，會使用 GUID (Global Unique Identifier) 來標識特定組件或功能，比如可以使用 `powercfg -LIST` 來列出當前系統中的電源計劃。在 Windows Terminal 中也需要替不同配置給予一個獨特的 GUID 進行標識，可以透過以下命令生成：

```pwsh
> [guid]::NewGuid()
> Get-Guid
```

接著在 `"profiles"` 的 `"lists"` 中添加配置：

```json
{
  "profiles": {
    "defaults": { ... },
    "lists": [
      {
        "guid": "{}",
        "name": ""
      }
    ]
  }
}
```

</details>

<details>
  <summary><strong>主題配色</strong></summary>

- [Windows Terminal Themes](https://windowsterminalthemes.dev/)

</details>

<details>
  <summary><strong>按鍵綁定</strong></summary>

```json
{
  ...,
  "keybindings":
  [
    // 關閉視窗
    { "command": "closeWindow", "keys": "alt+shift+q"},
    { "command": "closeTab", "keys": "alt+q"},
    { "command": "closePane", "keys": "alt+w"},
    // 模式切換
    { "command": "toggleFullscreen", "keys": "alt+enter"},
    { "command": "toggleFullscreen", "keys": "f11"},
    { "command": "toggleFocusMode", "keys": "shift+f11"},
    // 拆分窗格
    { "command": { "action": "splitPane", "split": "horizontal"}, "keys": "alt+h"},
    { "command": { "action": "splitPane", "split": "vertical"}, "keys": "alt+v"}
  ],
}
```

</details>

<details>
  <summary><strong>完整範例</strong></summary>

```json
// To view the default settings, hold "alt" while clicking on the "Settings" button.
// For documentation on these settings, see: https://aka.ms/terminal-documentation
{
  "$schema": "https://aka.ms/terminal-profiles-schema",
  "copyFormatting": "none",
  "copyOnSelect": false,
  "defaultProfile": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
  "profiles": {
    "defaults": {
      "colorScheme": "Subliminal",
      "snapOnInput": true,
      "cursorShape": "bar",
      "font": {
        "face": "DejaVuSansMono Nerd Font Mono",
        "size": 12
      },
      "padding": "8, 8, 8, 8",
      "useAcrylic": true,
      "acrylicOpacity": 0.75
    },
    "list": [
      {
        "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
        "commandline": "powershell.exe -nologo",
        "name": "Windows PowerShell",
        "tabTitle": "PowerShell 5.1",
        "hidden": false
      },
      {
        "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
        "commandline": "cmd.exe",
        "name": "Command Prompt",
        "hidden": false
      },
      {
        "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
        "source": "Windows.Terminal.Azure",
        "hidden": false,
        "name": "Azure Cloud Shell"
      },
      {
        "guid": "{2ece5bfe-50ed-5f3a-ab87-5cd4baafed2b}",
        "source": "Git",
        "name": "Git Bash",
        "tabTitle": "Git Bash",
        "hidden": false
      },
      {
        "guid": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
        "source": "Windows.Terminal.PowershellCore",
        "commandline": "pwsh.exe -nologo",
        "name": "PowerShell",
        "tabTitle": "PowerShell 7.1.4",
        "hidden": false
      }
    ]
  },

  // Add custom color schemes to this array.
  // To learn more about color schemes, visit https://aka.ms/terminal-color-schemes
  "schemes": [
    {
      "name": "Batman",
      "background": "#1B1D1E",
      "black": "#1B1D1E",
      "blue": "#737174",
      "brightBlack": "#505354",
      "brightBlue": "#919495",
      "brightCyan": "#A3A3A6",
      "brightGreen": "#FFF27D",
      "brightPurple": "#9A9A9D",
      "brightRed": "#FFF78E",
      "brightWhite": "#DADBD6",
      "brightYellow": "#FEED6C",
      "cursorColor": "#FFFFFF",
      "cyan": "#62605F",
      "foreground": "#6F6F6F",
      "green": "#C8BE46",
      "purple": "#747271",
      "red": "#E6DC44",
      "selectionBackground": "#FFFFFF",
      "white": "#C6C5BF",
      "yellow": "#F4FD22"
    },
    {
      "name": "Campbell",
      "background": "#0C0C0C",
      "black": "#0C0C0C",
      "blue": "#0037DA",
      "brightBlack": "#767676",
      "brightBlue": "#3B78FF",
      "brightCyan": "#61D6D6",
      "brightGreen": "#16C60C",
      "brightPurple": "#B4009E",
      "brightRed": "#E74856",
      "brightWhite": "#F2F2F2",
      "brightYellow": "#F9F1A5",
      "cursorColor": "#FFFFFF",
      "cyan": "#3A96DD",
      "foreground": "#CCCCCC",
      "green": "#13A10E",
      "purple": "#881798",
      "red": "#C50F1F",
      "selectionBackground": "#FFFFFF",
      "white": "#CCCCCC",
      "yellow": "#C19C00"
    },
    {
      "name": "Campbell Powershell",
      "background": "#012456",
      "black": "#0C0C0C",
      "blue": "#0037DA",
      "brightBlack": "#767676",
      "brightBlue": "#3B78FF",
      "brightCyan": "#61D6D6",
      "brightGreen": "#16C60C",
      "brightPurple": "#B4009E",
      "brightRed": "#E74856",
      "brightWhite": "#F2F2F2",
      "brightYellow": "#F9F1A5",
      "cursorColor": "#FFFFFF",
      "cyan": "#3A96DD",
      "foreground": "#CCCCCC",
      "green": "#13A10E",
      "purple": "#881798",
      "red": "#C50F1F",
      "selectionBackground": "#FFFFFF",
      "white": "#CCCCCC",
      "yellow": "#C19C00"
    },
    {
      "name": "Nord",
      "background": "#2E3440",
      "black": "#3B4252",
      "blue": "#81A1C1",
      "brightBlack": "#4C566A",
      "brightBlue": "#81A1C1",
      "brightCyan": "#8FBCBB",
      "brightGreen": "#A3BE8C",
      "brightPurple": "#B48EAD",
      "brightRed": "#BF616A",
      "brightWhite": "#ECEFF4",
      "brightYellow": "#EBCB8B",
      "cursorColor": "#FFFFFF",
      "cyan": "#88C0D0",
      "foreground": "#D8DEE9",
      "green": "#A3BE8C",
      "purple": "#B48EAD",
      "red": "#BF616A",
      "selectionBackground": "#FFFFFF",
      "white": "#E5E9F0",
      "yellow": "#EBCB8B"
    },
    {
      "name": "One Half Dark",
      "background": "#282C34",
      "black": "#282C34",
      "blue": "#61AFEF",
      "brightBlack": "#5A6374",
      "brightBlue": "#61AFEF",
      "brightCyan": "#56B6C2",
      "brightGreen": "#98C379",
      "brightPurple": "#C678DD",
      "brightRed": "#E06C75",
      "brightWhite": "#DCDFE4",
      "brightYellow": "#E5C07B",
      "cursorColor": "#FFFFFF",
      "cyan": "#56B6C2",
      "foreground": "#DCDFE4",
      "green": "#98C379",
      "purple": "#C678DD",
      "red": "#E06C75",
      "selectionBackground": "#FFFFFF",
      "white": "#DCDFE4",
      "yellow": "#E5C07B"
    },
    {
      "background": "#FAFAFA",
      "black": "#383A42",
      "blue": "#0184BC",
      "brightBlack": "#4F525D",
      "brightBlue": "#61AFEF",
      "brightCyan": "#56B5C1",
      "brightGreen": "#98C379",
      "brightPurple": "#C577DD",
      "brightRed": "#DF6C75",
      "brightWhite": "#FFFFFF",
      "brightYellow": "#E4C07A",
      "cursorColor": "#4F525D",
      "cyan": "#0997B3",
      "foreground": "#383A42",
      "green": "#50A14F",
      "name": "One Half Light",
      "purple": "#A626A4",
      "red": "#E45649",
      "selectionBackground": "#FFFFFF",
      "white": "#FAFAFA",
      "yellow": "#C18301"
    },
    {
      "background": "#282C34",
      "black": "#282C34",
      "blue": "#61AFEF",
      "brightBlack": "#616368",
      "brightBlue": "#61AFEF",
      "brightCyan": "#56B6C2",
      "brightGreen": "#98C379",
      "brightPurple": "#C678DD",
      "brightRed": "#E06C75",
      "brightWhite": "#DCDFE4",
      "brightYellow": "#E5C07B",
      "cursorColor": "#FFFFFF",
      "cyan": "#56B6C2",
      "foreground": "#DCDFE4",
      "green": "#98C379",
      "name": "OneHalfDark",
      "purple": "#C678DD",
      "red": "#E06C75",
      "selectionBackground": "#FFFFFF",
      "white": "#DCDFE4",
      "yellow": "#E5C07B"
    },
    {
      "background": "#1E1F29",
      "black": "#000000",
      "blue": "#49BAFF",
      "brightBlack": "#555555",
      "brightBlue": "#49BAFF",
      "brightCyan": "#8BE9FE",
      "brightGreen": "#50FB7C",
      "brightPurple": "#FC4CB4",
      "brightRed": "#FC4346",
      "brightWhite": "#EDEDEC",
      "brightYellow": "#F0FB8C",
      "cursorColor": "#FFFFFF",
      "cyan": "#8BE9FE",
      "foreground": "#EBECE6",
      "green": "#50FB7C",
      "name": "Snazzy",
      "purple": "#FC4CB4",
      "red": "#FC4346",
      "selectionBackground": "#FFFFFF",
      "white": "#EDEDEC",
      "yellow": "#F0FB8C"
    },
    {
      "background": "#002B36",
      "black": "#002B36",
      "blue": "#268BD2",
      "brightBlack": "#073642",
      "brightBlue": "#839496",
      "brightCyan": "#93A1A1",
      "brightGreen": "#586E75",
      "brightPurple": "#6C71C4",
      "brightRed": "#CB4B16",
      "brightWhite": "#FDF6E3",
      "brightYellow": "#657B83",
      "cursorColor": "#FFFFFF",
      "cyan": "#2AA198",
      "foreground": "#839496",
      "green": "#859900",
      "name": "Solarized Dark",
      "purple": "#D33682",
      "red": "#DC322F",
      "selectionBackground": "#FFFFFF",
      "white": "#EEE8D5",
      "yellow": "#B58900"
    },
    {
      "background": "#FDF6E3",
      "black": "#002B36",
      "blue": "#268BD2",
      "brightBlack": "#073642",
      "brightBlue": "#839496",
      "brightCyan": "#93A1A1",
      "brightGreen": "#586E75",
      "brightPurple": "#6C71C4",
      "brightRed": "#CB4B16",
      "brightWhite": "#FDF6E3",
      "brightYellow": "#657B83",
      "cursorColor": "#002B36",
      "cyan": "#2AA198",
      "foreground": "#657B83",
      "green": "#859900",
      "name": "Solarized Light",
      "purple": "#D33682",
      "red": "#DC322F",
      "selectionBackground": "#FFFFFF",
      "white": "#EEE8D5",
      "yellow": "#B58900"
    },
    {
      "background": "#282C35",
      "black": "#7F7F7F",
      "blue": "#6699CC",
      "brightBlack": "#7F7F7F",
      "brightBlue": "#6699CC",
      "brightCyan": "#5FB3B3",
      "brightGreen": "#A9CFA4",
      "brightPurple": "#F1A5AB",
      "brightRed": "#E15A60",
      "brightWhite": "#D4D4D4",
      "brightYellow": "#FFE2A9",
      "cursorColor": "#FFFFFF",
      "cyan": "#5FB3B3",
      "foreground": "#D4D4D4",
      "green": "#A9CFA4",
      "name": "Subliminal",
      "purple": "#F1A5AB",
      "red": "#E15A60",
      "selectionBackground": "#FFFFFF",
      "white": "#D4D4D4",
      "yellow": "#FFE2A9"
    },
    {
      "background": "#000000",
      "black": "#000000",
      "blue": "#3465A4",
      "brightBlack": "#555753",
      "brightBlue": "#729FCF",
      "brightCyan": "#34E2E2",
      "brightGreen": "#8AE234",
      "brightPurple": "#AD7FA8",
      "brightRed": "#EF2929",
      "brightWhite": "#EEEEEC",
      "brightYellow": "#FCE94F",
      "cursorColor": "#FFFFFF",
      "cyan": "#06989A",
      "foreground": "#D3D7CF",
      "green": "#4E9A06",
      "name": "Tango Dark",
      "purple": "#75507B",
      "red": "#CC0000",
      "selectionBackground": "#FFFFFF",
      "white": "#D3D7CF",
      "yellow": "#C4A000"
    },
    {
      "background": "#FFFFFF",
      "black": "#000000",
      "blue": "#3465A4",
      "brightBlack": "#555753",
      "brightBlue": "#729FCF",
      "brightCyan": "#34E2E2",
      "brightGreen": "#8AE234",
      "brightPurple": "#AD7FA8",
      "brightRed": "#EF2929",
      "brightWhite": "#EEEEEC",
      "brightYellow": "#FCE94F",
      "cursorColor": "#000000",
      "cyan": "#06989A",
      "foreground": "#555753",
      "green": "#4E9A06",
      "name": "Tango Light",
      "purple": "#75507B",
      "red": "#CC0000",
      "selectionBackground": "#FFFFFF",
      "white": "#D3D7CF",
      "yellow": "#C4A000"
    },
    {
      "background": "#2D2D2D",
      "black": "#000000",
      "blue": "#6699CC",
      "brightBlack": "#000000",
      "brightBlue": "#6699CC",
      "brightCyan": "#66CCCC",
      "brightGreen": "#99CC99",
      "brightPurple": "#CC99CC",
      "brightRed": "#F2777A",
      "brightWhite": "#FFFFFF",
      "brightYellow": "#FFCC66",
      "cursorColor": "#FFFFFF",
      "cyan": "#66CCCC",
      "foreground": "#CCCCCC",
      "green": "#99CC99",
      "name": "Tomorrow Night Eighties",
      "purple": "#CC99CC",
      "red": "#F2777A",
      "selectionBackground": "#FFFFFF",
      "white": "#FFFFFF",
      "yellow": "#FFCC66"
    },
    {
      "background": "#000000",
      "black": "#000000",
      "blue": "#000080",
      "brightBlack": "#808080",
      "brightBlue": "#0000FF",
      "brightCyan": "#00FFFF",
      "brightGreen": "#00FF00",
      "brightPurple": "#FF00FF",
      "brightRed": "#FF0000",
      "brightWhite": "#FFFFFF",
      "brightYellow": "#FFFF00",
      "cursorColor": "#FFFFFF",
      "cyan": "#008080",
      "foreground": "#C0C0C0",
      "green": "#008000",
      "name": "Vintage",
      "purple": "#800080",
      "red": "#800000",
      "selectionBackground": "#FFFFFF",
      "white": "#C0C0C0",
      "yellow": "#808000"
    }
  ],

  // Add custom actions and keybindings to this array.
  // To unbind a key combination from your defaults.json, set the command to "unbound".
  // To learn more about actions and keybindings, visit https://aka.ms/terminal-keybindings
  "actions": [
    // Copy and paste are bound to Ctrl+Shift+C and Ctrl+Shift+V in your defaults.json.
    // These two lines additionally bind them to Ctrl+C and Ctrl+V.
    // To learn more about selection, visit https://aka.ms/terminal-selection
    {
      "command": { "action": "copy", "singleLine": false },
      "keys": "ctrl+c"
    },
    { "command": "paste", "keys": "ctrl+v" },
    // Press Ctrl + Shift + F to open the search box
    { "command": "find", "keys": "ctrl+shift+f" },
    // Press Alt + Enter to toggle full screen
    { "command": "toggleFullscreen", "keys": "alt+enter" },
    // Press Alt + Shift + D to open a new pane.
    // - "split": "auto" makes this pane open in the direction that provides the most surface area.
    // - "splitMode": "duplicate" makes the new pane use the focused pane's profile.
    // To learn more about panes, visit https://aka.ms/terminal-panes
    {
      "command": {
        "action": "splitPane",
        "split": "auto",
        "splitMode": "duplicate"
      },
      "keys": "alt+shift+d"
    }
  ]
}
```

</details>

### PowerShell

#### Change Execution Policy

```pwsh
> Set-ExecutionPolicy RemoteSigned    # Change the Execution Policy
> Get-ExecutionPolicy                 # Get current Execution Policy
```

#### Install PowerShell 7

```pwsh
> iex "& { $(irm https://aka.ms/install-powershell.ps1) } -UseMSI"
```

#### Install Modules

```pwsh
# update and check current modules (PackageManagement and PowerShellGet are required.)
> Update-Module
> Get-Module

# install the modules
> Install-Module -Name PSReadLine
> Install-Module -Name posh-git
> Install-Module -Name oh-my-posh
> Install-Module -Name Terminal-Icons
> Install-Module -Name FastPing
```

#### Check the Profile Path

```pwsh
> $Profile | Select-Object *
```

- PowerShell 5: `%USERPROFILE%\Documents\WindowsPowerShell\profile.ps1`
- PowerShell 7: `%USERPROFILE%\Documents\PowerShell\profile.ps1`

<details>
  <summary><strong>完整範例</strong></summary>

```pwsh
# --------------------------------------------------
# Contents Managed by Third-Party Softwares
# --------------------------------------------------

#region conda initialize
# !! Contents within this block are managed by 'conda init' !!
(& "C:\ProgramData\Anaconda3\Scripts\conda.exe" "shell.powershell" "hook") | Out-String | Invoke-Expression
#endregion


# --------------------------------------------------
# Import Modules
# --------------------------------------------------

Import-Module posh-git
Import-Module oh-my-posh
Import-Module PSReadLine
Set-PoshPrompt -Theme amro

# --------------------------------------------------
# Setup Hot-keys
# --------------------------------------------------

# 設置 Tab 選單補全
Set-PSReadLineKeyHandler -Chord "tab" -Function MenuComplete                # tab     選單補全

# 設置 Ctrl 組合快鍵
Set-PSReadLineKeyHandler -Chord "ctrl+z" -Function Undo                     # ctrl+z  撤銷操作
Set-PSReadLineKeyHandler -Chord "ctrl+u" -Function RevertLine               # ctrl+u  清除命令行
Set-PSReadlineKeyHandler -Chord "ctrl+e" -Function EndOfLine                # ctrl+e  移動游標到尾部
Set-PSReadlineKeyHandler -Chord "ctrl+a" -Function BeginningOfLine          # ctrl+a  移動游標到頭部
Set-PSReadlineKeyHandler -Chord "ctrl+d" -Function ViExit                   # ctrl+d  退出 PowerShell

# 設定上下鍵
Set-PSReadLineKeyHandler -Chord "UpArrow" -Function HistorySearchBackward   # up      向前搜索命令紀錄
Set-PSReadLineKeyHandler -Chord "DownArrow" -Function HistorySearchForward  # down    向後搜索命令紀錄


# --------------------------------------------------
# Define Custom Functions
# --------------------------------------------------

# 更新 TexLive (update TexLive)
function Update-TexLive {
  $CurrentYear = Get-Date -Format yyyy
  Write-Host "[Update TeXLive]" $CurrentYear -ForegroundColor Magenta -BackgroundColor Cyan
  tlmgr update --self
  tlmgr update --all
}

# --------------------------------------------------
# Scripts to Run after Execute
# --------------------------------------------------
winfetch

# Python 直接执行
$env:PATHEXT += ";.py"

Set-Alias -Name ls -Value Get-ChildItem
```

</details>

### OpenSSH

```pwsh
# 設定開機自啟
> Get-Service -Name ssh-agent | Set-Service -StartupType Automatic

# 啟動服務
> Start-Service ssh-agent

# 確認執行
> Get-Service ssh-agent

# 添加金鑰
> ssh-add ~\.ssh\id_ed25519
```

### Scoop

## 參考資料

- [Scoop Documentation](https://scoop-docs.vercel.app/)
- [Windows terminal Complete Guide | Develop Paper](https://developpaper.com/windows-terminal-complete-guide/)
- [PowerShell 7 Profile Paths and Locations | Ridicurious](https://ridicurious.com/2020/03/12/powershell-7-profile-paths-and-locations/)
- [Windows Shell 使用指南](https://www.cnblogs.com/tomyyyyy/p/15315304.html)
- [Creating My Awesome Windows 10 Dev Setup](https://chimerical.ca/posts/creating-my-awesome-windows-10-dev-setup)
- [從零開始配置好用又好看的 Windows Terminal](https://juejin.cn/post/6850418122147659783)
