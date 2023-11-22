import Header from '../components/Header';
import './globals.css'
import Providers from "./Providers";
import NavBar from "../components/NavBar";
import Footer from "../components/landing-page/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
