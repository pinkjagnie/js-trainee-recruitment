import React from "react";
import Image from "next/image";

import styles from './animals.module.css';

export interface SingleAnimalProps {
  title: string,
  subtitle: string,
  highlite: string,
  image: any
}

const SingleAnimal: React.FC<SingleAnimalProps> = ({ title, subtitle, highlite, image }) => {
  
  return(
    <>
      <div className={styles.singleAnimalTitle}>
        <p>{title}</p>
        <p>{subtitle} <span>{highlite}</span></p>
      </div>
      <Image src={image} alt='animal' width={817} height={431} className={styles.animalPhoto} />
    </>
  )
};

export default SingleAnimal;