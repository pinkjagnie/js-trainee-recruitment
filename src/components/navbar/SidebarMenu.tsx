import React from 'react';

import styles from "./sidebarMenu.module.css";

const SidebarMenu = () => {
  return(
    <section className={styles.sidebarMenuSection}>
      <h1 className={styles.sidebarMenuTitle}>Your new gang</h1>

      {/* position in menu */}
      <div className={styles.positionMenuBox}>
        <p>Polar bear</p>
        <p>Cheetah</p>
        <p>Panda</p>
        <p>Fox</p>
        <p>Squireel</p>
        <p>Butterfly</p>
        <p>Elephant</p>
      </div>

    </section>
  )
};

export default SidebarMenu;