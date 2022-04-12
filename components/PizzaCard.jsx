import React from 'react'
import styles from "../styles/PizzaCard.module.css";
import Image from "next/image"


const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/images/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.5</span>
      <p className={styles.desc}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, magni reiciendis, dolor 
      repellendus fugit itaque recusandae perspiciatis consequuntur, ex officiis amet sapiente 
      tempora saepe. Officia ratione optio est praesentium quasi

      </p>
    </div>
  )
}

export default PizzaCard
