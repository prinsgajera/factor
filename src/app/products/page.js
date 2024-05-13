import Headings from '@/components/Headings'
import ProductCard from '@/components/productCard'
import React from 'react'
import './styles.scss'

const products = [
    {
        id:1,
        name:"Product 1",
        image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
    },
    {
        id:2,
        name:"Product 2",
        image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
    },
    {
        id:3,
        name:"Product 3",
        image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
    },
    {
        id:4,
        name:"Product 4",
        image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
    },
    {
        id:5,
        name:"Product 5",
        image:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
    },
]
const Products = () => {
  return (
    <div>
    <Headings heading={"Our Products"}/>
       <div className="product-list">
      {products.map((product, index) => (
       <ProductCard key={index} product={product}/>
      ))}
    </div>
    </div>
  )
}

export default Products
