import './globals.css';
import { Montserrat, Poppins } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--mont' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--poppins',
});

export const metadata = {
  title: 'Blockchain Spackomoni',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
