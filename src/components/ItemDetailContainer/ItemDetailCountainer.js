import { useState, useEffect } from "react"
import {getProductsById} from '../../asyncmock'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailCountainer = (id) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsById(1).then(prods => {
        setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <section>
            <ItemDetail products={products}/>
        </section>
    )
}

export default ItemDetailCountainer