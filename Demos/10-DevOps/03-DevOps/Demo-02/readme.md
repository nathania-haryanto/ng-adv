# Deploy Angular App to Firebase using Azure DevOps

Use [ng-devops Sample](https://github.com/ARambazamba/ng-devops)

Get Firebase CI Token:

```
firebase login:ci
```

> Note: Make sure Firebase CLI is installed

Copy the token:

![fb-token](_images/fb-token.png)

Create a `deploy-to-firebase.yml` and copy the following content:

```yml
trigger:
  branches:
    include:
      - master

variables:
  name: fbtoken
  value: "<REPLACE-TOKEN>"

stages:
  - stage: default

    jobs:
      - job: Job
        pool:
          vmImage: "ubuntu-latest"

        steps:
          - task: NodeTool@0
            inputs:
              versionSpec: "14.x"
            displayName: "Install Node.js"

          - script: |
              npm install -g firebase-tools
            displayName: "install firebase cli"

          - script: |
              npm install -g @angular/cli
              npm install
              ng build --prod
            displayName: "npm install and build"

          - script: |
              firebase deploy --token $TOKEN
            env:
              TOKEN: $(fbtoken)
            displayName: "deploy to firebase"

          - task: PublishBuildArtifacts@1
            inputs:
              PathtoPublish: "dist/ng-devops"
              ArtifactName: "ngapp"
              publishLocation: "Container"
            displayName: "Publish Artifacts"
```

> Note: In real life you would get the token from a Key Vault and access it using a variable

Run & Check the pipeline:

![fb-token](_images/run-pipeline.png)
