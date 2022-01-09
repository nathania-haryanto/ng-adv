# Advanced Angular Publishing & DevOps using Containers

Use `./food-app` to demonstrate deployment pattern

- Angular Hosting Options & Deployment
- Optimizing Angular for Docker & Kubernetes
- Introduction to Angular DevOps

## Requirements

- To deploy Food Api to an Azure App Service execute `deploy-api.azcli`:

```bash
env=staging
grp=ng-adv-$env
loc=westeurope
appPlan=ng-adv-$env
app=food-api-$env-$RANDOM

az group create -n $grp -l $loc

# Build and deploy food api
cd ./food-api
az webapp up -n $app -g $grp -p $appPlan -l $loc -r "DOTNET|6.0"
url=$(az webapp list -g $grp --query [0].defaultHostName)
echo "*** Use this apiUrl for your angular config: " $url
```

>Note: To focus on Angular we deploy Api To App Service and not to Containers. Config management is very easy there. Deployment takes around 5 min.