import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return (
        <Link to={'/cart'} className='CartWidget'>
            <img src='/images/carrito.png' alt='carrito' className='CartImg' />
            { getQuantity() }
        </Link>
    )
}

export default CartWidget