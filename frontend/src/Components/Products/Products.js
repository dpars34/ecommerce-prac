import React, { useState, useEffect } from 'react'
import SingleProduct from '../SingleProduct/SingleProduct'
import styles from './Products.module.css'
import axios from 'axios'

function Products() {

    const [ products, setProducts ] = useState([]) 

    useEffect(() => {
        const fetchData = async () => {
            try{
                const { data } = await axios.get("/api/products")
                setProducts(data)
            }
            catch(e) {
                console.log(e)
            }
        }
        fetchData()
    }, []) 

    console.log(products)


    return(
        <div className={styles.productsArea}>
            <div className={styles.flexContainer}>
                {products.map((data) => {
                    return(
                        <SingleProduct key={data._id} data={data}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Products