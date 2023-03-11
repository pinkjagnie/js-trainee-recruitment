import React from 'react';

import styles from "./sidebarMenu.module.css";

const SidebarMenu = () => {
  const polarBearHandleClickScroll = () => {
    const yOffset = -40; 
    const element = document.getElementById('polarBear');
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    if (element) {
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const cheetahHandleClickScroll = () => {
    const yOffset = -40; 
    const element = document.getElementById('cheetah');
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    if (element) {
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const pandaHandleClickScroll = () => {
    const yOffset = -40; 
    const element = document.getElementById('panda');
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    if (element) {
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const foxHandleClickScroll = () => {
    const yOffset = -40; 
    const element = document.getElementById('fox');
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    if (element) {
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const squirrelHandleClickScroll = () => {
    const yOffset = -40; 
    const element = document.getElementById('squirrel');
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    if (element) {
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const butterflyHandleClickScroll = () => {
    const yOffset = -40; 
    const element = document.getElementById('butterfly');
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    if (element) {
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const elephantHandleClickScroll = () => {
    const yOffset = -40; 
    const element = document.getElementById('elephant');
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    if (element) {
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return(
    <section className={styles.sidebarMenuSection}>
      <h1 className={styles.sidebarMenuTitle}>Your new gang</h1>

      {/* position in menu */}
      <div className={styles.positionMenuBox}>
        <p onClick={polarBearHandleClickScroll}>Polar bear</p>
        <p onClick={cheetahHandleClickScroll}>Cheetah</p>
        <p onClick={pandaHandleClickScroll}>Panda</p>
        <p onClick={foxHandleClickScroll}>Fox</p>
        <p onClick={squirrelHandleClickScroll}>Squireel</p>
        <p onClick={butterflyHandleClickScroll}>Butterfly</p>
        <p onClick={elephantHandleClickScroll}>Elephant</p>
      </div>

    </section>
  )
};

export default SidebarMenu;