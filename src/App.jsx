import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import contexts
import { UserauthProvider } from "./context/UserauthContext";

// Import private route/link check
import PrivateRouteCheck from "./hocs/PrivateRouteCheck";

// Import hocs
import Layout from "./hocs/Layout";
import ChatBubbleLayout from "./hocs/ChatBubbleLayout";

// Import main pages
import Home from "./pages/Home";

// Import introduction pages
import Features from "./pages/Intro/Features";
import Pricing from "./pages/Intro/Pricing";

// Import authentication pages

// Import main pages
import Dashboard from "./pages/Main/Dashboard";

// Import special pages
import PageNotFound from "./pages/Error/PageNotFound";

// Import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login"
import SignIn from "./components/SignIn/SignIn"
import ForgetPassword from "./components/ForgetPassword/ForgetPassword"
import NavbarComponent from "./components/Navbar/Navbar";
import Navbar from "./components/Nav/Navbar";
import BuyToken from "./components/BuyToken/Buy";
const App = () => (
  <BrowserRouter>
    <Navbar /> {/* If Navbar should be persistent */}
    <Routes>
      <Route path="/" element={<BuyToken />} />
    </Routes>
  </BrowserRouter>
);


export default App;
