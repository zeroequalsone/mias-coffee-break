import { Metadata } from "next";
import "./globals.css";
import {
  poppins,
  nunito,
  grifa,
  knicknack,
  sundayNotes,
  modak,
  pacifico,
} from "./components/ui/fonts";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Mia's Coffee Break",
  description: "Mia's Coffee Break",
  icons: {
    icon: "/Icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`h-full antialiased ${poppins.className} ${nunito.variable} ${modak.variable} ${pacifico.variable} ${grifa.variable} ${knicknack.variable} ${sundayNotes.variable}`}
    >
      <body className="min-h-full bg-cream">
        <div className="flex flex-col max-w-[1600px] w-full mx-auto mt-4 px-4 lg:px-24">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
