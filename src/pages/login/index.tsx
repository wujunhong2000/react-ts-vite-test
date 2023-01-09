import React, { FC } from "react";
import { Button, Checkbox, Form, Input } from "antd-mobile";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { LoginParams } from "@/models/login";
import { Location } from "history";
import { useLogin } from "@/api";

import styles from "./index.module.less";
import { ReactComponent as LogoSvg } from "@/assets/logo/logo.svg";

const LoginForm: FC = () => {
  const loginMutation = useLogin();
  const navigate = useNavigate();
  const location = useLocation() as Location<{ from: string }>;

  const onFinished = async (form: LoginParams) => {
    const result = await loginMutation.mutateAsync(form);
    console.log("result: ", result);

    if (result) {
      localStorage.setItem("token", result.token);
      localStorage.setItem("username", result.username);
      console.log('location', location);
      
      const from = location.state?.from || { pathname: "/signIn" };
      navigate(from);
    }
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.top}>
        <div className={styles.header}>
            <LogoSvg className={styles.logo} />
            <span className={styles.title}>项目管理</span>
        </div>
        <div className={styles.desc}>全新技术栈(React\Recoil\React Query\React Hooks\Vite)的后台管理系统</div>
      </div>
      <div className={styles.main}> */}
      <Form
        layout='horizontal'
        onFinish={onFinished}
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
      >
          <Form.Item
            name='name'
            label='姓名'
            rules={[{ required: true, message: '请输入用户名！' }]}
          >
            <Input onChange={console.log} placeholder='用户名' />
          </Form.Item>
          <Form.Item
            name='password'
            label='密码'
            rules={[{ required: true, message: '请输入密码！' }]}
          >
            <Input onChange={console.log} placeholder='密码' />
          </Form.Item>
          <Form.Item name='remember' label='记住用户' required>
            <Checkbox.Group>
              <Checkbox value='1'>记住用户</Checkbox>
            </Checkbox.Group>
          </Form.Item>
        </Form>
      {/* </div> */}
    </div>
  );
};

export default LoginForm;
