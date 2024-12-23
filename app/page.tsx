import Benner from "./components/benner/page";
import Contant from "./components/contant/page";
import Footer from "./components/footer/page";
import Header from "./components/Header/page";
import Logo from "./components/logo/page";
import Navbar from "./components/navbar/page";

export default function Home() {
  return (
    <div>
      <Logo/>
      <Navbar/>
      <Benner/>
      <Header/>
      <Contant/>
      <Footer/>
    </div>
  )
}