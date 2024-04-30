"use client"
import useGetProject from "@/hooks/useGetProject";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, Modal, Row, message } from "antd";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const ProjectOverView = () => {
    const [projects, refetch] = useGetProject();
    console.log(projects)
    const [modal2Open, setModal2Open] = useState(false);
    const [loading, setLoading] = useState(false);



    const handleDeleteProject = async (projectId) => {
        try {

            const response = await axios.delete(`http://localhost:3004/projects/${projectId}`);


            if (response.status === 200) {
                console.log(`Project with ID ${projectId} deleted successfully.`);
                message.success('Project Deleted Successful');
                refetch();

            } else {
                console.error(`Failed to delete project with ID ${projectId}.`);

            }
        } catch (error) {
            console.error('An error occurred while deleting the project:', error);

        }
    };


    const onFinish = async (values) => {
        setLoading(true);
        console.log(values)
    };
    return (
        <>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    projects?.map(project =>
                        <div key={project?.id} className="flex lg:flex-row flex-col gap-4  items-center justify-between shadow-md bg-indigo-400/50 rounded-md  p-10">
                            <div>
                                <h2 className="text-xl">{project?.title}</h2>
                                <p className="text-xs">Due Date: {project?.dueDate}</p>
                            </div>
                            {/* actions buttons */}
                            <div className="space-x-5">
                                <Link href={`/project-details/${project?.id}`} >
                                    <Button
                                        type="primary"
                                        icon={<EyeOutlined />}

                                    />

                                </Link>
                                <Button
                                    type="primary"
                                    icon={<EditOutlined />}
                                    onClick={() => setModal2Open(true)}

                                />
                                <Button
                                    type="primary"
                                    icon={<DeleteOutlined />}
                                    onClick={() => handleDeleteProject(project?.id)}

                                />


                            </div>
                        </div>


                    )
                }


            </div>

            <Modal
                title="Update"
                centered
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
            >
                <Form
                    name="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    style={{ width: 300 }}
                >


                    <Form.Item
                        name="project_name"
                        rules={[{ required: true, message: 'Please enter your project name' }]}
                    >
                        <Input placeholder="Project Name" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading} block>
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>

    );
};

export default ProjectOverView;