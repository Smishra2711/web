import "./globals.css";
import Header from "./components/header";
import Script from "next/script";
import Footer from "./components/footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import * as Config from "./config";

export const metadata = {
   default: 'W Mishra Group',
    template: '%s | W Mishra',
  description: Config.default.metaDescription[0],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wmishra.com/" />
        <meta property="og:site_name" content="W Mishra Group" />
        <meta name="keywords" content={Config.default.metaKeywords.join(", ")} />
        <meta name="robots" content="noindex, nofollow"/>

        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        {/* Theme styles – consider hosting locally under /public if CDN blocks hotlinking */}
        <link
          rel="stylesheet"
          href="https://bootstrapmade.com/content/demo/Devin/assets/css/main.css"
        />
      </head>
      <body className="index-page">
        <Header />
        <div>{children}</div>
        <Footer />
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://bootstrapmade.com/content/demo/Devin/assets/js/main.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
      <GoogleAnalytics gaId="G-7CVWJE7NY7" />
    </html>
  );
}
