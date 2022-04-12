import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";


const Product = () => {
    const [size, setSize]= useState(0);
    const pizza = {
        id: 1,
        img: "/images/pizza.png",
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, magni reiciendis, dolor repellendus fugit itaque recusandae perspiciatis consequuntur, ex officiis amet sapiente tempora saepe. Officia ratione optio est praesentium quasi"
    };

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} layout="fill" objectFit="contain" alt="" />
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price} >${pizza.price[size]}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={()=>setSize(0)}>
                    <Image src="/images/size.png" layout="fill" alt="" />
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size} onClick={()=>setSize(1)}>
                    <Image src="/images/size.png" layout="fill" alt="" />
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size} onClick={()=>setSize(2)}>
                    <Image src="/images/size.png" layout="fill" alt="" />
                    <span className={styles.number}>Large</span>
                </div>
            </div>
            <h3 className={styles.choose}>Choose additional ingredients</h3>
            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input type="checkbox" id="double" name="double" className={styles.checkbox} />
                    <label htmlFor="double">Double Ingredients</label><br />
                    <input type="checkbox" id="extrachees" name="extrachees" className={styles.checkbox} />
                    <label htmlFor="extrachees">Extra chees</label><br />
                    <input type="checkbox" id="spicysauce" name="spicysauce" className={styles.checkbox} />
                    <label htmlFor="spicysauce">Spicy sauce</label><br />
                    <input type="checkbox" id="garlicsauce" name="garlicsauce" className={styles.checkbox} />
                    <label htmlFor="garlicsauce">Garlic sauce</label><br />
                </div>
            </div>
            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity} />
                <button className={styles.button}>Add to Card</button>
            </div>
        </div>
      
    </div>
  )
}

export default Product
