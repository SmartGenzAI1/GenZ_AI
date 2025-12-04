import './globals.css';
import Snow from '../components/Snow';

export const metadata = {
  title: 'GenZ AI',
  description: 'Fast. Smart. Calm.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Sora & Inter Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Sora:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <Snow />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
