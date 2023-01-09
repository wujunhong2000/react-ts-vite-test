import React, { FC } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { LoginParams } from "@/models/login";
import { Location } from "history";
import { useLogin } from "@/api";

import styles from "./index.module.less";
import { ReactComponent as LogoSvg } from "@/assets/logo/logo.svg";
import { Form, Input, Button, Checkbox } from "antd-mobile";

const LoginForm: FC = () => {
  const loginMutation = useLogin();
  const navigate = useNavigate();
  const location = useLocation() as Location<{ from: string }>;

  const onFinish = async (form: LoginParams) => {
    const result = await loginMutation.mutateAsync(form);
    console.log("result: ", result);

    if (result) {
      localStorage.setItem("token", result.token);
      localStorage.setItem("username", result.username);

      const from = location.state?.from || { pathname: "/dashboard" };
      navigate(from);
    }
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.top}>
        <div className={styles.header}>
          <Link to="/">
            <LogoSvg className={styles.logo} />
            <span className={styles.title}>项目</span>
          </Link>
        </div>
        <div className={styles.desc}>
          (React\Recoil\React Query\React Hooks\Vite)的移动端系统
        </div>
      </div> */}
      <div className={styles.main}>
        <Form
          layout="horizontal"
          onFinish={onFinish}
          footer={
            <Button block type="submit" color="primary" size="large">
              提交
            </Button>
          }
        >
          <Form.Item
            name="name"
            label="姓名"
            rules={[{ required: true, message: "姓名不能为空" }]}
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: "密码不能为空" }]}
          >
            <Input placeholder="请输入密码" clearable type="password" />
          </Form.Item>
          <Form.Item name="remember" label="" required>
            <Checkbox.Group>
              <Checkbox value="1">记住用户</Checkbox>
            </Checkbox.Group>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
