import { siteDetails } from '../data/siteDetails';

export const whatsappBase = 'https://wa.me/918817503658';

export function createWhatsappLink(message?: string) {
  if (!message) {
    return whatsappBase;
  }

  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

export function quoteMessage(service: string, details?: Record<string, string>) {
  const lines = [`Hi AlterCraft, I would like a quote for ${service}.`];

  if (details) {
    Object.entries(details).forEach(([label, value]) => {
      if (value.trim()) {
        lines.push(`${label}: ${value.trim()}`);
      }
    });
  }

  lines.push(`Preferred contact number: ${siteDetails.phone}`);
  return lines.join('\n');
}
