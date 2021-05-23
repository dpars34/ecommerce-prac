import React from 'react'
import productsData from '../../data'
import { useParams } from 'react-router-dom'
import styles from './ProductDetails.module.css'
import { Link } from 'react-router-dom'

function ProductDetails() {

    const { id } = useParams()
    const product = productsData.products.find(x => x._id === id)

    return(
        <div className={styles.productDetailsArea}>
            <Link to='/'>Go Back</Link>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <p>{product.stock}</p>
            <button>Add To Cart</button>
        </div>
    )
}

export default ProductDetails