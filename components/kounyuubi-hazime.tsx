import type { NextPage } from "next";
import { memo } from "react";
import styles from "./kounyuubi-hazime.module.css";
const KounyuubiHazime: NextPage = memo(() => {
  return <input className={styles.purchaseHistoryChild} type="date" />;
});

export default KounyuubiHazime;
