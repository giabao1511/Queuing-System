import { auth } from "../../../firebase/config";
import { Button, Form, Input } from "antd";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<null | {}>({});

  onAuthStateChanged(auth, (current) => {
    setUser(current);
  });
  console.log(user, "userrr");

  const onFinish = async (values: any) => {
    try {
      await signInWithEmailAndPassword(auth, values.username, values.password);
      navigate("/dashboard");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tên đăng nhập"
          name="username"
          // validateStatus="error"
          // help="hahsh"
          rules={[{ required: true, message: "Mời nhập tên đăng nhập!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Mời nhập mật khẩu!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="bg-orange">
            Đăng nhập
          </Button>
        </Form.Item>

        <Link to="/forgot-password" className="color-red">
          Quên mật khẩu
        </Link>
      </Form>
    </>
  );
};

export default Login;
