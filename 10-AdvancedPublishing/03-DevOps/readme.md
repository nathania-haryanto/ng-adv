# Angular DevOps

Use [this repo](https://github.com/ARambazamba/ng-devops)

## Instructions

Get Firebase CI Token:

```
firebase login:ci
```

Copy the token:

![fb-token](_images/fb-token.png)

Create a `build-project.yml` and copy the following conten:

```yml
trigger:
  branches:
    include:
      - master

stages:
  - stage: default

    jobs:
      - job: Job
        pool:
          vmImage: 'ubuntu-latest'

        steps:
          - task: NodeTool@0
            inputs:
              versionSpec: '12.x'
            displayName: 'Install Node.js'

          - bash: |
              npm install -g firebase-tools
            displayName: 'install firebase cli'

          - script: |
              npm install -g @angular/cli
              npm install
              ng build --prod
            displayName: 'npm install and build'

          - script: |
              firebase deploy --token '1//03n1UzyzgiAL6CgYIARAAGAMSNwF-L9IrdQOMVtV_cWa2aJ0aPCQbrgBs4970n7TmOg4JRWFcJxYqvc9LwiKp4nQi1qhPursS4kA'
            displayName: 'deploy to firebase'
```

Run & Check the pipeline:

![fb-token](_images/run-pipeline.png)
