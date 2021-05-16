import React from 'react';

import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { FooterBase } from './styles';

function Footer() {

    return (
        <FooterBase>
            <nav className="footerNav">
            <div className="links">
                    <ul>
                        <li>Quem somos</li>
                        <li>História</li>
                        <li>Sobre nós</li>
                        <li>Notícias</li>
                    </ul>
                    <ul>
                       
                        <li>Missão</li>
                        <li>Valores</li>
                        <li>Política</li>
                        <li>Localização</li>
                    </ul>

            </div>
            <div className="socialMedia">
                <p>Contato </p>

                <a href="https://www.instagram.com/?hl=pt-br" target="_blank" rel="noopener noreferrer">
                    <FiInstagram size={36} color="red"/>
                </a>

                <a href="https://api.whatsapp.com/send?phone=5551997196460&text=Olá%20gostaria%20de%20saber%20mais%20informações%20sobre%20um%20produto%20que%20vi%20no%20site." target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={36} color="black"/>
                </a>

                <a href="mailto:@gmail.com" target="_blank" rel="noopener noreferrer">
                    <HiOutlineMail size={36} color="black"/>
                </a>

            </div>
        </nav>
        </FooterBase>
    );
}

export default Footer;