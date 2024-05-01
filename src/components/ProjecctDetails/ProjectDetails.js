"use client"
import { Row, Col, Card, Button, Modal, Avatar, Tooltip } from 'antd';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';

import { useState } from 'react';
import useGetSingleProjectData from '@/hooks/useGetSingleProjectData';
import TaskList from './TaskList';
import TaskForm from './TaskForm';


const ProjectDetails = ({ projectId }) => {

    console.log(projectId)
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [project] = useGetSingleProjectData(projectId)
    console.log(project)
    const handleAddTask = () => {
        setShowTaskForm(true);
    };

    return (
        <div className="p-6">
            <Card title={project?.title}>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <p>{project?.description}</p>
                        <p>Due Date: {project?.dueDate}</p>
                        <div className='my-3'>
                            {
                                project?.team?.map((member, index) =>
                                    <Tooltip key={index} title={member}>
                                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                    </Tooltip>

                                )
                            }
                        </div>
                    </Col>
                </Row>
                <TaskList projectId={project.id} />
            </Card>


            <Button type="primary" icon={<PlusOutlined />} onClick={handleAddTask}>
                Add Task
            </Button>

            <Modal
                title="Add Task"
                visible={showTaskForm}
                onCancel={() => setShowTaskForm(false)}
                footer={null}
            >
                <TaskForm projectId={project.id} onClose={() => setShowTaskForm(false)} />
            </Modal>
        </div>
    );
};

export default ProjectDetails;