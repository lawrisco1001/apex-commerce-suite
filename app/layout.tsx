import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../src/index.css';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MarketHub - Your Trusted Marketplace for Quality Products',
  description: 'Shop millions of products from trusted sellers worldwide. Fast shipping, secure payments, and satisfaction guaranteed. Browse electronics, fashion, home goods and more.',
  keywords: 'marketplace, e-commerce, online shopping, electronics, fashion, home goods, deals',
  openGraph: {
    title: 'MarketHub - Your Trusted Marketplace',
    description: 'Shop millions of products from trusted sellers worldwide',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
