import'./NavBar.css'
import CartWidget from './CartWidget/CartWitdget'

const NavBar = () => {
    return(
        <nav className="nav">
            <div>
                <div>
                    <ul className="navUl">
                        <li className="navUlLi">
                            <a href="" className="navUlLiA">Indivar Deco</a>    
                        </li>
                        <li className="navUlLi">
                            <a href="" className="navUlLiA">Productos</a>    
                        </li>
                        <li className="navUlLi">
                            <a href="" className="navUlLiA">Nosotros</a>    
                        </li>
                        <li className="navUlLi">
                            <a href="" className="navUlLiA">Contacto</a>    
                        </li>
                        <CartWidget/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar