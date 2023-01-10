import React, { FC, useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styles from "./index.module.less";

const LayoutPage: FC = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/SignIn");
    }
  }, [navigate, location]);

  return (
    <div className={styles.layoutPage}>
      <Outlet />
    </div>

  );
};

export default LayoutPage;
