
"use client"
import { Layout, Menu, theme } from 'antd';
import { HomeOutlined, InboxOutlined, LogoutOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

export default function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
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
        />
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            content
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
