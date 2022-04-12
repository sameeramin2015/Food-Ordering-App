import React from 'react'
import styles from "../styles/ProductList.module.css";
import PizzaCard from './PizzaCard';

const ProductList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>The Best Pizza in Town</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, magni reiciendis, dolor 
            repellendus fugit itaque recusandae perspiciatis consequuntur, ex officiis amet sapiente 
            tempora saepe. Officia ratione optio est praesentium quasi!
        </p>
        <div className={styles.wrapper}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />

        </div>
      
    </div>
  )
}

export default ProductList
