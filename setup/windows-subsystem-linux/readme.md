# Setup Windows Subsystem for Linux 2 - WSL2

Requires Windows 10 - May 2020 Update or higher. To Update use this [link](https://www.microsoft.com/de-de/software-download/windows10).

[Install WSL 2](https://docs.microsoft.com/en-us/windows/wsl/install) in a Powershell Prompt:

```powershell
wsl --install
Restart-Computer
```

Finish installation of Ubuntu 20.04 LTS from the Microsoft Store:

![wsl-finish](_images/wsl-finish.png)

### WSL Frameworks & Runtimes

[Introduction to Bash Scripting](https://www.taniarascia.com/how-to-create-and-use-bash-scripts/)

#### Node

Install Node 16.x on WSL

```bash
sudo apt update
sudo curl -sL https://deb.nodesource.com/setup_16.x | sudo bash
sudo apt-get install -y nodejs
```

#### .NET 6 

Register Packages:

```
wget https://packages.microsoft.com/config/ubuntu/20.10/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
```
Install .NET:

```
sudo apt-get update; \
sudo apt-get install -y apt-transport-https && \
sudo apt-get update && \
sudo apt-get install -y dotnet-sdk-6.0
```

#### Azure CLI

```
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
az config set extension.use_dynamic_install=yes
```

#### Azure Function Core Tools V4

```
sudo npm install -g azure-functions-core-tools@4 --unsafe-perm true
```
