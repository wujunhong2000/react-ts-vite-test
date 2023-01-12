import React from "react";
import { useSignIn } from "@/api";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, AutoCenter, Space } from "antd-mobile";
import styles from "./index.module.less";
import { useRecoilState } from "recoil";
import { signInState } from '@/stores/signIn';

const SignIn = () => {
  const signInMutation = useSignIn();
  const navigate = useNavigate();
  const [signIn, setSignIn] = useRecoilState(signInState);

  const onFinish = async (values: any) => {
    console.log("values", values);
    const result = await signInMutation.mutateAsync(values);
    if(result?.flag){
      console.log('result.flag', result.flag);
      setSignIn({ ...signIn, ...result });
      navigate("/signInSuccess", {
        state: { ...result },
      });
    }
  };
  return (
    <div className={styles.signIn}>
      <Form layout="horizontal" onFinish={onFinish}>
        <div className={styles.inputBlock}>
          <Space align="start" block direction="vertical">
            <Form.Item
              name="number"
              label="工号:"
              rules={[{ required: true, message: "工号不能为空" }]}
            >
              <Input placeholder="请输入工号" />
            </Form.Item>
            <Form.Item
              name="name"
              label="姓名:"
              rules={[{ required: true, message: "姓名不能为空" }]}
            >
              <Input placeholder="请输入姓名" type="password" />
            </Form.Item>
          </Space>
        </div>
        <AutoCenter>
          网易星球年会的介绍文案，网易星球年会的介绍文案，网易星球年会的介绍文案，
          网易星球年会的介绍文案，网易星球年会的介绍文案，网易星球年会的介绍文案，
          网易星球年会的介绍文案，网易星球年会的介绍文案，网易星球年会的介绍文案，
          网易星球年会的介绍文案，网易星球年会的介绍文案，网易星球年会的介绍文案，
          网易星球年会的介绍文案，网易星球年会的介绍文案，网易星球年会的介绍文案，
          网易星球年会的介绍文案，网易星球年会的介绍文案，网易星球年会的介绍文案。
        </AutoCenter>
        <div className={styles.footBtn}>
          <Button block type="submit" shape='rounded' color="primary">
            签到
          </Button>
          <Button color="primary" fill="none" onClick={()=> navigate("/record")}>
            查询中奖记录{">>"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
