import { LocaleFormatter, useLocale } from "@/locales";
import React, { useEffect, useRef, useState } from "react";
import { useAddProject } from "@/api";
import {
  Form,
  Input,
  Button,
  Checkbox,
} from "antd-mobile";

const SignIn = () => {
  const onFinish = (values: any) => {
    console.log('values', values);
    
  };
  return (
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
      <Form.Item name='remember' label='' required>
          <Checkbox.Group>
              <Checkbox value='1'>记住用户</Checkbox>
          </Checkbox.Group>
        </Form.Item>
    </Form>
  );
};

export default SignIn;
