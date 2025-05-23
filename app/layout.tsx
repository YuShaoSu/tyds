// app/layout.tsx
import '../styles/globals.css';
import type { Metadata } from 'next';
import SmoothScrollProvider from '../components/SmoothScrollProvider'

export const metadata: Metadata = {
  title: 'TYDS 天羽設計',
  description: '現代極簡室內設計作品集網站',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <head />
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
