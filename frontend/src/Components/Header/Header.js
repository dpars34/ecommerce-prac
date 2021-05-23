import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.navBar}>
                <Link className={styles.navLink} to='/'>Home</Link>
                <p className={styles.navLink}>Cart</p>
                <p className={styles.navLink}>Sign In</p>
            </div>

        </header>
    )
}

export default Header