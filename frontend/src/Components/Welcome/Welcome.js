import React from 'react'
import styles from './Welcome.module.css'

function Welcome() {
    return(
        <div className={styles.welcomeArea}>
            <h1 className={styles.title}>Welcome to the shop</h1>
            <p className={styles.subtitle}>This is a very strange shop. We sell lots of things that don't make sense.</p>
        </div>
    )
}

export default Welcome