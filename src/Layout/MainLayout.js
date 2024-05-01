"use client"
import { Flex, Layout, Menu, theme } from 'antd';
import { HomeOutlined, InboxOutlined, LogoutOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
const { Title } = Typography;
import useAuthStore from '@/store/useAuthStore';
const { Header, Content, Footer, Sider } = Layout;
const MainLayout = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    return (
        <>
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    className='min-h-screen'
                >
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={[
                        {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'Home',
                        },
                        {
                            key: '2',
                            icon: <InboxOutlined />,
                            label: 'Inbox',
                        },
                        {
                            key: '3',
                            icon: <LogoutOutlined />,
                            label: 'Logout',
                        },
                    ]} />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        <Flex gap="middle" vertical align='center' justify='center'>

                            <Title level={2}>h2. Ant Design</Title>
                        </Flex>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px 0',
                        }}
                    >
                        <div
                            style={{
                                padding: 24,
                                minHeight: "80vh",
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}

                        >
                            {children}
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Project Management ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </>
    );
};

export default MainLayout;