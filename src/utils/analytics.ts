type EventParams = Record<string, string | number | boolean>;

export const trackEvent = (eventName: string, params: EventParams = {}) => {
  if (typeof window === 'undefined') {
    return;
  }

  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
    return;
  }

  const payload = { event: eventName, ...params };
  const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
  if (Array.isArray(dataLayer)) {
    dataLayer.push(payload);
  } else {
    (window as unknown as { dataLayer?: unknown[] }).dataLayer = [payload];
  }
};
