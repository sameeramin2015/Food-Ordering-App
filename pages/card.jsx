import styles from "../styles/Card.module.css";
import Image from "next/image";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
          <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
              <td>
                  <div className={styles.imgContainer}>
                      <Image src="/images/pizza.png" layout="fill" objectFit="cover" alt="" />
                  </div>
              </td>
              <td>
                  <span className={styles.name}>CORLAZO</span>
              </td>
              <td>
                  <span className={styles.extras}>
                        Double Ingredient, Spicy sauce
                  </span>
              </td>
              <td>
                  <span className={styles.price}>$19.90</span>
              </td>
              <td>
                  <span className={styles.quantity}>
                      2
                  </span>
              </td>
              <td>
                  <span className={styles.total}>$39.80</span>
              </td>
          </tr>
          <tr className={styles.tr}>
              <td>
                  <div className={styles.imgContainer}>
                      <Image src="/images/pizza.png" layout="fill" objectFit="cover" alt="" />
                  </div>
              </td>
              <td>
                  <span className={styles.name}>CORLAZO</span>
              </td>
              <td>
                  <span className={styles.extras}>
                        Double Ingredient, Spicy sauce
                  </span>
              </td>
              <td>
                  <span className={styles.price}>$19.90</span>
              </td>
              <td>
                  <span className={styles.quantity}>
                      2
                  </span>
              </td>
              <td>
                  <span className={styles.total}>$39.80</span>
              </td>
          </tr>
          </table>
      </div>
      <div className={styles.right}>
          <div className={styles.wrapper}>
              <h2 className={styles.title}>CARD TOTAL</h2>
              <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
            </div>
            <button className={styles.button}>CHECKOUT NOW!</button>
          </div>
      </div>
    </div>
  )
}

export default Card
