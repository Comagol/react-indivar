import './Cart.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cart , deleteItem , clearCart } = useContext ( CartContext )

    return (
        <div className='cartDiv'>
        { cart.length > 0 ? (
            cart.map((item, index) => (
                <div key={item.id}>
                    <h2>Producto: {item.name}</h2>
                    <picture>
                        <img src={item.img} alt={item.name}/>
                    </picture>
                    <h3>Precio unitario: ${item.price}</h3>
                    <h3>Cantidad: {item.quantity}</h3>
                    <button onClick={() => deleteItem(item.id)}>Eliminar producto</button>
                </div>
            ))
        ) : (
            <p>No hay productos agregados al carrito</p>
        )}
        { cart.length > 0 && <button onClick={clearCart}>Vaciar carrito</button> }
        { cart.length > 0 && <button><Link to="/form">Finalizar Compra</Link></button> }
    </div>
    )
}

export default Cart