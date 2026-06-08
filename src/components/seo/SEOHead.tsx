import { useEffect } from 'react';

type SEOHeadProps = {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: Array<Record<string, unknown>>;
};

const setMeta = (name: string, content: string) => {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const setCanonical = (href: string) => {
  let tag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
};

export function SEOHead({ title, description, canonical, jsonLd = [] }: SEOHeadProps) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setCanonical(canonical);

    document.querySelectorAll('[data-seo-jsonld="true"]').forEach((node) => node.remove());
    jsonLd.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoJsonld = 'true';
      script.id = `seo-jsonld-${index}`;
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [canonical, description, jsonLd, title]);

  return null;
}
