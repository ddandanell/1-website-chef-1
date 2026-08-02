// Outbound links to mychef.id and WhatsApp. Centralised so we can swap UTM
// parameters, phone numbers, or destination URLs in one place. Every external
// CTA on this site routes through these helpers.

const MYCHEF_ORIGIN = 'https://mychef.id';
const WHATSAPP_BASE = 'https://wa.me/6289674072020';

export interface UtmParams {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
}

const DEFAULT_UTM: Required<Pick<UtmParams, 'source' | 'medium' | 'campaign'>> = {
  source: 'villa-catering-bali',
  medium: 'referral',
  campaign: 'guide',
};

/**
 * Build a mychef.id URL with UTM tracking.
 * @param content - utm_content value (usually the originating page slug)
 * @param path - deep path on mychef.id (e.g. "/private-chef-bali"). Defaults to homepage.
 */
export function mychefUrl(content?: string, path: string = '/'): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const params = new URLSearchParams({
    utm_source: DEFAULT_UTM.source,
    utm_medium: DEFAULT_UTM.medium,
    utm_campaign: DEFAULT_UTM.campaign,
  });
  if (content) params.set('utm_content', content);
  const qs = params.toString();
  return `${MYCHEF_ORIGIN}${normalizedPath}${qs ? `?${qs}` : ''}`;
}

/** Build a WhatsApp click-to-chat link with prefilled message. */
export function whatsappUrl(message?: string): string {
  const text =
    message ??
    "Hi myCHEF — I came from your villa catering guide and want to chat about a Bali villa dinner.";
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

/** Canonical deep-link targets used across editorial recommendations. */
export const MYCHEF_PATHS = {
  home: '/',
  privateChef: '/private-chef-bali',
  fineDining: '/fine-dining',
  catering: '/catering',
  events: '/events',
  pricing: '/pricing',
  quote: '/quote',
  chefs: '/chefs',
  reviews: '/reviews',
  weddingPackages: '/bali-wedding-catering-packages',
  inVilla: '/in-villa-service',
  bartenders: '/in-villa-service/bartenders',
  waiters: '/in-villa-service/waiters',
  butlers: '/in-villa-service/butlers',
  floatingBreakfast: '/catering/floating-breakfast',
  villaManagers: '/staffing/for-villa-managers',
  seminyak: '/locations/seminyak',
  canggu: '/locations/canggu',
  ubud: '/locations/ubud',
  uluwatu: '/locations/uluwatu',
  sanur: '/locations/sanur',
  nusaDua: '/locations/nusa-dua',
  jimbaran: '/locations/jimbaran',
  pererenan: '/locations/pererenan',
  bukit: '/locations/bukit',
  hireGuide: '/blog/how-to-hire-private-chef-bali-complete-guide',
  weddingGuide: '/blog/wedding-private-chef-bali-planning-guide',
  costGuide: '/blog/private-chef-cost-bali',
} as const;
