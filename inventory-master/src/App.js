// import logo from "../public/images/logo.png";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Brands from "./components/Brands.js";
import Header from "./components/Header.js";
import Categories from "./components/Categories.js";
import Testimonials from "./components/Testimonials.js";
import Offer from "./components/Offer.js";
import Featured from "./components/Featured.js";
import Account from "./components/account/Account.js";
function App() {
  //   <script>
  //     var MenuItems = document.getElementById("MenuItems");
  //     MenuItems.style.maxHeight = "0px";
  //     function menutoggle() {
  //         if (MenuItems.style.maxHeight == "0px") {
  //             MenuItems.style.maxHeight = "200px"
  //         }
  //         else {
  //             MenuItems.style.maxHeight = "0px"
  //         }
  //     }
  // </script>
  return (
    <>
      <Navbar />
      <Account />
      {/* <Header />
      <Categories />
      <Featured />
      <Offer />
      <Testimonials />
      <Brands /> */}
      <Footer />
    </>
  );
}

export default App;
