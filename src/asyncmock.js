const products = [
    {id: '1', name: 'Mesa Ratona Cuadrada', price: '11000', img: 'https://i.pinimg.com/564x/d1/86/4b/d1864b8dfaed905b3d5ae69bcbe1dd64.jpg', description: 'mesa ratona', category: 'mesa ratona', stock: 10, initial: 1},
    {id: '2', name: 'Escritorio', price: '14500', img: 'https://i.pinimg.com/474x/09/ef/1c/09ef1c6b7210e5383a13045430b6721d.jpg', description: 'escritorio mulples usos', category: 'escritorio', stock: 8, initial: 1},
    {id: '3', name: 'Mesa Pinotea', price: '22000', img: 'https://i.pinimg.com/564x/2e/90/8a/2e908abbeebe53a9b6526bc0a5795c80.jpg', description: 'mesa comedor', category: 'mesa comedor', stock: 4, initial: 1},
    {id: '4', name: 'Estantes Cuadrados', price: '4000', img: 'https://i.pinimg.com/564x/1c/46/4b/1c464b84276f7feffb1813b8f722d8a8.jpg', description: 'estantes cuadrados', category: 'estantes', stock: 30, initial: 1},
    {id: '5', name: 'Mesa Innovadora', price: '32000', img: 'https://i.pinimg.com/564x/08/6a/85/086a85aeb7e367e3b3ee8673461080bb.jpg', description: 'mesa comedor', category: 'mesa comedor', stock: 3, initial: 1},
    {id: '6', name: 'Mesa Hierro y Madera', price: '25000', img: 'https://i.pinimg.com/564x/b3/b7/b0/b3b7b0a44074acc014c16dea6ab98b71.jpg', description: 'mesa comedor', category: 'mesa comedor', stock: 3, initial: 1},
    {id: '7', name: 'Mesa Petirivi', price: '40000', img: 'https://i.pinimg.com/564x/44/36/d5/4436d52fe76498ba7254bb7d5318aab6.jpg', description: 'mesa comedor', category: 'mesa comedor', stock: 3, initial: 1},
    {id: '8', name: 'Mesa Ratona Rustica', price: '20000', img: 'https://i.pinimg.com/564x/d9/45/27/d945278c45550b96c92df8304f469e37.jpg', description: 'mesa ratona', category: 'mesa ratona', stock: 3, initial: 1},
    {id: '9', name: 'Mesa Ratona Indie', price: '17500', img: 'https://i.pinimg.com/564x/cc/28/27/cc28274dc11b7f5ecba575715803a60a.jpg', description: 'mesa ratona', category: 'mesa ratona', stock: 3, initial: 1},
    {id: '10', name: 'Mesa Ratona Industrial', price: '25000', img: 'https://i.pinimg.com/564x/28/d1/f4/28d1f411b2edaffd9b0b8e73985c84ae.jpg', description: 'mesa ratona', category: 'mesa ratona', stock: 3, initial: 1},
    {id: '11', name: 'Escritorio Industrial', price: '17500', img: 'https://i.pinimg.com/564x/0a/9f/12/0a9f12be282c4ab3fb6e5ed56f95db22.jpg', description: 'escritorio industrial', category: 'escritorio', stock: 8, initial: 1},
    {id: '12', name: 'Escritorio Rustico', price: '19500', img: 'https://i.pinimg.com/564x/94/cc/39/94cc39ef2846bf023fc76d12fd8f8b44.jpg', description: 'escritorio Rustico', category: 'escritorio', stock: 8, initial: 1},
    {id: '13', name: 'Escritorio Con Cajonera', price: '21000', img: 'https://i.pinimg.com/736x/b8/f7/37/b8f7371059f67e6bb0816e725cb98de8.jpg', description: 'escritorio con cajonera', category: 'escritorio', stock: 8, initial: 1},
    {id: '14', name: 'Estantes Industriales', price: '4500', img: 'https://i.pinimg.com/564x/b4/aa/d0/b4aad008c3bcc39d15ad23ad9b15e3a5.jpg', description: 'estantes de madera y hierro', category: 'estantes', stock: 30, initial: 1},
    {id: '15', name: 'Estante Toallero', price: '5500', img: 'https://i.pinimg.com/564x/7a/b9/5e/7ab95e59c65008554b7f0aeeac54ea1e.jpg', description: 'estantes ideal para el baño', category: 'estantes', stock: 30, initial: 1},
    {id: '16', name: 'Estante Flotante', price: '4500', img: 'https://i.pinimg.com/564x/ab/35/15/ab3515c192887a5d22601f8784e4ec62.jpg', description: 'estantes ideal para ordenar libros o juegos de los mas chicos', category: 'estantes', stock: 30, initial: 1},
]

const categories = [
    {id: 'mesa ratona', description: 'Mesa Ratona'},
    {id: 'escritorio', description: 'Escritorio'},
    {id: 'mesa comedor', description: 'Mesa Comedor'},
    {id: 'estantes', description: 'Estantes'}
]

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}