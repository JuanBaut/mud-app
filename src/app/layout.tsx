import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import MainLayout from "./main-layout";
import { Provider } from "jotai";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "MudApp",
  description: "Tu aliado para una logística eficiente y rentable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={rubik.className}>
        <Provider>
          <MainLayout>{children}</MainLayout>
        </Provider>
      </body>
    </html>
  );
}
