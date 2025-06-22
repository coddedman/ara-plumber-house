import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import { AnalyticsTracker } from '@/analytics-tracker'

export const metadata: Metadata = {
  title: 'Ara Plumber House',
  description: 'Ara plumber House',
  generator: 'Ara plumber House',
  icons: {
    icon: '/images/Logo.png',
  },
}

const GA_ID = 'G-KKXPX4FZY8'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        {/* Analytics Tracker for SPA routing */}
        <AnalyticsTracker gaId={GA_ID} />
        <main>{children}</main>
      </body>
    </html>
  )
}
