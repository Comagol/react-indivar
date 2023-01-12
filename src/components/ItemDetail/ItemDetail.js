import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Counter from   '../ItemCount/Counter'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, initial , stock }) => {
    const { addItem, isInCart } = useContext(CartContext)

    const handleAdd = (count) => {
        const productObj = {
            id, name , price, img , quantity: count
        }
        addItem({...productObj, quantity:count})
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price} 
                </p>
                <div>
                    {/* {quantity > 0 ? <Link to='/cart'>Todavia no va al carrito</Link> : <Count onConfirm={handleAdd} stock={stock}/> } */}
                    { isInCart(id) ? <Link to='/cart'>Ir al carrito</Link> : <Counter onAdd={handleAdd} stock={stock} initial={initial}/> }
                </div>
            </section> 
        </article>
    )
}

export default ItemDetail