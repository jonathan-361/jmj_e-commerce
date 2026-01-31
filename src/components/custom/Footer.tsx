import React from 'react'
import "@/components/styles/Footer.css"

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="info">
        <div>
          <h3>Consulta con la marca para negocios</h3>
          <p>JMJ marca 100% yucateca</p>
        </div>
        <button>Contáctanos!</button>
      </div>

      <div id="Compania">
        <h5>Compañia info</h5>
        <nav>
          <a href="">Sobre Nosotros</a>
          <a href="">Transportista</a>
          <a href="">Estamos Contratando</a>
          <a href="">Blog</a>
        </nav>
      </div>

      <div id="legal">
        <h5>Legal</h5>
        <nav>
          <a href="">Sobre Nosotros</a>
          <a href="">Transportista</a>
          <a href="">Estamos Contratando</a>
          <a href="">Blog</a>
        </nav>
      </div>

      <div id="Caracteristicas">
        <h5>Características</h5>
        <nav>
          <a href="">Sobre Nosotros</a>
          <a href="">Transportista</a>
          <a href="">Estamos Contratando</a>
          <a href="">Blog</a>
        </nav>
      </div>

      <div id="Recursos">
        <h5>Recursos</h5>
        <nav>
          <a href="">Sobre Nosotros</a>
          <a href="">Transportista</a>
          <a href="">Estamos Contratando</a>
          <a href="">Blog</a>
        </nav>
      </div>

      <div id="Contacto">
        <h5>Contacto</h5>
        <nav>
          <a href="">
            <img src="images/ring-phone.png" alt="" /> (999) 365-8975
          </a>
          <a href="">
            <img src="images/ubicacion.png" alt="" /> 97390, México, Yucatán
          </a>
          <a href="">
            <img src="images/carta.png" alt="" /> JMJBussines@gmail.com
          </a>
        </nav>
      </div>

      <div id="final">
        <div>
          <p>Hecho con orgullo Mexicano y Yucateco</p>
        </div>
        <div>
          <img src="images/facebook.png" alt="Facebook" />
          <img src="images/instagram.png" alt="Instagram" />
          <img src="images/X.png" alt="X" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
