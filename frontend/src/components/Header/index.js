import React from 'react';
import { Link } from 'react-router-dom'
import { FiLogIn } from "react-icons/fi";
import Logo from '../../assets/logo.jpeg';

import Camera from '../../assets/iconCamera.jpeg';
import Diamond from '../../assets/iconDiamond.jpeg';
import Heart from '../../assets/iconHeart.jpeg';
import Car from '../../assets/iconLittleCar.jpeg';
import Make from '../../assets/iconHeart.jpeg';
import './Header.css'


function Header() {

    return (
        <nav className="Header">

            <div className="HeaderLogo">
                <Link to="/">
                    <img className="Logo" src={Logo} alt="Querida Clotilde" />
                </Link>
            </div>


            <div className="imagesMenu">
                <Link to="/favoritos">
                    <img className="Heart" src={Heart} alt="Favoritos" />
                </Link>
                <Link to="/meucarrinho">
                    <img className="Car" src={Car} alt="Meu carrinho" />
                </Link>
                <Link to="/acessorios/e/bijus">
                    <img className="Diamond" src={Diamond} alt="Acessórios e jóias" />
                </Link>
                <Link to="/beleza">
                    <img className="Make" src={Make} alt="Maquiagens e perfumes" />
                </Link>
                <Link to="/catalogo">
                    <img className="Camera" src={Camera} alt="Catálogo de produtos" />
                </Link>
                <button>
                    <Link className="login-link" to="/Logon">
                        <FiLogIn size={24} color="black" />
                        <h3>Entrar</h3>
                    </Link>
                </button>
            </div>



        </nav>
    );
}

export default Header;