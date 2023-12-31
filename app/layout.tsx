import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import SessionProvider from "@/components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nyetflix Clone",
  description:
    "A very nice website that looks a lot like Netflix, but is not, due to legal reasons.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <SessionProvider>{children}</SessionProvider> */}
          {children}
      </body>
    </html>
  );
}
