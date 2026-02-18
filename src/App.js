import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Rent from "./pages/rent";
import Contact from "./pages/contact";
import Form from "./pages/form";
import Tentwenty from "./pages/tentwentyform";
import UN1 from "./pages/un1";
import UN2 from "./pages/un2";
import UN3 from "./pages/un3";
import UN4 from "./pages/un4";
import UN5 from "./pages/un5";

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/form' || location.pathname === '/tentwentyform'||location.pathname === '/un1'||location.pathname === '/un2'||location.pathname === '/un3'||location.pathname === '/un4'||location.pathname === '/un5'; 

  return (
    <>
      {!hideHeaderFooter && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
            <Route path="/tentwentyform" element={<Tentwenty />} />
        <Route path="/un1" element={<UN1/>} />
        <Route path="/un2" element={<UN2/>} />
        <Route path="/un3" element={<UN3/>} />
        <Route path="/un4" element={<UN4/>} />
        <Route path="/un5" element={<UN5/>} />
        <Route path="/rent" element={<Rent/>} />
        <Route path="/contact" element={<Contact/>} />
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