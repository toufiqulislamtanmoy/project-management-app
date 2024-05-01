import React from 'react';
import { List } from 'antd';
import TaskItem from './TaskItem';
import useGetTaskList from '@/hooks/useGetTaskList';

const TaskList = ({ projectId }) => {

    const [tasks] = useGetTaskList(projectId)

    const toDoTasks = tasks.filter((task) => task.status === 'To Do');
    const inProgressTasks = tasks.filter((task) => task.status === 'In Progress');
    const doneTasks = tasks.filter((task) => task.status === 'Done');
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className='bg-pink-300 p-5'>
                <h2 className='text-center text-2xl mb-5'>TO DO</h2>
                <List
                    key={projectId}
                    dataSource={toDoTasks}
                    renderItem={(task) => (
                        <TaskItem key={task.id} task={task} />
                    )}
                />
            </div>
            <div className='bg-yellow-300 p-5'>
                <h2 className='text-center text-2xl mb-5'>IN PROGRESS</h2>
                <List
                    key={projectId}
                    dataSource={inProgressTasks}
                    renderItem={(task) => (
                        <TaskItem key={task.id} task={task} />
                    )}
                />
            </div>
            <div className='bg-green-300 p-5'>
                <h2 className='text-center text-2xl mb-5'>DONE</h2>
                <List
                    key={projectId}
                    dataSource={doneTasks}
                    renderItem={(task) => (
                        <TaskItem key={task.id} task={task} />
                    )}
                />
            </div>
        </div>
    );
};

export default TaskList;
