import { Outlet } from "react-router-dom";
import { Header } from "../../ui/header/Header";
import { SideBar } from "../../ui/sidebar/SideBar";
// import { Footer } from "../../ui/footer/Footer";
import styles from "./AppLayout.module.css";
import { useState } from "react";

export const AppLayout = () => {


  return (
    <div className={styles["layout-container"]}>
      <Header />
      <main className={styles["main-content-container"]}>
        <SideBar />
        <div className={styles["outlet-content"]}>
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};
 