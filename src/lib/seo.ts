import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setOg(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const DYNAMIC_LD_ID = 'jsonld-route';

function setJsonLd(payload: Record<string, unknown> | Record<string, unknown>[] | undefined) {
  const existing = document.getElementById(DYNAMIC_LD_ID);
  if (existing) existing.remove();
  if (!payload) return;
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = DYNAMIC_LD_ID;
  script.textContent = JSON.stringify(payload);
  document.head.appendChild(script);
}

export function useSEO({ title, description, canonical, jsonLd }: SeoOptions) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setOg('og:title', title);
    setOg('og:description', description);
    setOg('og:type', 'article');
    const url = canonical ?? `https://1-website-chef-1.vercel.app${window.location.pathname}`;
    setOg('og:url', url);
    setCanonical(url);
    setJsonLd(jsonLd);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [title, description, canonical, jsonLd]);
}
