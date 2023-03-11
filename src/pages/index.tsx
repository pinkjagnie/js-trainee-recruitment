// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

import SidebarMenu from "@/components/navbar/SidebarMenu";

import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <SidebarMenu />
    </div>
  );
}
