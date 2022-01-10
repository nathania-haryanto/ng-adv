declare global {
  interface Window {
    env: any;
  }
}

export const environment = {
  production: true,
  authEnabled: true,
  apiUrl: 'https://localhost:5001/',
  azure: {
    applicationInsights: 'a196d36f-1782-4da4-8f95-a80585361df7',
  },
};
