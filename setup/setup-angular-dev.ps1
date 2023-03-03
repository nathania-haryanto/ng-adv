# Install chocolatey
Write-Host "Installing Chocolatey - 1/4" -ForegroundColor yellow

Set-ExecutionPolicy Bypass -Scope Process -Force; 
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; 
Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

choco install googlechrome -y
choco install vscode -y
choco install dotnet-6.0-sdk
choco install azure-cli -y
choco install git -y
choco install curl -y
choco install nvm -y

# Install VS Code Extensions
Write-Host "VS Code Extensions - 2/4" -ForegroundColor yellow

code --install-extension ms-dotnettools.csharp
code --install-extension ms-vscode.azurecli
code --install-extension ms-vscode.azure-account
code --install-extension ms-azuretools.vscode-docker
code --install-extension GitHub.vscode-pull-request-github
code --install-extension angular.ng-template
code --install-extension 1tontech.angular-material
code --install-extension mikael.angular-beastcode
code --install-extension mdickin.markdown-shortcuts
code --install-extension mhutchie.git-graph 
code --install-extension hbenl.vscode-test-explorer
code --install-extension raagh.angular-karma-test-explorer
code --install-extension xabikos.jasminesnippets

# Refresh Path Env
Write-Host "Refresh Path Env - 3/4" -ForegroundColor yellow

$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Install NVM
Write-Host "Installing Node using NVM, Angular & json-server - 4/4" -ForegroundColor yellow
nvm install 16.15.0
nvm use 16.15.0

# Install Json-server
npm install -g json-server

# Install Node & Angular
npx @angular/cli@latest analytics off
npm i -g @angular/cli

# Finished Msg
Write-Host "Finished Software installation" -ForegroundColor yellow