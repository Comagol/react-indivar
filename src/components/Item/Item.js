import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, name, img, price }) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('Hice click en item')
    }
    
    return(
        <section className="CardItem">
            <header className="header">
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                { <Link to={`/detail/${id}`} className="Option">Ver detalle</Link> }
            </footer>
        </section>
    )
}

export default Item

