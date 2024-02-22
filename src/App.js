import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "./pages/checkout/CheckoutForm";

const stripePromise = loadStripe('pk_live_51Ok94lC2TmPSNBHeRWEXvq45g2PuEsvU9UxnbLdXiZp7as42gTbbM9ENGKvMhoNSZi9Z9Jew21Jt2TMrXyMSY0RA003DkSYsAk');

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <header>
            <Navbar />
          </header>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            } />
           </Routes>
        </Router>
        
      </ShopContextProvider>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
