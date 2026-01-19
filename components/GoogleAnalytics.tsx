'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  // Don't render if it's the placeholder ID
  if (measurementId === 'G-XXXXXXXXXX') {
    return null;
  }

  // Validate measurementId format (G-XXXXXXXXXX where X is alphanumeric)
  const isValidFormat = /^G-[A-Z0-9]{10}$/i.test(measurementId);
  if (!isValidFormat) {
    console.error(`Invalid Google Analytics Measurement ID format: ${measurementId}`);
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}');
          `,
        }}
      />
    </>
  );
}
