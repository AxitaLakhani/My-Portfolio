import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Akshita Lakhani | .NET Full Stack Developer",

  description:
    "MCA Graduate and .NET Full Stack Developer portfolio",

  keywords: [
    ".NET Developer",
    "React Developer",
    "Full Stack Developer",
    "Akshita Lakhani",
  ],

  openGraph: {
    title: "Akshita Portfolio",
    description: "Developer portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable)}
    >
      <body>{children}</body>
    </html>
  );
}








// import type { Metadata } from "next";
// import "./globals.css";
// import { Geist } from "next/font/google";
// import { cn } from "@/lib/utils";

// const geist = Geist({subsets:['latin'],variable:'--font-sans'});

// export const metadata: Metadata = {
//   title: "Akshita Portfolio",
//   description:
//     "Frontend Developer Portfolio with React, TypeScript and Next.js",

//   keywords:[
//     "Frontend Developer",
//     "React Developer",
//     "Portfolio",
//     "TypeScript"
//   ],

// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={cn("font-sans", geist.variable)}>
//       <body>{children}</body>
//     </html>
//   );
// }