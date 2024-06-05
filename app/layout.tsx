import type { Metadata } from "next";
import { Inter, Poppins, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { InternetCheck } from "@/utils";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
          {children}
        <InternetCheck />
        <Footer />
      </body>
    </html>
  );
}