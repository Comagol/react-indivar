import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailCountainer'

const ItemListFire = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getColeccionData()
    }, [])

    const getColeccionData = async () => {
        const db = getFirestore()
        const collectionRef = collection(db, 'items')
        const snapShot = await getDocs(collectionRef)
        setItems(snapShot.docs.map(d => ({ id: d.id, ...d.data() })));
        console.log(snapShot.docs.map(d => ({ id: d.id, ...d.data() })));
    }
    return (
        <ItemDetailContainer items={items} />
    )
}

export default ItemListFire