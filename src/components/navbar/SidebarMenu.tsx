import React from 'react';
import Link from 'next/link';

import styles from "./sidebarMenu.module.css";

const SidebarMenu = () => {

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const href = event.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  
  return(
    <section className={styles.sidebarMenuSection}>
      <h1 className={styles.sidebarMenuTitle}>Your new gang</h1>

      {/* position in menu */}
      <div className={styles.positionMenuBox}>
        <Link href="#polarBear" className={styles.link} onClick={handleScroll}>Polar bear</Link>
        <Link href="#cheetah" className={styles.link} onClick={handleScroll}>Cheetah</Link>
        <Link href="#panda" className={styles.link} onClick={handleScroll}>Panda</Link>
        <Link href="#fox" className={styles.link} onClick={handleScroll}>Fox</Link>
        <Link href="#squirrel" className={styles.link} onClick={handleScroll}>Squirrel</Link>
        <Link href="#butterfly" className={styles.link} onClick={handleScroll}>Butterfly</Link>
        <Link href="#elephant" className={styles.link} onClick={handleScroll}>Elephant</Link>
      </div>

    </section>
  )
};

export default SidebarMenu;