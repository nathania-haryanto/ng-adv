# Setup

- Install Software
- Install Windows Subsystem Linux - Optional
- Setup local container support - Optional
- Create Lab VM - Optional

## Install Software

To install Software run the script `setup-angular-dev.ps1` from an elevated PowerShell prompt:

> Note: The script usese Node Version Manager (NVM) to install Node 16.x and Angular CLI. If you have Node 16.x installed already you can skip the installation of NVM and Node 16.x. Before using NVM you need to uninstall your existing Node installation.

```powershell

![run-as](_images/run-as.jpg)

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force;
Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/arambazamba/ng-adv/main/setup/setup-angular-dev.ps1'))
```

> Note: This script will run for approx 15 min. No need to wait! In the meantime you can continue to fork and clone my repo as described in the next section.

Congratulations you have completed the base setup of your class software requirements.