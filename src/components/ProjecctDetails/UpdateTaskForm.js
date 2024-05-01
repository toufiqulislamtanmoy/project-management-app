import useGetSingleProjectData from '@/hooks/useGetSingleProjectData';
import { Button, DatePicker, Form, Input, Select, message } from 'antd';
import axios from 'axios';
import dayjs from 'dayjs';
import React from 'react';

const UpdateTaskForm = ({ task }) => {
    const [project] = useGetSingleProjectData(task?.projectId)
    const onFinish = async (values) => {
        console.log('Submitted:', values);

        const updatedTask = {
            ...task,
            title: values?.title ? values?.title : task?.title,
            description: values?.description ? values?.description : task?.description,
            assignedTo: values?.assignedTo ? values?.assignedTo : task?.assignedTo,
            dueDate: values?.dueDate ? dayjs(values?.dueDate, 'YYYY-MM-DD') : task?.dueDate,

        };
        console.log(updatedTask)
        try {




            const response = await axios.patch(`http://localhost:3004/tasks/${task.id}`, updatedTask);


            console.log('Task updated successfully:', response.data);
            message.success('Task updated successfully:', response.data);


        } catch (error) {

            console.error('Error updating task:', error.message);
        }

    };
    return (
        <>
            <Form name="task_form" onFinish={onFinish}>
                <Form.Item name="title" >
                    <Input key={task?.id} placeholder="Task Title" defaultValue={task?.title} />
                </Form.Item>
                <Form.Item name="description">
                    <Input.TextArea placeholder="Task Description" defaultValue={task?.description} key={task?.id} />
                </Form.Item>
                <Form.Item name="assignedTo">
                    <Select>
                        {
                            project?.team?.map((member, index) =>
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
                        key={task?.id}
                        defaultValue={dayjs(task?.dueDate, 'YYYY-MM-DD')}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Update Task
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default UpdateTaskForm;