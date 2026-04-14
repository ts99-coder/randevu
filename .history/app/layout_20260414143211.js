import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
import Providers from './provider'
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/giris" || pathname === "/kayit";
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          {!isAuthPage && <Navbar />}
          {children}
        </Providers>
      </body>
    </html>
  );
}