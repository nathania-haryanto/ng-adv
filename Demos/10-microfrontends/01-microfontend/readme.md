# Real-time connected Angular Microfrontend that is a part of an Event Driven Architecture (EDA)

Food orders kitchen Dashboard `food-orders-ui` imlplemented as Angular Microfronend using `@ngrx/component-store`

![architecture](_images/architecture.png)

## Readings

[CloudEvent schema](https://docs.microsoft.com/en-us/azure/event-grid/cloudevents-schema)

[SignalR](https://docs.microsoft.com/en-us/azure/azure-signalr)

## Demo

- Event Grid Topic receives a CloudEvent triggered by `post-order.http`
- A function app with that:
  - Acts as an endpoint for the event grid topic webhook subscription using a binding
  - Communicates with the SignalR service
- Azure SignalR Service providing real-time communication between Angular and the az function app

  > Note: The demo is an updated and modernized version of [https://github.com/DavidGSola/serverless-eventgrid-viewer](https://github.com/DavidGSola/serverless-eventgrid-viewer)

### Setup & Steps

Execute `create-foodorder-app.azcli` to provision the environment.

Update SignalR config in environment.ts and environment.prod.ts of `food-orders-ui`:

```typescript
export const environment = {
  production: false,
  fxEndpoint: 'https://foodorders-7325.azurewebsites.net/api',
};
```

Test using `post-order.http` by updating `@topicurl` and `@topickey`:

```
@topicurl=foodtopic-prod.westeurope-1.eventgrid.azure.net
@topickey=C1q1BdqhPGsNsmy5wBzjtsgTTN1u2GbiffNoU8EJlcM=

POST  https://{{topicurl}}//api/events HTTP/1.1
content-type: application/cloudevents+json; charset=utf-8
aeg-sas-key: {{topickey}}

{ ...
```
