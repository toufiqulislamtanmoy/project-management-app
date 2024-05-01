import React from 'react';
import { Avatar, Tag, Tooltip } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const TaskDetails = ({ task }) => {
    const { title, description, dueDate, assignedTo, status } = task;

    return (
        <div className="bg-white rounded-md p-6 shadow-md">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-600 mt-2">{description}</p>
            <div className="flex items-center mt-4">
                <span className="text-gray-600">Due Date:</span>
                <span className="ml-2">{dueDate}</span>
            </div>
            <div className="flex items-center mt-4">
                <span className="text-gray-600">Assigned To:</span>
                <div className="flex items-center ml-2">

                    <Tooltip title={assignedTo}>
                        <Avatar icon={<UserOutlined />} className="ml-2" />

                    </Tooltip>
                    <p className='ml-2'>{assignedTo}</p>

                </div>
            </div>
            <div className="flex items-center mt-4">
                <span className="text-gray-600">Status:</span>
                <Tag color={`${status === 'To Do' ? 'pink' : status === 'In Progress' ? 'yellow' : 'green'}`} className="ml-2">{status}</Tag>
            </div>
        </div >
    );
};

export default TaskDetails;
