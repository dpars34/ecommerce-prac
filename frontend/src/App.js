import React from 'react'
import Header from './Components/Header/Header'
import Products from './Components/Products/Products'
import styles from './App.module.css'
import Welcome from './Components/Welcome/Welcome'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
          <Switch>

            <Route exact path="/">
              <Welcome />
              <Products />
            </Route>

            <Route exact path="/product/:id">
              <ProductDetails />
            </Route>

        </Switch>
      </div>
    </Router>
  )
}


export default App
