declare global {
  interface Window {
    env: any;
  }
}

export const environment = {
  production: true,
  funcEP: window['env'].FUNC_EP,
};
