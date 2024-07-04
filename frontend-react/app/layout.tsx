import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionAuthProvider from "@/hooks/SessionAuthProvider";
import { ModalProviders } from "@/hooks/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prueba Tecnica Fianzas",
  description: "Creado por Sebastian Martinez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionAuthProvider>
          {children}
          <ModalProviders />
        </SessionAuthProvider>
      </body>
    </html>
  );
}
