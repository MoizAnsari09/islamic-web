

import "./globals.css";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";
import Logo from "./components/logo/page";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Logo/>
         <Navbar/>
         
        {children}
        <Footer/>
      </body>
    </html>
  );
}

