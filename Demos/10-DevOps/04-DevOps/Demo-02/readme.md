# Deploy to Azure Kubernetes Services

Use [food-app](https://github.com/arambazamba/food-app)

## Demo

Adjust `acr-var` or use img from DockerHub:

```yaml
name: ui-build-deploy-k8s
pool:
  vmImage: "ubuntu-20.04"

trigger:
  branches:
    include:
      - master
  paths:
    include:
      - FoodUI/*

variables:
  fld: FoodUI/
  conACR: acrDefault
  conKube: "conKube"
  img: foodui
  subs: conFoodApp
  yml: $(Pipeline.Workspace)/s/az-manifests/foodui.yaml
  acr: integrationsonline.azurecr.io
  tag: "$(Build.BuildId)"
  ns: "staging"
  imagePullSecret: "secret"
  rnd: simple
  env: foodapp.staging

stages:
  - stage: "Prepare"
    displayName: "Build Img"    
    jobs:
      
      - job: BuildImg
        steps:
          - template: templates/docker-img.yaml
            parameters:
              con: $(conACR)
              img: $(img)
              path: $(fld)      

  - stage: Deploy
    displayName: Deploy stage

    jobs:
      - deployment: Deploy
        displayName: Deploy Job
        environment: $(env)
        strategy:
          runOnce:
            deploy:
              steps:
                - task: KubernetesManifest@0
                  displayName: Create imagePullSecret
                  inputs:
                    action: createSecret
                    secretName: $(imagePullSecret)
                    dockerRegistryEndpoint: $(conACR)
                    kubernetesServiceConnection: $(kube)
                    namespace: $(ns)

                - task: KubernetesManifest@0
                  displayName: Deploy to Kubernetes cluster
                  inputs:
                    action: "deploy"
                    kubernetesServiceConnection: $(conKube)
                    manifests: $(yml)
                    imagePullSecrets: $(imagePullSecret)
                    containers: "$(acr)/$(img):$(tag)"
```