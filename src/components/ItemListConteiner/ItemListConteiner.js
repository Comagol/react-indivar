import { useState, useEffect } from "react"
import {getProducts} from '../../asyncmock'
import ItemList from "../ItemList/ItemList"


const ItemListCountenier = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(prods => {
        setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <section>
            <h1>{props.title}</h1>
            <ItemList products={products}/>
        </section>
    )
}

export default ItemListCountenier