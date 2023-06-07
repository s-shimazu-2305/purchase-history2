import type { NextPage } from "next";
import { memo, useState } from "react";
import styles from "./radio-button.module.css";

const RadioButton: NextPage = memo(() => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.radiobutton}>
      <div className={styles.parent}>
        <label className={styles.label}>
          <input
            type="radio"
            name="options"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={() => handleOptionChange("option1")}
          />
          天引
        </label>
      </div>
      <div className={styles.test2Parent}>
        <label className={styles.label}>
          <input
            type="radio"
            name="options"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={() => handleOptionChange("option2")}
          />
          現金
        </label>
      </div>
      <div className={styles.test2Group}>
        <label className={styles.label}>
          <input
            type="radio"
            name="options"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={() => handleOptionChange("option3")}
          />
          すべて
        </label>
      </div>
    </div>
  );
});

export default RadioButton;


/*
import type { NextPage } from "next";
import { memo } from "react";
import styles from "./radio-button.module.css";
const RadioButton: NextPage = memo(() => {
  return (
    <div className={styles.component3}>
      <div className={styles.parent}>
        <div className={styles.div}>天引</div>
        <img className={styles.test2Icon} alt="" src="/test-2.svg" />
      </div>
      <div className={styles.test2Parent}>
        <img className={styles.test2Icon1} alt="" src="/test-2.svg" />
        <div className={styles.div1}>現金</div>
      </div>
      <div className={styles.test2Group}>
        <img className={styles.test2Icon1} alt="" src="/test-21.svg" />
        <div className={styles.div1}>すべて</div>
      </div>
    </div>
  );
});

export default RadioButton;
*/