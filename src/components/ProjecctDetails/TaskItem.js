import Image from 'next/image';
import duser from "@/assets/duser.jpg"
import { Avatar, Button, Dropdown, Space, Tooltip } from 'antd';
import { CheckOutlined, RightOutlined, SmallDashOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
const TaskItem = ({ task }) => {
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
    return (
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
                    <Link href={`task-details/${task?.id}`}>
                        <RightOutlined />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default TaskItem;
