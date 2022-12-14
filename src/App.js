import { positions } from "@mui/system";
import { useEffect } from "react";
import Navbarr from "./componet/navbar";
import MainPage from "./pages/landingPage";
import {Helmet} from "react-helmet";

function App() {
  // useEffect(() => {
  //   var navbar = document.getElementById("nav-bar");
   
  //   window.onscroll = () => {
  //     if (window.onscroll > 22) {
  //       navbar.classList.add("scrolled");
  //       console.log(navbar)
  //     } else {
  //       navbar.classList.add("scrolled");
  //     }
  //   };
  // }, [onscroll]);
 
  return (
    <div className="main-page">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Nene's Resume</title>
            </Helmet>
      <Navbarr />
      <MainPage />
    </div>
  );
}

export default App;
