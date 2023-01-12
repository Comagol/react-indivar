import React, { useState } from 'react';

const Form = () => {
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

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form