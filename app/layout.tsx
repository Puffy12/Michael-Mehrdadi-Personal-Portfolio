import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import LayoutWrapper from "@/components/layout-wrapper";
import BodyWrapper from "@/components/body-wrapper";
import BodyClassWrapper from "@/components/body-class-wrapper";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: ' Michael Mehrdadi | Personal Portfolio',
  description: 'Michael is a full stack developer with 6 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <BodyClassWrapper />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <BodyWrapper>
              <LayoutWrapper>
                {children}
              </LayoutWrapper>
            </BodyWrapper>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

