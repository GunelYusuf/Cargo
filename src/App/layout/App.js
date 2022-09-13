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
import ProductLink from "../../components/Profile/ProductLink";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Settings from "../../components/Profile/Settings";
import MyOrders from "../../components/Profile/MyOrders";



function App() {
  return (
      <>
          <Header/>

          <Routes>
              <Route path="/" exact element={<Profile/>} />
              <Route path={'/productlink'} exact element={<ProductLink/>}/>
              <Route path={'/setting'} element={<Settings/>}/>
              <Route path={'/myorders'} element={<MyOrders/>}/>
          </Routes>

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
              {/*<Footer/>*/}


      </>
  );
}

export default App;
