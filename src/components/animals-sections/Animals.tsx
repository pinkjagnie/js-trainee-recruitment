import React from 'react';

import { polarBear } from '@/assets';

import { animalsData } from '@/constans/index';

import SingleAnimal from './SingleAnimal';

import styles from "./animals.module.css";

const Animals = () => {
  return(
    <section className={styles.animalsSection}>

      <div className={styles.singleAnimalBox}>
        {animalsData.map((animal) => {
          return(
            <SingleAnimal key={animal.id} title={animal.title} subtitle={animal.subtitle} highlite={animal.highlite} image={animal.image} />
          )
        })}
      </div>

    </section>
  )
};

export default Animals;