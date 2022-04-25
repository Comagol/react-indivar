import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock)
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > initial)
        setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const [typeInput, setTypeInput] = useState(true)
    const [quantity, setQuantity] = useState(0)

    const handleAdd = (count) => {
        console.log('Agregar al carrito')
        setQuantity(count)
    }

    const Count =  ButtonCount 

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
                    {quantity > 0 ? <Link to='/cart'>Todavia no va al carrito</Link> : <Count onConfirm={handleAdd} stock={stock}/> }
                </div>
            </section> 
        </article>
    )
}

export default ItemDetail