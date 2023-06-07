import type { NextPage } from "next";
import { useCallback } from "react";
import KounyuubiHazime from "../components/kounyuubi-hazime";
import KounyuubiOwari from "../components/kounyuubi-owari";
import CsvButton from "../components/csv-button";
import KensakuButton from "../components/kensaku-button";
import { useRouter } from "next/router";
import BackButton from "../components/back-button";
import SyozokuGaisya from "../components/syozoku-gaisya";
import RadioButton from "../components/radio-button";
import styles from "./index.module.css";
const PurchaseHistory: NextPage = () => {
  const router = useRouter();

  const onGroupContainer4Click = useCallback(() => {
    router.push("/menu");
  }, [router]);

  return (
    <div className={styles.purchaseHistory}>
      <div className={styles.div}>所属会社</div>
      <div className={styles.div1}>購入日指定</div>
      <KounyuubiHazime />
      <div className={styles.div2}>～</div>
      <KounyuubiOwari />
      <div className={styles.div3}>支払方法</div>
      <div className={styles.purchaseHistoryInner}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <CsvButton />
            <button className={styles.csv}>csv出力</button>
          </div>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <KensakuButton />
        <button className={styles.button}>検索</button>
      </div>
      <div
        className={styles.rectangleContainer}
        onClick={onGroupContainer4Click}
      >
        <BackButton />
        <img className={styles.groupChild} alt="" src="/group-11.svg" />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupItem} />
        <div className={styles.div4}>購入履歴</div>
      </div>
      <div className={styles.component19}>
        <div className={styles.component3}>
          <div className={styles.div5}>
            <div className={styles.div6}>支払方法</div>
          </div>
          <div className={styles.div7}>
            <div className={styles.div8}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div10}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div12}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div14}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div16}>
              <div className={styles.div6}>支払方法</div>
            </div>
          </div>
        </div>
        <div className={styles.component18}>
          <div className={styles.div5}>
            <div className={styles.div6}>支払方法</div>
          </div>
          <div className={styles.div7}>
            <div className={styles.div8}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div10}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div12}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div14}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div16}>
              <div className={styles.div6}>支払方法</div>
            </div>
          </div>
        </div>
        <div className={styles.component17}>
          <div className={styles.div5}>
            <div className={styles.div6}>支払方法</div>
          </div>
          <div className={styles.div7}>
            <div className={styles.div8}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div10}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div12}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div14}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div16}>
              <div className={styles.div6}>支払方法</div>
            </div>
          </div>
        </div>
        <div className={styles.component16}>
          <div className={styles.div5}>
            <div className={styles.div6}>支払方法</div>
          </div>
          <div className={styles.div7}>
            <div className={styles.div8}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div10}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div12}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div14}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div16}>
              <div className={styles.div6}>支払方法</div>
            </div>
          </div>
        </div>
        <div className={styles.component15}>
          <div className={styles.div5}>
            <div className={styles.div6}>支払方法</div>
          </div>
          <div className={styles.div7}>
            <div className={styles.div8}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div10}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div12}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div14}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div16}>
              <div className={styles.div6}>支払方法</div>
            </div>
          </div>
        </div>
        <div className={styles.component14}>
          <div className={styles.div5}>
            <div className={styles.div6}>支払方法</div>
          </div>
          <div className={styles.div7}>
            <div className={styles.div8}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div10}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div12}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div14}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div16}>
              <div className={styles.div6}>支払方法</div>
            </div>
          </div>
        </div>
        <div className={styles.component6}>
          <div className={styles.component61}>
            <div className={styles.div83}>
              <div className={styles.div6}>支払方法</div>
            </div>
            <div className={styles.div7}>
              <div className={styles.div86}>
                <div className={styles.div6}>支払方法</div>
              </div>
              <div className={styles.div88}>
                <div className={styles.div6}>支払方法</div>
              </div>
              <div className={styles.div90}>
                <div className={styles.div6}>支払方法</div>
              </div>
              <div className={styles.div92}>
                <div className={styles.div6}>支払方法</div>
              </div>
              <div className={styles.div94}>
                <div className={styles.div6}>支払方法</div>
              </div>
            </div>
          </div>
          <div className={styles.div96}>食券No</div>
        </div>
        <div className={styles.div97}>購入日</div>
        <div className={styles.div98}>所属会社</div>
        <div className={styles.div99}>支払方法</div>
        <div className={styles.div100}>購入者名</div>
        <div className={styles.idNo}>ID No</div>
      </div>
      <SyozokuGaisya />
      <RadioButton />
    </div>
  );
};

export default PurchaseHistory;
