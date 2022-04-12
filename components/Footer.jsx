import Image from "next/image"
import styles from  "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}><Image src="/images/bg.png" objectFit="cover" layout="fill" alt="" /></div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH, YES WE DID, THE TOWN PIZZA, WELL BACKED SLICE OF PIZZA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            FIND OUR RESTAURANT
          </h1>
          <p className={styles.text}>
             Deurne, Ter Heydellan
            <br/> Antwerpen, 2100
            <br/> (0466) 668899
          </p>
          <p className={styles.text}>
             Deurne, Ter Heydellan
            <br/> Antwerpen, 2100
            <br/> (0466) 668899
          </p>
          <p className={styles.text}>
             Deurne, Ter Heydellan
            <br/> Antwerpen, 2100
            <br/> (0466) 668899
          </p>
        </div>
        <div className={styles.card}>
        <h1 className={styles.title}>
            WORKING HOURS
          </h1>
          <p className={styles.text}>
            MONDAY - SATURDAY
            <br/> 11:00 -24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
