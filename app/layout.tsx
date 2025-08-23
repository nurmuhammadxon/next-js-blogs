import type { Metadata } from "next";
import { Work_Sans, Crete_Round } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
import { ThemeProvider } from "../components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";

const WorkSansFont = Work_Sans({
  weight: ["500", "600"],
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const CreteRoundFont = Crete_Round({
  weight: ["400"],
  variable: "--font-crete-round",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhiddinov-uz.uz"),
  title: "Dasturlashga oid maqolalar",
  description:
    "Dasturlash bo'yicha yangiliklar, maqolalar va foydali maslahatlar. Web dasturlash, JavaScript, React, Node.js, algoritmlar va dasturchilar uchun dolzarb mavzular.",
  authors: [{ name: "Muhiddinov", url: "https://muhiddinov-uz.uz" }],
  icons: { icon: "/favicon.png" },
  keywords: [
    "dasturlash",
    "JavaScript",
    "React",
    "Node.js",
    "algoritmlar",
    "web dasturlash",
    "frontend",
    "backend",
    "IT maqolalar",
    "dasturchilar uchun maslahatlar",
    "programming blog",
    "Muhiddinov Dev",
  ],
  openGraph: {
    title: "Dasturlashga oid maqolalar",
    description:
      "Dasturlash bo'yicha yangiliklar, maqolalar va foydali maslahatlar. Web dasturlash, JavaScript, React, Node.js, algoritmlar va dasturchilar uchun dolzarb mavzular.",
    url: "https://muhiddinov-uz.uz",
    siteName: "Muhiddinov",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Muhiddinov Dev - dasturlash maqolalari",
      },
    ],
    locale: "en_EN",
    type: "website",
    emails: "muhiddinovnurmuhammadxon1@gmail.com",
    countryName: "Uzbakistan",
  },
};

function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${WorkSansFont.variable} ${CreteRoundFont.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader showSpinner={false} />
          {children}
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
