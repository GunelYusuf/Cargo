import '../../assets/bootstrap.min.css';
import {Header} from "../../components/shared/Header/Header";
import {Carousel} from "../../components/shared/Carousel/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rates from "../../components/shared/RatesTable/Rates";
import ShopCountry from "../../components/shared/ShopsNavbar/ShopCountry";
import Footer from "../../components/shared/Footer/Footer";
import Register from "../../components/shared/Register/Register";
import Login from "../../components/shared/Login/Login";
import ForgetPassword from "../../components/shared/ForgetPassword/ForgetPassword";
import About from "../../components/shared/About/About";
import NotFound from "../../components/shared/404/NotFound";
import FAQ from "../../components/shared/FAQ/FAQ";
import ProhibitedItems from "../../components/shared/ProhibitedItems/ProhibitedItems";
import Dasima from "../../components/shared/Dasima/Dasima";
import Rules from "../../components/shared/Rules/Rules";
import Contact from "../../components/shared/Contact/Contact";
import Profile from "../../components/Profile/Profile";





function App() {
  return (
      <>
     <Header/>
     {/*<Login/>*/}
     {/*<ForgetPassword/>*/}
     {/* <About/>*/}
     {/*<NotFound/>*/}
     {/* <FAQ/>*/}
     {/*<ProhibitedItems/>*/}
     {/* <Rules/>*/}
     {/*<Contact/>*/}
     {/*<Dasima/>*/}
     {/*<Register/>*/}
     {/*<Carousel/>*/}
     {/*<Rates/>*/}
     {/*<ShopCountry/>*/}
      <Profile/>
     <Footer/>
      </>
  );
}

export default App;
