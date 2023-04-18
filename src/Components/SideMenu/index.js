import {
  AppstoreOutlined,
  BellOutlined,
  ExclamationCircleOutlined,
  FileTextOutlined,
  ProjectOutlined,
  UserAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  // const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <div className="Sidelo">
        <div className="top">
          <img
            width={40}
            
            src="./cropped-launch_image.jpg"
            alt=""
          />
          <h2>WOW*TALENT</h2>
        </div>
      </div>

      <div className="A">
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          // onClick={ (item) => {
          //   //item.key
          //   navigate(item.key .active);
          // }}
          selectedKeys={[selectedKeys]}
          items={[ 
            {
              
              label: "Dashbaord",
              icon: <AppstoreOutlined />,
              key: "/",
            },
            {
              label: "Wow Users",
              key: "",
              icon: <UserOutlined />,
            },
            {
              label: "Video Clips",
              key: "",
              icon: <VideoCameraOutlined />,
            },
            {
              label: "Reported Content",
              key: "",
              icon: <WarningOutlined />,
            },
            {
              label: "Category",
              key: "",
              icon: <ProjectOutlined />,
            },
            {
              label: "Info Page",
              key: "",
              icon: <ExclamationCircleOutlined />,
            },
            {
              label: "FAQ",
              key: "",
              icon: <FileTextOutlined />,
            },
            {
              label: "Push Notification",
              key: "",
              icon: <BellOutlined />,
            },
            {
              label: "Internal User",
              key: "",
              icon: <UserAddOutlined />,
            },
            {
              label: "Explicit Content",
              key: "",
              icon: <UserAddOutlined />,
            },
            {
              label: "Feedback Messages",
              key: "",
              icon: <UserAddOutlined />,
            },
            {
              label: "KYC",
              key: "",
              icon: <UserAddOutlined />,
            },
            {
              label: "Coin Withdrawal Request",
              key: "",
              icon: <UserAddOutlined />,
            },
            {
              label: "Coin purchased",
              key: "",
              icon: <UserAddOutlined />,
            },
            {
              label: "Coin Transfer History",
              key: "",
              icon: <UserAddOutlined />,
            },
            {
              label: "Coin Earning History",
              key: "",
              icon: <UserAddOutlined />,
            },
            {
              label: "Free Coin Earning",
              key: "",
              icon: <UserAddOutlined />,
            },
            {
              label: "Users Deleted",
              key: "",
              icon: <UserAddOutlined />,
            },
            {
              label: "Users feedbacks",
              key: "",
              icon: <UserAddOutlined />,
            },
          ]}
        ></Menu>
      </div>
    </div>
  );
}
export default SideMenu;
