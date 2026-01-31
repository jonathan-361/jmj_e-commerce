// src/components/Header.tsx
import React from 'react'
import JMJIcon from './SVG/JMJIcon'
import '@/components/styles/Header.css'

const Header: React.FC = () => {
  return (
    <header>
      <div className="LogoTip">
        <a href="#inicio">
          <JMJIcon />
        </a>
      </div>

      <div className="opciones">
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#CatalogoGuayaberas">Tienda</a>
          <a href="#Compania">Nosotros</a>
          <a href="#Contacto">Contacto</a>
        </nav>
      </div>

      <div className="carito-perfil">
        <div id="user">
          <img
            src="https://www.svgrepo.com/show/532362/user.svg"
            alt="Usuario"
          />
          <a href="#login">Iniciar</a> / <a href="#registro">Registro</a>
        </div>
        <div id="carrto">
          <a href="#carrito">
            <img
              src="https://www.svgrepo.com/show/477562/shopping-cart-free-15.svg"
              alt="Carrito"
            />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
