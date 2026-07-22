import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Accredian Enterprise | Upskill Your Workforce",

  description:
    "A modern enterprise learning platform built using Next.js, React.js, JavaScript, CSS, reusable components, responsive design, and Next.js API routes.",

  keywords: [
    "Accredian",
    "Enterprise Learning",
    "Next.js",
    "React",
    "JavaScript",
    "Education",
    "Corporate Training",
    "Upskilling",
  ],

  authors: [
    {
      name: "Yash Gajanan Karvekar",
    },
  ],

  creator: "Yash Gajanan Karvekar",

  openGraph: {
    title: "Accredian Enterprise",
    description:
      "Enterprise Learning Platform built using Next.js.",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
