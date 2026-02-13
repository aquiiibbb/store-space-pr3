import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Rent from "./pages/rent";
import Contact from "./pages/contact";
import Form from "./pages/form";
function App() {
  return (
    <BrowserRouter>
      <Header />  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  
      <Footer />  
    </BrowserRouter>
  );
}

export default App;