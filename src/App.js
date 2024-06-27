import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import About from "./pages/About";
import Parking from "./pages/Parking";
import Fastag from "./pages/Fastag";
import Product from "./pages/Product";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import DataDeletion from "./pages/DataDeletion";
import TermsandCondition from "./pages/T&C";
import Refund from "./pages/Refund";
import { Route, Routes } from "react-router-dom";
import images from "./assets/fastag2.svg"
function App() {
  
  return (
    <div className="app">
    <Navbar />
      <div style={{ marginTop: "90px" }}>
        <Routes>
          <Route path="/" element={<Home />} Component={Home}></Route>
          <Route exact path="/about" element={<About />} Component={About}></Route>
          <Route path="/parking" element={<Parking />}></Route>
          <Route path="/fastag" element={<Fastag />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/privacypolicy" element={<Privacy />}></Route>
          <Route path="/datadeletion" element={<DataDeletion />}></Route>
          <Route path="/termsandcondition" element={<TermsandCondition />}></Route>
          <Route path="/refundpolicy" element={<Refund/>}></Route>
          
        </Routes>
      </div>
      <Footer />
    
      
    </div>
    
  );
  
}

export default App;
