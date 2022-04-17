import { link } from 'react-router-dom'
import './Item.css'

const Item = ({id, name, img, price }) => {
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
                {/* <link to={`/detail/${id}`} className="Option">Ver detalle</link> */}
            </footer>
        </section>
    )
}

export default Item

