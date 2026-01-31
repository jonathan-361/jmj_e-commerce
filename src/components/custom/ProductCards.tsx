import '@/components/styles/Producs.css'
// Definimos los props que el componente recibirá
interface ProductCardProps {
  name: string
  price: number
  image: string
  colors: string[]
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, colors }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="precio">${price} MXN</p>

      <div className="colores">
        {colors.map((color) => (
          <span key={color} className={`color ${color}`}></span>
        ))}
      </div>

      <div className="acciones">
        <input type="number" min="1" defaultValue={1} />
        <button>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ProductCard
