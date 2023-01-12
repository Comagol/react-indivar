import { createContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
   
    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    } 

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })

        return count
    }
    
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id )
    }

    const deleteItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isInCart,
            deleteItem,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext