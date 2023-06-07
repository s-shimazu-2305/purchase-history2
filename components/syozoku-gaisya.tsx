import { useState } from "react";
import { NextPage } from "next";
import { memo } from "react";
import styles from "./syozoku-gaisya.module.css";

const SyozokuGaisya: NextPage = memo(() => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <select
      className={styles.purchaseHistoryChild}
      value={selectedValue}
      onChange={handleChange}
    >
      <option value="">選択してください</option>
      <option value="OCC">OCC</option>
      <option value="DSO">DSO</option>
      <option value="C&C">C&C</option>
      <option value="STN">STN</option>
      <option value="接待分">接待分</option>
      <option value="外注">外注</option>
    </select>
  );
});

export default SyozokuGaisya;

/*import type { NextPage } from "next";
import { memo } from "react";
import styles from "./rectangle-component3.module.css";
const RectangleComponent3: NextPage = memo(() => {
  return <input className={styles.purchaseHistoryChild} type="text" />;
});

export default RectangleComponent3;
*/

/*
import type { NextPage } from "next";
import { memo } from "react";
import styles from "./syozoku-gaisya.module.css";
const SyozokuGaisya: NextPage = memo(() => {
  return <input className={styles.purchaseHistoryChild} type="text" />;
});

export default SyozokuGaisya;
*/
