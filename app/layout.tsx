import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
