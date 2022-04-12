import React from 'react';
import styles from "../styles/Navbar.module.css";
import Image from "next/image"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/images/telephone.png" alt="" width={32} height={32}/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now</div>
          <div className={styles.text}>0465 6077889</div>

        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Hompage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/images/logo.png" alt="" width="120px" height="40px"/>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.cart}>
      <Image src="/images/cart.png" alt="" width="30px" height="30px"/>
      <div className={styles.counter}>2</div>
      </div>
    </div>
  )
}

export default Navbar