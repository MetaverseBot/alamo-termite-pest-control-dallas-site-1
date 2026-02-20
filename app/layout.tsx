import type {Metadata} from 'next';
import {Outfit, Work_Sans} from 'next/font/google';
import './globals.css'; // Global styles

const headingFont = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const bodyFont = Work_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alamo Termite & Pest Control | Trusted Pest Control in Dallas, TX',
  description:
    'Alamo Termite & Pest Control provides safe, reliable pest control services in Dallas, TX. Request a free quote today.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-slate-50 text-slate-900 antialiased`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
