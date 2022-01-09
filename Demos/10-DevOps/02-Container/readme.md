# Container

Use `../food-app/food-ui/`:

## Demos

- Docker Basics
- Explain multistage build of `food-ui` publish to DockerHub
- Host on Azure Container Instances (ACI) with injected config
- Docker Basics and using Azure Container Instances

### Multistage build of `food-ui` publish to DockerHub

Explain section in `dockerfile`:

```
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
```

### Host on Azure Container Instances (ACI) with injected config

