const Item = ({ name, img}) => {
    return(
        <section>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <h4>{name}</h4>
            <button>Ver detalle</button>
        </section>
    )
}

export default Item
