"use client"
import {
    HomeOutlined,
    InboxOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons"
import { Menu } from "antd";
import { useRouter } from "next/navigation";

const Sidebar = () => {
    const router = useRouter();

    const handleMenuClick = (key) => {
        // Navigate to the corresponding route based on the menu item key
        switch (key) {
            case '1':
                router.push('/');
                break;
            case '2':
                router.push('/inbox');
                break;
            case '3':
                // router.push('/logout');
                break;
            default:
                break;
        }
    };
    return (
        <>

            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                onClick={({ key }) => handleMenuClick(key)}
                items={[
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
                ]}
            />
        </>
    );
};

export default Sidebar;