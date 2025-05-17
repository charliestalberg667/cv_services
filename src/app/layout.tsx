import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/navbar";
import { LanguageProvider } from "@/components/language-provider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import Script from "next/script";
import {StrictMode} from "react";

// Load fonts
const inter = Inter({ subsets: ["latin"] });
const montserratAlternates = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});

export const metadata = {
  title: "cv services",
  description:
      "Installation de systèmes solaires | Installatie van zonne-energiesystemen",
  keywords:
      "solar install, solaire, installation solaire, énergie renouvelable, panneaux solaires, solutions énergétiques, énergie durable, énergie verte, zonne-energie, zonne-installatie, hernieuwbare energie, zonnepanelen, energieoplossingen, duurzame energie, groene energie",
  robots: "index, follow",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <StrictMode>
      <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-LN7BET84BQ"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LN7BET84BQ');
          `}
        </Script>
        {/* Organization Schema Markup for Logo */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "CV-Service",
          "url": "https://www.cv-service.be",
          "logo": "https://www.cv-service.be/images/logo.png"
        }) }} />
      </head>
      <body className={`${inter.className} ${montserratAlternates.variable}`}>
      <LanguageProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </LanguageProvider>
      </body>
      </html>
        </StrictMode>
  );
}