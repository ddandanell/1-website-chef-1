// Outbound links to mychef.id and WhatsApp. Centralised so we can swap UTM
// parameters, phone numbers, or destination URLs in one place. Every external
// CTA on this site routes through these helpers.

const MYCHEF_BASE = 'https://mychef.id/';
const WHATSAPP_BASE = 'https://wa.me/6282237565997';

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

/** Build a mychef.id URL with UTM tracking. */
export function mychefUrl(content?: string): string {
  const params = new URLSearchParams({
    utm_source: DEFAULT_UTM.source,
    utm_medium: DEFAULT_UTM.medium,
    utm_campaign: DEFAULT_UTM.campaign,
  });
  if (content) params.set('utm_content', content);
  return `${MYCHEF_BASE}?${params.toString()}`;
}

/** Build a WhatsApp click-to-chat link with prefilled message. */
export function whatsappUrl(message?: string): string {
  const text =
    message ??
    "Hi myCHEF — I came from your villa catering guide and want to chat about a Bali villa dinner.";
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}
