import "./globals.css";
import Navbar from "./component/Navbar/Navbar"; // ajustá la ruta si cambia
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "El Trece Prende",
  description: "Canal de streaming con programación en vivo y on-demand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
