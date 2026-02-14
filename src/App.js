import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Rent from "./pages/rent";
import Contact from "./pages/contact";
import Form from "./pages/form";

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/form';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;