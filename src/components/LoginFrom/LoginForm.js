"use client"
import { useState } from 'react';
import { Form, Input, Button, message, Flex } from 'antd';
import useGetUsers from '@/hooks/useGetUsers';
import useAuthStore from '@/store/useAuthStore';


const LoginForm = () => {
    const { login } = useAuthStore();
    const [loading, setLoading] = useState(false);
    const [users, userApiLoading, error, refetch] = useGetUsers();



    const onFinish = async (values) => {
        setLoading(true);
        const { email, password } = values;

        const matchedUser = users.find(user => user.email === email && user.password === password);

        if (matchedUser) {
            message.success('Login successful');
            login(matchedUser);
            setLoading(false);

        } else {
            message.error('Invalid credentials. Please try again.');
            setLoading(false);
        }
    };

    return (
        <Flex align='center' justify='center' className="min-h-screen" vertical >
            <div className='text-center space-y-3 border-[1px] border-red-100 p-10 rounded-md shadow-lg'>
                <h3 className='text-2xl font-bold text-gray-500'>Login</h3>
                <Form
                    name="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    style={{ width: 300 }}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not a valid email!',
                            },
                            {
                                required: true,
                                message: 'Please enter your email!',
                            },
                        ]}
                    >
                        <Input placeholder="email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password' }]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading} block>
                            Log In
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Flex>
    );
};

export default LoginForm;
