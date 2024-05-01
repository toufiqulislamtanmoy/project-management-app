import React from 'react';
import { Form, Input, Button, Select, DatePicker, message } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import dayjs from 'dayjs';
const TaskForm = ({ projectId, onClose, team }) => {
    // {
    //     "id": "102",
    //     "projectId": 1,
    //     "title": "Develop Contact Form",
    //     "description": "Implement a contact form with backend integration.",
    //     "status": "To Do",
    //     "assignedTo": "Jane Smith",
    //     "dueDate": "2024-05-10"
    //   },

    const onFinish = async (values) => {
        console.log('Submitted:', values);
        const { title, description, assignedTo, dueDate } = values;
        const taskData = {
            id: uuidv4(),
            projectId,
            title,
            description,
            status: "To Do",
            assignedTo,
            dueDate: dayjs(dueDate).format('YYYY-MM-DD')
        }
        console.log(taskData)
        try {

            const response = await axios.post(`http://localhost:3004/tasks`, taskData

            );

            console.log('Update successful:', response.data);
            message.success("Update Successful")




        } catch (error) {
            console.error('Update failed:', error);


        }

    };

    return (
        <Form name="task_form" onFinish={onFinish}>
            <Form.Item name="title" rules={[{ required: true, message: 'Please enter task title' }]}>
                <Input placeholder="Task Title" />
            </Form.Item>
            <Form.Item name="description">
                <Input.TextArea placeholder="Task Description" />
            </Form.Item>
            <Form.Item name="assignedTo">
                <Select>
                    {
                        team?.map((member, index) =>
                            <Select.Option key={index} placeholder="assigner to" value={member}>{member}</Select.Option>
                        )
                    }
                </Select>
            </Form.Item>
            <Form.Item
                name="dueDate"

            >
                <DatePicker
                    placeholder="Due Date" style={{ width: '100%' }}
                />
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
