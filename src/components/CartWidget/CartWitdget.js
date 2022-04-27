import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return (
        <div className='CartWidget'>
            <img src='/images/carrito.png' alt='carrito' className='CartImg' />
            { getQuantity() }
        </div>
    )
}

export default CartWidget