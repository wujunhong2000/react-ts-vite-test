import React, { FC, useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styles from "./index.module.less";
import { useRecoilState } from "recoil";
import { signInState } from '@/stores/signIn';

const LayoutPage: FC = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [signIn, setSignIn] = useRecoilState(signInState);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/SignIn");
    }
  }, [navigate, location]);

  return (
    <div className={styles.layoutPage}>
      <div className={styles.title}>
        <div>网易区块链</div>
        {location.pathname === '/record' && (
          <div>工号：{signIn.number}&nbsp;&nbsp;姓名：{signIn.name}</div>
        )}
      </div>
      <Outlet />
    </div>

  );
};

export default LayoutPage;
