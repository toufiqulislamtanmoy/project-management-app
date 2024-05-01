"use client"
import useGetProject from "@/hooks/useGetProject";
import useProjectStore from "@/store/useProjectStore";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, DatePicker, Flex, Form, Input, Modal, Row, message } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProjectOverView = () => {

    const [projects, projectsApiLoading, error, refetch] = useGetProject();
    console.log(projects)
    const [modal2Open, setModal2Open] = useState(false);
    const [formLoading, setFormLoading] = useState(false);
    const [projectDefaultValue, setProjectDefaultValue] = useState(null);

    const setProjects = useProjectStore((state) => state.setProjects);
    const setError = useProjectStore((state) => state.setError);

    useEffect(() => {
        if (!projectsApiLoading && !error) {
            setProjects(projects);
        } else if (error) {
            setError(error);
        }
    }, [projects, projectsApiLoading, error, setProjects, setError]);


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

    const handleUpdate = (projectDetails) => {
        setProjectDefaultValue(projectDetails)
        console.log(projectDefaultValue)
        setModal2Open(true)

    }


    const onFinish = async (values) => {
        setFormLoading(true);
        console.log(values)
        const { title, dueDate } = values;


        try {

            const response = await axios.patch(`http://localhost:3004/projects/${projectDefaultValue?.id}`, {
                title: title ? title : projectDefaultValue?.title,
                dueDate: dueDate ? dayjs(dueDate).format('YYYY-MM-DD') : projectDefaultValue?.dueDate
            });

            console.log('Update successful:', response.data);
            message.success("Update Successful")
            setFormLoading(false);
            refetch();
            setModal2Open(false);


        } catch (error) {
            console.error('Update failed:', error);
            setFormLoading(false);

        }
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
                                    onClick={() => handleUpdate(project)}

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
                        name="title"

                    >
                        <Input
                            key={projectDefaultValue?.id}
                            defaultValue={projectDefaultValue?.title} placeholder="Project Name" />
                    </Form.Item>

                    <Form.Item
                        name="dueDate"

                    >
                        <DatePicker
                            key={projectDefaultValue?.id}
                            defaultValue={dayjs(projectDefaultValue?.dueDate, 'YYYY-MM-DD')}
                            placeholder="Due Date" style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={formLoading} block>
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>

    );
};

export default ProjectOverView;