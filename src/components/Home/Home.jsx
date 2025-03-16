import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Home.css"

export default function Home() {
    return (
        <>
        <div className="home-body">
        <div className="header">
                <img src="./src/assets/logo_sp2.png" id="logo" />
                <div className="form-content">
                    
                </div>
                
            </div>
            <div className="nd-body">
            <div className="sidebar">
                <p>Seu menu</p>
                <div className="menu-item">Dashboard</div>
                <div className="menu-item">Stock</div>
                <div className="menu-item">Vendas</div>
                <div className="menu-item">Históricos</div>
                <div className="menu-item">menu 5</div>
                <div className="menu-item">menu 6</div>
                <div className="menu-item">menu 7</div>
                <div className="menu-item">Definições</div>
            </div>
            <div className="content-area">
                <p>content area</p>
                <h1>
                    Here you'll have all the pages
                </h1>
            </div>
            </div>
            <Footer></Footer>
        </div>
        </>
    );
}