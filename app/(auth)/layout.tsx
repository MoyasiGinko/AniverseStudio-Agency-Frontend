import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/ai-tools/header";
import Footer from "@/components/ai-tools/footer";
import ClientProviders from "./client-providers";

// Define the fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </ClientProviders>
      </body>
    </html>
  );
}
