import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
import Produtos from "../pages/Products/produtos";
import "../styles/global.css";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/products" element={<Produtos />} />
          </Routes>
        </main>
        <Footer className="footer-container"/>
      </div>
    </BrowserRouter>
  );
}