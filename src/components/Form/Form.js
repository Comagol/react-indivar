import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import CartContext from '../../context/CartContext'

const Form = () => {

    const { clearCart } = useContext ( CartContext )

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // aqui se maneja la informacion y se procede a enviar los datos a donde sea necesario.
        console.log('Name:', name);
        console.log('Last Name:', lastname);
        console.log('Phone:', phone);
        console.log('Email:', email);
    }

    const [order, setOrders] = useState([])

    useEffect(() => {
        getColeccionOrder()
    }, [])

    const getColeccionOrder = async () => {
        const db = getFirestore()
        const collectionRef = collection(db, 'orders')
        const snapShot = await getDocs(collectionRef)
        setOrders(snapShot.docs.map(d => ({ id: d.id, ...d.data() })));
    }

   

    return (
        <form onSubmit={handleSubmit}>
            { order.length > 0 && <h1>tu Id de la compra es: {order[order.length-1].id}</h1> }
            <label>
                Nombre:
                <input type="text" value={name} onChange={event => setName(event.target.value)} />
            </label>
            <br />
            <label>
                Apellido:
                <input type="text" value={lastname} onChange={event => setLastname(event.target.value)} />
            </label>
            <br />
            <label>
                Teléfono:
                <input type="text" value={phone} onChange={event => setPhone(event.target.value)} />
            </label>
            <br />
            <label>
                Correo electrónico:
                <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
            </label>
            <br />
            <button type="submit" onClick={clearCart}>Enviar</button>
        </form>
    )
}

export default Form