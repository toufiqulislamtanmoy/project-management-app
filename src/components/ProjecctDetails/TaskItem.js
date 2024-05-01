"use client"
import Image from 'next/image';
import duser from "@/assets/duser.jpg"
import { Avatar, Button, Dropdown, Modal, Space, Tooltip } from 'antd';
import { CheckOutlined, RightOutlined, SmallDashOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useState } from 'react';
import TaskDetails from './TaskDetails';
const TaskItem = ({ task }) => {
    const [open, setOpen] = useState(false);
    const [showTaskDetails, setShowTaskDetails] = useState(false);
    console.log(task)
    const handelEditTask = (id) => {
        console.log(id)
    }
    const handelDeleteTask = (id) => {
        console.log(id)
    }
    const items = [

        {
            label: (

                <button className='' onClick={() => handelEditTask(task?.id)}>Edit</button>
            ),
            key: '1',
        },
        {
            label: (

                <button className='' onClick={() => handelDeleteTask(task?.id)}>Delete</button>
            ),
            key: '1',
        },

    ]

    const handleAddTask = () => {
        setShowTaskDetails(true);
    };
    return (
        <>
            <div className='bg-white rounded-md p-5 mb-5'>
                {/* title */}
                <div className='flex items-center justify-between'>
                    {
                        task?.status !== "Done" &&
                        <button className=''><CheckOutlined /></button>
                    }
                    <h2>{task?.title}</h2>
                    <p>{task?.dueDate}</p>
                    <Dropdown menu={{ items }}>

                        <Space>
                            <SmallDashOutlined />
                        </Space>

                    </Dropdown>
                    <div className='flex items-center justify-center gap-2'>
                        <Tooltip title={task?.assignedTo}>
                            <Avatar icon={<UserOutlined />} />
                        </Tooltip>
                        <button onClick={handleAddTask}>
                            <RightOutlined />
                        </button>
                    </div>
                </div>

            </div>
            <Modal
                title="Task Details"
                visible={showTaskDetails}
                onCancel={() => setShowTaskDetails(false)}
                footer={null}
                width="50vw"
            >
                <TaskDetails task={task} />
            </Modal>
        </>
    );
};

export default TaskItem;
