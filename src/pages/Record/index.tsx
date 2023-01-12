import React, { useEffect, useState } from "react";
import styles from "./index.module.less";
import Content from "./components/Content/index";
import { useGetRecord } from "@/api";
import { Detail } from "@/models/record";
import { Toast } from "antd-mobile";

const Record = () => {
  const [personage, setPersonage] = useState<Array<Detail>>([]);
  const [annualMeeting, setAnnualMeeting] = useState<Array<Detail>>([]);
  const { data, error, isLoading, refetch } = useGetRecord();
  console.log("🚀 ~ file: index.tsx:12 ~ Record ~ data", data)
  useEffect(() => {
    if (error) {
      Toast.show({
        content: error,
      });
      return;
    }
    if (data) {
      setPersonage([...(data?.personage || [])]);
      setAnnualMeeting([...(data?.annualMeeting || [])]);
    }
  }, [data, error]);

  return (
    <div className={styles.record}>
      <div className={styles.wrap}>
        <div className={styles.title}>个人中奖记录</div>
        <Content resultData={personage} />
      </div>
      <div className={styles.wrap}>
        <div className={styles.title}>年会中奖名单</div>
        <Content resultData={annualMeeting} />
      </div>
    </div>
  );
};

export default Record;
