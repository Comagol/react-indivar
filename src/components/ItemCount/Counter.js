import './Counter.css';
import { useState } from 'react';


const Counter = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (initial < count){
            setCount(count - 1)
        }else{
            alert("La cantidad no puede ser menor a " + initial)
        }
        
    }

    const increment = () => {
        if (count < stock) {
            setCount (count + 1)
        }else {
            alert("Para pedidos mayores a esta cantidad " + stock + " contartarnos por instagram")
        }
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
} 

export default Counter