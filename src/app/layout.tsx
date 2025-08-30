import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import {dark} from '@clerk/themes';




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Prepslide",
  description: "An AI-powered presentation assistant that helps you prepare stunning, impactful slides in minutes. From smart content structuring to design suggestions, Prepslide makes your presentations clear, engaging, and ready to impress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <html lang="en"  suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable}`}
        >
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  </ClerkProvider>
  );
}
