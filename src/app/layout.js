import "./globals.css";
import ScrollProvider from "../components/ScrollProvider";
import { Manrope, Inter } from "next/font/google";
import Navbar from "../components/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Knoodle Knight",
  description: "Complete Game Development & Creative Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-black text-white`}>
        {/* <ScrollProvider> */}
        <Navbar interClass={inter.className} />
        <main className="pt-0 min-h-screen max-w-[1920px] mx-auto px-0">
          {children}
        </main>
        {/* </ScrollProvider> */}
      </body>
    </html>
  );
}
