import './NavBar.css'
import CartWidget from './CartWidget/CartWitdget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../asyncmock'

const NavBar = () => {
    const [categories, setCategories] = useState([])
  
    useEffect(() => {
      getCategories().then(categories => {
        setCategories(categories)
      })
    }, [])
  
    return (
        <nav className="NavBar" >
          <Link to='/' className='vacio'>
              <h3 className='Option2'>Indivar Deco</h3>
          </Link>
          <div className="Categories">
            { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
              className={'Option'}
            >{cat.description}</NavLink>)}
          </div>
          <CartWidget />
        </nav>
    )
  }
  
  export default NavBar