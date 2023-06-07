import type { NextPage } from "next";
import { memo } from "react";
import styles from "./back-button.module.css";
const BackButton: NextPage = memo(() => {
  return <div className={styles.groupChild} />;
});

export default BackButton;
