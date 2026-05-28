import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "胡宇萱 | Portfolio",
  description: "Digital Editorial Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
