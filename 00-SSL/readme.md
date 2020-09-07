# Introduction

Enable Self Signed Cert Trust in Chrome: `chrome://flags/#allow-insecure-localhost`

## Configure Angular with SSL

- Generate a Trusted SSL Certificate
- Copy Certificate to ngProject
- Register \*.crt in angular.json

### Generate a Trusted SSL Certificate

Create a certifcate for Angular: Go to `.\create-certs`. Execute:

```
./generate.sh
```

> Bash is available on Windows Machines if you have installed [Git Bash](https://git-scm.com/downloads) or configured WSL 2

#### Configuration Options

You can adjust the `[dn]` part of the `openssl-custom.cnf` file to whatever you prefer.

```
[dn]
C = <COUNTRY>
ST = <STATE>
L = <LOCALITY / CITY>
O = <ORGANIZATION>
OU = <ORGANIZATION_UNIT>
emailAddress = <EMAIL_ADDRESS>
CN = <HOSTNAME / IP_ADDRESS>
```

![create-ssl](_images/create-ssl.gif)

### Register \*.crt in angular.json `"serve"-section`

```Json
"serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
        "browserTarget": "PROJECTNAME:build",
        "ssl": true,
        "sslKey": "/ssl/server.key",
        "sslCert": "/ssl/server.crt"
    },
```

## Configure .NET Core with SSL

Create a \*.pfx certificate: Run `.\create-certs\createCert4Core.ps1` using PowerShell

Add section to `appsettings.json`:

```Json
 "Kestrel": {
    "Endpoints": {
      "HTTPS": {
        "Url": "https://*:5000",
        "Certificate": {
          "Path": "localhost.pfx",
          "Password": "password"
        }
      }
    }
  }
```

> Note: You can also use `dotnet dev-certs https` to create certs
