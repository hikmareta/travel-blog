import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b> Hey Travellers! </b>
        <br /> Discover your next destinations here!{" "}
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
          </h1>
          <p className={styles.postDescription}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue tincidunt ipsum, sit amet viverra lectus tempus eu. Aliquam
            consectetur condimentum consectetur. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Cras at
            erat turpis.{" "}
          </p>
          <button className={styles.button}> Read More </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
