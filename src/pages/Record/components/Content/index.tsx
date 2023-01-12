import React, { FC, useEffect, useRef, useState } from "react";
import { Button, Grid } from "antd-mobile";
import styles from "./index.module.less";
import { FileWrongOutline } from "antd-mobile-icons";
import { Detail } from "@/models/record";

interface RecordContentProps {
  resultData: Array<Detail> | [];
}

const Content: FC<RecordContentProps> = (props) => {
  const { resultData } = props;

  return (
    <div className={styles.content}>
      {resultData.length > 0 ? (
        resultData.map((i, index) => (
          <div className={styles.hasRecord} key={index}>
            <Button color="primary" fill="solid">
              {i.ranking}
            </Button>
            <div className={styles.prizeFont}>{i.prize}</div>
            <div className={styles.chainBlock}>
              <div className={styles.chainBlockLeft}>
                <div>{i.chainData?.title || ""}</div>
                <div>{i.chainData?.number || ""}</div>
              </div>
              <div className={styles.chainBlockRight}>
                {i.chainData?.id || ""}
              </div>
            </div>
            <div>
              <Grid columns={3} gap={8}>
                {(i.personsList || []).map((personIiem, personIndex) => (
                  <Grid.Item key={personIndex}>
                    <div className={styles.personFont}>
                      {`${personIiem.jobNumber}${personIiem.name}`}
                    </div>
                  </Grid.Item>
                ))}
              </Grid>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noRecord}>
          <FileWrongOutline />
        </div>
      )}
    </div>
  );
};

export default Content;
