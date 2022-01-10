declare global {
  interface Window {
    env: any;
  }
}

export const environment = {
  production: false,
  authEnabled: true,
  apiUrl: window['env'].apiUrl,
  azure: {
    applicationInsights: window['env'].applicationInsights,
  },
};
