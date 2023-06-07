import type { NextPage } from "next";
import { memo } from "react";
import styles from "./csv-button.module.css";
const CsvButton: NextPage = memo(() => {
  return <a className={styles.groupChild} target="_blank" />;
});

export default CsvButton;
