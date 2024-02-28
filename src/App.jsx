import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { PaymentPage } from "./pages/Stripe/PaymentPage";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <header>
            <Navbar />
          </header>
          <div> {/* Wrap the Route components inside a div */}
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/PaymentPage" element={<PaymentPage />} />
            </Routes>
          </div>
        </Router>
      </ShopContextProvider>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
