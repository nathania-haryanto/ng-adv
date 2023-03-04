# Setup

- Install Software
- Install Windows Subsystem Linux - Optional
- Setup local container support - Optional
- Create Lab VM - Optional

## Install Software

>Note: Create Lab VM is an optional step that you could execute if you want to develop on azure hosted VM. If you want to develop on your local machine you can skip this step.

To install Software run the script `setup-angular-dev.ps1` from an elevated PowerShell prompt:

![run-as](_images/run-as.jpg)

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force;
Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/arambazamba/ng-adv/main/setup/setup-angular-dev.ps1'))
```

> Note: This script will run for approx 15 min. No need to wait! In the meantime you can continue to fork and clone my repo as described in the next section.

Congratulations you have completed the base setup of your class software requirements.
