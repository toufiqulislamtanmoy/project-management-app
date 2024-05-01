import React from 'react';
import { Form, Input, Button } from 'antd';

const TaskForm = ({ projectId, onClose }) => {
    const onFinish = (values) => {
        console.log('Submitted:', values);

    };

    return (
        <Form name="task_form" onFinish={onFinish}>
            <Form.Item name="title" rules={[{ required: true, message: 'Please enter task title' }]}>
                <Input placeholder="Task Title" />
            </Form.Item>
            <Form.Item name="description">
                <Input.TextArea placeholder="Task Description" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add Task
                </Button>
            </Form.Item>
        </Form>
    );
};

export default TaskForm;
