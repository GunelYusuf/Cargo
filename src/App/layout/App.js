import '../../assets/bootstrap.min.css';
import React,{useState} from 'react';
import {Header} from "../../components/shared/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from "../../components/Profile/Profile";
import {
    Routes,
    Route, Router,
} from "react-router-dom";




function App() {

  return (
      <>
          <Header/>

          <Routes>
              <Route path="/profile" exact element={<Profile/>} />
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
