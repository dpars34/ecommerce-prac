import React from 'react'
import styles from './SingleProduct.module.css'
import { Link } from 'react-router-dom'

function SingleProduct({ data }) {
    return(
        <div className={styles.singleProduct}>
            <div className={styles.titleBox}>
                <Link className={styles.link} to={`/product/${data._id}`}>
                    <h1 className={styles.productTitle}>{data.name}</h1>
                </Link>
            </div>
            <div className={styles.detailsBox}>
                <p>{data.description}</p>
                <p>${data.price.toFixed(2)}</p>
            <button>Add To Cart</button>
            </div>
            
        </div>
    )
    
}

export default SingleProduct 