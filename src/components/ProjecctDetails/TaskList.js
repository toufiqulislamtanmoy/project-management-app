import React, { useEffect } from 'react';
import { List } from 'antd';
import TaskItem from './TaskItem';
import useGetTaskList from '@/hooks/useGetTaskList';
import useTaskStore from '@/store/useTaskStore';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const TaskList = ({ projectId }) => {
    const [tasks, tasksApiLoading, error, refetch] = useGetTaskList(projectId);
    const setTasks = useTaskStore((state) => state.setTasks);


    useEffect(() => {
        if (!tasksApiLoading && !error) {
            setTasks(tasks);
            console.log("task set successfully", tasks)
        } else if (error) {
            setError(error);
        }
    }, [tasks, setTasks, tasksApiLoading, error]);


    const toDoTasks = tasks.filter((task) => task.status === 'To Do');
    const inProgressTasks = tasks.filter((task) => task.status === 'In Progress');
    const doneTasks = tasks.filter((task) => task.status === 'Done');

    const onDragEnd = (result) => {
        console.log(result)
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {/* todo section */}
                <Droppable droppableId='todo'>
                    {(provided, snapshot) => (

                        <div className='bg-pink-300 p-5 max-h-[45vh] overflow-y-automax-h-[45vh] overflow-y-auto'
                            ref={provided.innerRef}
                        >
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
                    )
                    }
                </Droppable>
                {/* in progress section */}
                <Droppable droppableId='inprogress'>
                    {(provided, snapshot) => (
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
                    )}
                </Droppable>

                {/* done section */}
                <Droppable droppableId='done'>
                    {(provided, snapshot) => (
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
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
};

export default TaskList;
