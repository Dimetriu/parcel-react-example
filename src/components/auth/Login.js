import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

const initialFormState = {
  error: false,
};

export default function Login() {
  const history = useHistory();
  const [formState, setFormState] = useState(initialFormState);
  const { error } = formState;

  const onFinish = ({ username, password }) => {
    if (username === 'test' && password === '1234') {
      localStorage.setItem('loggedIn', true);

      return history.push('/');
    }

    setFormState({ error: true });
  };

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem('loggedIn');

    if (isUserLoggedIn) history.push('/page-one');
  }, [history]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setFormState(initialFormState);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [error]);

  const onFinishFailed = errorInfo => {
    localStorage.removeItem('loggedIn');
  };

  return (
    <>
      <h1>Log in</h1>
      {error ? (
        <p style={{ color: 'red' }}>Invalid credentials</p>
      ) : (
        <></>
      )}
      <Form
        name="login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
