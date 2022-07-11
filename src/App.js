import { positions } from "@mui/system";
import { useEffect } from "react";
import Navbarr from "./componet/navbar";
import MainPage from "./pages/landingPage";

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
      <Navbarr />
      <MainPage />
    </div>
  );
}

export default App;
