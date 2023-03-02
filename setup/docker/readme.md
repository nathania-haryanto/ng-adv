# Setup local container support

This requires prev step - WSL Installation

Download & Install [Docker Desktop for Windows](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=header) or execute:

```powershell
choco install docker-desktop -y
```

Double Click on Docker Desktop to start the installation. After installation you will be asked to log out and log in again.

Create an account at [Docker Hub](https://hub.docker.com/) and signin to Docker

![docker-signin](_images/docker-signin.png)

Configure Docker:

![wsl-engine](_images/wsl-engine.png)

![wsl-engine-resources](_images/wsl-engine-resources.png)

Enable Kubernetes:

![kubernetes](_images/kubernetes.png)

Press Appy & Restart to complete Docker Setup

## Test Installation

In the console window execute:

```
docker run hello-world
```

![docker-test](_images/docker-test.png)
