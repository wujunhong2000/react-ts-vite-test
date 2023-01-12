import React, { useEffect, useRef, useState } from "react";
import { Result } from "antd-mobile";
import styles from "./index.module.less";
import { useLocation, Location } from "react-router-dom";

interface State {
  name: String
  number: String
}
const SignInSuccess = () => {
  const { state } = useLocation() as Location<State>;

  return (
    <div className={styles.signInSuccess}>
      <Result
        status="success"
        title="您已签到成功"
        description={
          <>
            <div>工号: {state?.name || ''}</div>
            <div>姓名: {state?.number || ''}</div>
          </>
        }
      />
    </div>
  );
};

export default SignInSuccess;
