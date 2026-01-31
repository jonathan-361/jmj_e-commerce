import React, { useState, useMemo } from 'react'
import ProductCard from '@/components/custom/ProductCards'
import '@/components/styles/Busquedas.css'

interface Producto {
  id: number
  name: string
  price: number
  image: string
  colors: string[]
  category?: string
  date?: string
}

interface BusquedaAvanzada {
  keyword: string
  date: string
  type: string
  operator: 'AND' | 'OR' | 'NOT'
}

interface BusquedasProps {
  productos: Producto[]
}

const Busquedas: React.FC<BusquedasProps> = ({ productos }) => {
  const [busquedaSimple, setBusquedaSimple] = useState('')
  const [busquedaAvanzada, setBusquedaAvanzada] = useState<BusquedaAvanzada>({
    keyword: '',
    date: '',
    type: '',
    operator: 'AND'
  })
  const [modoAvanzado, setModoAvanzado] = useState(false)

  // Búsqueda Simple
  const resultadosSimple = useMemo(() => {
    if (!busquedaSimple.trim()) return productos

    return productos.filter(producto =>
      producto.name.toLowerCase().includes(busquedaSimple.toLowerCase()) ||
      producto.category?.toLowerCase().includes(busquedaSimple.toLowerCase())
    )
  }, [busquedaSimple, productos])

  // Búsqueda Avanzada mejorada
  const resultadosAvanzada = useMemo(() => {
    if (!modoAvanzado) return resultadosSimple

    const { keyword, date, type, operator } = busquedaAvanzada

    // Si no hay filtros, devuelve todos
    if (!keyword && !date && !type) return productos

    if (operator === 'AND') {
      // TODOS los criterios deben cumplirse
      return productos.filter(p => {
        const cumpleKeyword = !keyword || p.name.toLowerCase().includes(keyword.toLowerCase())
        const cumpleDate = !date || p.date === date
        const cumpleType = !type || p.category?.toLowerCase() === type.toLowerCase()
        return cumpleKeyword && cumpleDate && cumpleType
      })
    } else if (operator === 'OR') {
      // AL MENOS UNO debe cumplirse
      return productos.filter(p => {
        const cumpleKeyword = keyword && p.name.toLowerCase().includes(keyword.toLowerCase())
        const cumpleDate = date && p.date === date
        const cumpleType = type && p.category?.toLowerCase() === type.toLowerCase()
        return cumpleKeyword || cumpleDate || cumpleType
      })
    } else if (operator === 'NOT') {
      // EXCLUYE los que cumplen
      return productos.filter(p => {
        const cumpleKeyword = keyword && p.name.toLowerCase().includes(keyword.toLowerCase())
        const cumpleDate = date && p.date === date
        const cumpleType = type && p.category?.toLowerCase() === type.toLowerCase()
        return !(cumpleKeyword || cumpleDate || cumpleType)
      })
    }

    return productos
  }, [modoAvanzado, busquedaAvanzada, productos])

  const resultados = modoAvanzado ? resultadosAvanzada : resultadosSimple
  const mostrarResultados = modoAvanzado || busquedaSimple.trim() !== ''

  return (
    <div className="busquedas-container">
      {/* Búsqueda Simple */}
      <div className="Buscador">
        <input
          type="text"
          placeholder="Buscar..."
          value={busquedaSimple}
          onChange={(e) => {
            setBusquedaSimple(e.target.value)
            setModoAvanzado(false)
          }}
          style={{ fontSize: '18px' }}
          className="input-busqueda"
        />
        <button className="btn-buscar">
          <img
            src="https://www.svgrepo.com/show/532552/search-alt-2.svg"
            alt="Buscar"
          />
        </button>
      </div>

      {/* Toggle Búsqueda Avanzada */}
      <div className="toggle-avanzada">
        <button
          className={`btn-toggle ${modoAvanzado ? 'activo' : ''}`}
          onClick={() => setModoAvanzado(!modoAvanzado)}
        >
          {modoAvanzado ? 'Búsqueda Simple' : 'Búsqueda Avanzada'}
        </button>
      </div>

      {/* Búsqueda Avanzada */}
      {modoAvanzado && (
        <div className="busqueda-avanzada">
          <div className="filtro-grupo">
            <label>Palabra clave:</label>
            <input
              type="text"
              value={busquedaAvanzada.keyword}
              onChange={(e) =>
                setBusquedaAvanzada({ ...busquedaAvanzada, keyword: e.target.value })
              }
              placeholder="Escribe una palabra..."
            />
          </div>

          <div className="filtro-grupo">
            <label>Fecha:</label>
            <input
              type="date"
              value={busquedaAvanzada.date}
              onChange={(e) =>
                setBusquedaAvanzada({ ...busquedaAvanzada, date: e.target.value })
              }
            />
          </div>

          <div className="filtro-grupo">
            <label>Tipo/Categoría:</label>
            <select
              value={busquedaAvanzada.type}
              onChange={(e) =>
                setBusquedaAvanzada({ ...busquedaAvanzada, type: e.target.value })
              }
            >
              <option value="">Selecciona una categoría</option>
              <option value="manga larga">Manga Larga</option>
              <option value="bordada">Bordada</option>
              <option value="tradicional">Tradicional</option>
              <option value="formal">Formal</option>
            </select>
          </div>

          <div className="filtro-grupo">
            <label>Operador:</label>
            <select
              value={busquedaAvanzada.operator}
              onChange={(e) =>
                setBusquedaAvanzada({
                  ...busquedaAvanzada,
                  operator: e.target.value as 'AND' | 'OR' | 'NOT'
                })
              }
            >
              <option value="AND">AND (Todos los criterios)</option>
              <option value="OR">OR (Al menos uno)</option>
              <option value="NOT">NOT (Excluir)</option>
            </select>
          </div>

          <button
            className="btn-limpiar"
            onClick={() =>
              setBusquedaAvanzada({
                keyword: '',
                date: '',
                type: '',
                operator: 'AND'
              })
            }
          >
            Limpiar Filtros
          </button>
        </div>
      )}

      {/* Resultados */}
      {mostrarResultados && (
        <div className="resultados">
          {resultados.length > 0 ? (
            <>
              <h3>Resultados ({resultados.length})</h3>
              <div className="grid-resultados">
                {resultados.map((producto) => (
                  <ProductCard
                    key={producto.id}
                    name={producto.name}
                    price={producto.price}
                    image={producto.image}
                    colors={producto.colors}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="sin-resultados">
              <p>❌ No hay resultados que coincidan con tu búsqueda</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Busquedas