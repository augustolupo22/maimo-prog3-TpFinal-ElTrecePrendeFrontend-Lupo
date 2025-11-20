import "./globals.css";
import Navbar from "./component/Navbar/Navbar";
import { Poppins } from "next/font/google";
import Footer from "./component/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "El Trece Prende",
  description: "Canal de streaming con programación en vivo y on-demand",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
