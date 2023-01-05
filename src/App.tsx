import React, { Suspense, useEffect, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { localeConfig } from "@/config/locale";
import { ConfigProvider } from "antd-mobile";
import enUS from 'antd-mobile/es/locales/en-US'
import zhCN from "antd-mobile/es/locales/zh-CN";
import moment from "moment";
import "moment/dist/locale/zh-cn";
import RenderRouter from "./routes";
import "./App.module.less";
import { useGetCurrentUser } from "./api";
import { createBrowserHistory } from "history";
import { useRecoilState } from "recoil";
import { userState } from "./stores/user";

const history = createBrowserHistory();

const App: React.FC = () => {
  const [user, setUser] = useRecoilState(userState);
  const { locale } = user;

  useEffect(() => {
    if (locale.toLowerCase() === "en-us") {
      moment.locale("en");
    } else if (locale.toLowerCase() === "zh-cn") {
      moment.locale("zh");
    }
  }, [locale]);

  const getAntdLocale = () => {
    if (locale.toLowerCase() === "en-us") {
      return enUS;
    } else if (locale.toLowerCase() === "zh-cn") {
      return zhCN;
    }
  };

  const getLocale = () => {
    const lang = localeConfig.find((item) => {
      return item.key === locale.toLowerCase();
    });

    return lang?.messages;
  };

  return (
    <ConfigProvider locale={getAntdLocale() as any}>
      <IntlProvider locale={locale.split("-")[0]} messages={getLocale()}>
        <BrowserRouter>
          <RenderRouter />
        </BrowserRouter>
      </IntlProvider>
    </ConfigProvider>
  );
};

export default App;

