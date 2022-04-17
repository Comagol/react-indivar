const products = [
    {id: '1', name: 'Mesa Ratona', price: '5000', img: 'https://i.pinimg.com/564x/d1/86/4b/d1864b8dfaed905b3d5ae69bcbe1dd64.jpg', description: 'mesa ratona', category: 'mesa ratona'},
    {id: '2', name: 'Escritorio', price: '7500', img: 'https://i.pinimg.com/474x/09/ef/1c/09ef1c6b7210e5383a13045430b6721d.jpg', description: 'escritorio gamming', category: 'escritorio'},
    {id: '3', name: 'Mesa', price: '12000', img: 'https://i.pinimg.com/564x/2e/90/8a/2e908abbeebe53a9b6526bc0a5795c80.jpg', description: 'mesa comedor', category: 'mesa comedor'},
    {id: '4', name: 'Estantes', price: '2000', img: 'https://i.pinimg.com/564x/1c/46/4b/1c464b84276f7feffb1813b8f722d8a8.jpg', description: 'estantes cuadrados', category: 'estantes'}
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