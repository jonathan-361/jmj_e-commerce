// src/pages/Inicio.tsx
import React from 'react'
import Header from '@/components/custom/Header'
import Footer from '@/components/custom/Footer'
import ProductCard from '@/components/custom/ProductCards'
import '@/components/styles/PagPrincipal.css'
import Busquedas from '@/components/custom/Busquedas'

// Productos de ejemplo (puedes reemplazarlo con datos de tu API)
const featuredProducts = [
  { id: 1, name: 'Guayabera manga larga', price: 650, image: 'images/image.png', colors: ['blanco','beige','negro'], category: 'manga larga', date: '2025-01-15' },
  { id: 2, name: 'Guayabera Bordada', price: 650, image: 'images/guaya2.png', colors: ['blanco','beige','negro'], category: 'bordada', date: '2025-01-10' },
  { id: 3, name: 'Guayabera Tradicional', price: 650, image: 'images/guaya4.png', colors: ['blanco','beige','negro'], category: 'tradicional', date: '2025-01-05' },
  { id: 4, name: 'Guayabera Formal', price: 650, image: 'images/guayabera5.png', colors: ['blanco','beige','negro'], category: 'formal', date: '2024-12-20' },
  { id: 5, name: 'Guayabera Invierno', price: 650, image: 'https://miguayabera.com/cdn/shop/files/ventiapp-image--e235758b-f1dd-44a6-849e-da7f4fe452e9_4_2_2024_10_46_54_13.jpg?v=1716781295&width=360', colors: ['blanco','beige','negro'], category: 'formal', date: '2024-12-15' },
  { id: 6, name: 'Guayabera Clásica', price: 650, image: 'https://miguayabera.com/cdn/shop/files/triple_picueta_palo_de_rosa.jpg?v=1720032436&width=360', colors: ['blanco','beige','negro'], category: 'tradicional', date: '2024-12-10' },
]

const Inicio: React.FC = () => {
  return (
    <>
      {/* Header */}
      <Header />
      
      {/* Buscador con productos */}
      <Busquedas productos={featuredProducts} />

      {/* Contenido principal */}
      <main>
        {/* Sección Nueva Colección */}
        <section id="Colección">
          <div id="Temporada">
            <h2>Nueva Colección</h2>
            <p>
              Las guayaberas son más que una prenda: son historia, identidad y arte.
              En este catálogo Verano 2025, honramos la herencia artesanal con nuevos diseños.
            </p>
            <button>¡Comprar Ahora!</button>
          </div>
          <div id="Modelo">
            <img src="images/Modelo-guayabera.webp" alt="Modelo Guayabera" />
            <div className="circulo-blanco"></div>
            <div className="punto_arriba"></div>
            <div className="punto_abajo"></div>
            <div className="circulo-blanco2"></div>
          </div>
        </section>

        {/* Sección Novedades */}
        <section id="Novedades">
          <div className="Contenedor">
            <div className="contenedor-izquierda">
              <div className="Top">
                <img src="images/Top-venta.png" alt="Top venta" />
                <h3>
                  Top Productos de la tienda
                  <br />
                  Lo mejor del Mes
                </h3>
                <button>Explorar</button>
              </div>
            </div>
            <div className="columna-derecha">
              <div className="Infantil">
                <img src="images/Infantil-guayabera.png" alt="Infantil" />
                <h4>Guayaberas para niños</h4>
                <button>Explorar</button>
              </div>
              <div className="Formal">
                <img src="images/Formal-guayabera.png" alt="Formal" />
                <h4>Situaciones Formales</h4>
                <button>Explorar</button>
              </div>
            </div>
            <div className="Peluche">
              <h2>¡Ya a la venta!</h2>
              <img src="images/Muñeco.png" alt="Muñeco" />
              <button>¡Compre Ahora!</button>
            </div>
          </div>
        </section>

        {/* Sección Catálogo de Productos */}
        <section id="CatalogoGuayaberas">
          <div className="Cont-gen">
            <div className="titulo-seccion">
              <h4>Temporada 2025</h4>
              <h2>Guayaberas Yucatecas</h2>
              <h4>La tradición que nunca pasa de moda</h4>
            </div>

            <div className="contenedor-cards">
              {featuredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  colors={product.colors}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Inicio
