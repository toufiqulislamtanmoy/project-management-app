"use client"
import { Avatar, Modal, Tooltip, message } from 'antd';
import { CheckOutlined, EditOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import TaskDetails from './TaskDetails';
import axios from 'axios';
import UpdateTaskForm from './UpdateTaskForm';
import { Draggable } from 'react-beautiful-dnd';
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
            message.success('Task updated successfully:');
            refetch();

        } catch (error) {

            console.error('Error updating task:', error.message);
        }
    }
    return (
        <Draggable draggableId={task.id} index={0}>
            {(provided) => (
                <div
                    className='bg-white rounded-md p-5 mb-5'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {/* Task item content */}
                    <div className='flex items-center justify-between'>
                        {/* Mark as complete button */}
                        {task?.status !== 'Done' && (
                            <Tooltip title='Mark As Complete'>
                                <button onClick={() => handleStatusUpdate(task)}>
                                    <CheckOutlined />
                                </button>
                            </Tooltip>
                        )}
                        <h2>{task?.title}</h2>
                        <p>{task?.dueDate}</p>
                        {/* Update task button */}
                        <Tooltip title='Update Task'>
                            <button onClick={() => handelEditTask(task)}>
                                <EditOutlined />
                            </button>
                        </Tooltip>
                        {/* Assigned user avatar and details */}
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
            )}
        </Draggable>
    );
};

export default TaskItem;
