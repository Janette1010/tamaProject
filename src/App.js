import Home from "./components/Home";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Form from "./components/Form"
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Products" element={<Products />} />
            <Route path="/Form" element={<Form />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
