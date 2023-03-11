import React from 'react';
import Image from 'next/image';

import { animalsData } from '@/constans/index';

import styles from "./animals.module.css";

const Animals = () => {
  return(
    <section className={styles.animalsSection}>

      <div className={styles.singleAnimalBox}>

        <div id="polarBear">
          <div className={styles.singleAnimalTitle}>
            <p>{animalsData[0].title}</p>
            <p>{animalsData[0].subtitle} <span>{animalsData[0].highlite}</span></p>
          </div>
          <Image src={animalsData[0].image} alt='animal' width={817} height={431} className={styles.animalPhoto} />
        </div>

        <div id="cheetah">
          <div className={styles.singleAnimalTitle}>
            <p>{animalsData[1].title}</p>
            <p>{animalsData[1].subtitle} <span>{animalsData[1].highlite}</span></p>
          </div>
          <Image src={animalsData[1].image} alt='animal' width={817} height={431} className={styles.animalPhoto} />
        </div>

        <div id="panda">
          <div className={styles.singleAnimalTitle}>
            <p>{animalsData[2].title}</p>
            <p>{animalsData[2].subtitle} <span>{animalsData[2].highlite}</span></p>
          </div>
          <Image src={animalsData[2].image} alt='animal' width={817} height={431} className={styles.animalPhoto} />
        </div>

        <div id="fox">
          <div className={styles.singleAnimalTitle}>
            <p>{animalsData[3].title}</p>
            <p>{animalsData[3].subtitle} <span>{animalsData[3].highlite}</span></p>
          </div>
          <Image src={animalsData[3].image} alt='animal' width={817} height={431} className={styles.animalPhoto} />
        </div>

        <div id="squirrel">
          <div className={styles.singleAnimalTitle}>
            <p>{animalsData[4].title}</p>
            <p>{animalsData[4].subtitle} <span>{animalsData[4].highlite}</span></p>
          </div>
          <Image src={animalsData[4].image} alt='animal' width={817} height={431} className={styles.animalPhoto} />
        </div>

        <div id="butterfly">
          <div className={styles.singleAnimalTitle}>
            <p>{animalsData[5].title}</p>
            <p><span>{animalsData[5].highlite}</span> {animalsData[5].subtitle}</p>
          </div>
          <Image src={animalsData[5].image} alt='animal' width={817} height={431} className={styles.animalPhoto} />
        </div>

        <div id="elephant">
          <div className={styles.singleAnimalTitle}>
            <p>{animalsData[6].title}</p>
            <p>{animalsData[6].subtitle} <span>{animalsData[6].highlite}</span> {animalsData[6].subtitlePartTwo}</p>
          </div>
          <Image src={animalsData[6].image} alt='animal' width={817} height={431} className={styles.animalPhoto} />
        </div>

      </div>

    </section>
  )
};

export default Animals;