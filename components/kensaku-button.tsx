import type { NextPage } from "next";
import { memo } from "react";
import styles from "./kensaku-button.module.css";
const KensakuButton: NextPage = memo(() => {
  return <div className={styles.groupChild} />;
});

export default KensakuButton;
