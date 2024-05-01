"use client"
import { Avatar, Modal, Tooltip, message } from 'antd';
import { CheckOutlined, EditOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import TaskDetails from './TaskDetails';
import axios from 'axios';
import UpdateTaskForm from './UpdateTaskForm';
const TaskItem = ({ task, refetch }) => {
    const [updateTaskModal, setUpdateTaskModal] = useState(false);
    const [showTaskDetails, setShowTaskDetails] = useState(false);
    console.log(task)
    const handelEditTask = (taskDetails) => {
        console.log(taskDetails)
        setUpdateTaskModal(true);
    }

    // task details modal state
    const handleTaskDetails = () => {
        setShowTaskDetails(true);
    };

    // Mark As Completed Task

    const handleStatusUpdate = async (taskDetails) => {
        try {


            const updatedTask = {
                ...taskDetails,
                status: 'Done',
            };


            const response = await axios.patch(`http://localhost:3004/tasks/${taskDetails.id}`, updatedTask);


            console.log('Task updated successfully:', response.data);
            message.success('Task updated successfully:', response.data);
            refetch();

        } catch (error) {

            console.error('Error updating task:', error.message);
        }
    }
    return (
        <>
            <div className='bg-white rounded-md p-5 mb-5'>
                {/* title */}
                <div className='flex items-center justify-between'>
                    {
                        task?.status !== "Done" &&
                        <Tooltip title="Mark As Complete">
                            <button className='' onClick={() => handleStatusUpdate(task)}><CheckOutlined /></button>
                        </Tooltip>
                    }
                    <h2>{task?.title}</h2>
                    <p>{task?.dueDate}</p>
                    <Tooltip title="Update Task">
                        <button className='' onClick={() => handelEditTask(task)}><EditOutlined /></button>
                    </Tooltip>
                    <div className='flex items-center justify-center gap-2'>
                        <Tooltip title={task?.assignedTo}>
                            <Avatar icon={<UserOutlined />} />
                        </Tooltip>
                        <button onClick={handleTaskDetails}>
                            <RightOutlined />
                        </button>
                    </div>
                </div>

            </div>
            {/* task details modal */}
            <Modal
                title="Task Details"
                visible={showTaskDetails}
                onCancel={() => setShowTaskDetails(false)}
                footer={null}
                width="50vw"
            >
                <TaskDetails task={task} />
            </Modal>
            {/* update task modal */}
            <Modal
                title="Update Task Details"
                visible={updateTaskModal}
                onCancel={() => setUpdateTaskModal(false)}
                footer={null}

            >
                <UpdateTaskForm task={task} refetch={refetch} />
            </Modal>
        </>
    );
};

export default TaskItem;
