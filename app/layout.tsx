import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const workSans = localFont({
  src: [
    {
      path: "./fonts/Worksans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Worksans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Worksans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Worksans-Black.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Worksans-SemiBold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Worksans-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Worksans-Regular.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Worksans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Worksans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    }
  ],
 variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "BadaTech Directory",
  description: "Pitch, VOte and Grow with BadaTech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.variable}>{children}</body>
    </html>
  );
}
