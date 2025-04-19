import '../styles/globals.css';

export const metadata = {
  title: 'TYDS 天羽設計',
  description: '現代極簡室內設計作品集網站',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}