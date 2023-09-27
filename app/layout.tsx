import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance next13 | With Best ",
  description: "Performance next13 application",
  keywords: ["performance", "next13"],
  authors: [
    {
      name: "Sabbir Hossain Shuvo",
      url: "https://github.com/devlopersabbir",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
