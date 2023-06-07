import type { NextPage } from "next";
import { memo } from "react";
import styles from "./kounyuubi-owari.module.css";
const KounyuubiOwari: NextPage = memo(() => {
  return <input className={styles.purchaseHistoryChild} type="date" />;
});

export default KounyuubiOwari;
