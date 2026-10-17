import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';
import WhatsAppButton from '@/components/WhatsAppButton';
import { BRAND } from '@/lib/constants';

const title = `${BRAND.name} · ${BRAND.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title,
  description: BRAND.description,
  openGraph: { title, description: BRAND.description, type: 'website', locale: 'es_PA', images: ['/logo.webp'] },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: BRAND.name,
  description: BRAND.description,
  telephone: `+${BRAND.whatsapp}`,
  areaServed: 'PA',
  url: BRAND.url,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeRegistry>
          {children}
          <WhatsAppButton />
        </ThemeRegistry>
      </body>
    </html>
  );
}
