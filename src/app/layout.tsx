import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import DisclaimerWrapper from "@/components/DisclaimerWrapper";
import DisclaimerButton from "@/components/DisclaimerButton";
import DemoWatermark from "@/components/DemoWatermark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Demo SGB Energie GmbH",
  description:
    "Dieses Projekt wurde von Alkan Aziz entwickelt, um ein Beispiel der Website von SGB Energie GmbH zu erstellen. Es wurde ausschließlich zu Präsentationszwecken erstellt und verfolgt keine kommerziellen Absichten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased`}
      >
        <DemoWatermark />
        <DisclaimerWrapper>
          <Header />
          <div className="">{children}</div>
          <Sidebar />
          <Footer />
          <DisclaimerButton />
        </DisclaimerWrapper>
      </body>
    </html>
  );
}
