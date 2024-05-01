import React, { useEffect } from 'react';
import { List } from 'antd';
import TaskItem from './TaskItem';
import useGetTaskList from '@/hooks/useGetTaskList';
import useTaskStore from '@/store/useTaskStore';

const TaskList = ({ projectId }) => {
    const [tasks, tasksApiLoading, error, refetch] = useGetTaskList(projectId);
    const setTasks = useTaskStore((state) => state.setTasks);


    useEffect(() => {
        if (!tasksApiLoading && !error) {
            setTasks(tasks);
            console.log("task set successfully")
        } else if (error) {
            setError(error);
        }
    }, [tasks, setTasks, tasksApiLoading, error]);


    const toDoTasks = tasks.filter((task) => task.status === 'To Do');
    const inProgressTasks = tasks.filter((task) => task.status === 'In Progress');
    const doneTasks = tasks.filter((task) => task.status === 'Done');
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className='bg-pink-300 p-5 max-h-[45vh] overflow-y-automax-h-[45vh] overflow-y-auto'>
                <h2 className='text-center text-2xl mb-5'>TO DO</h2>
                {toDoTasks ?
                    <List
                        key={projectId}
                        dataSource={toDoTasks}
                        renderItem={(task) => (
                            <TaskItem key={task.id} task={task} refetch={refetch} />
                        )}
                    /> :
                    <p>Loading ....</p>
                }
            </div>
            <div className='bg-yellow-300 p-5 max-h-[45vh] overflow-y-auto'>
                <h2 className='text-center text-2xl mb-5'>IN PROGRESS</h2>
                {inProgressTasks ?
                    <List
                        key={projectId}
                        dataSource={inProgressTasks}
                        renderItem={(task) => (
                            <TaskItem key={task.id} task={task} refetch={refetch} />
                        )}
                    /> : <p>Loading...</p>

                }
            </div>
            <div className='bg-green-300 p-5 max-h-[45vh] overflow-y-auto'>
                <h2 className='text-center text-2xl mb-5'>DONE</h2>
                {
                    doneTasks ?
                        <List
                            key={projectId}
                            dataSource={doneTasks}
                            renderItem={(task) => (
                                <TaskItem key={task.id} task={task} refetch={refetch} />
                            )}
                        /> :
                        <p>Loading......</p>
                }
            </div>
        </div>
    );
};

export default TaskList;
