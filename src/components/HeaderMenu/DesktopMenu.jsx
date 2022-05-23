import { Menu, Tabs, Typography } from "antd";
import { Link } from "react-router-dom";
import "./HeaderMenu.styles.scss";

const DesktopMenu = () => {
  const { Title } = Typography;
  const { TabPane } = Tabs;

  const onChangeMenu = (key: string) => {
    console.log(key);
  };

  return (
    <div className="desktop_menu_wrapper flex content_between item_center">
      <div className="desktop_top_logo">
        <Link to="/">
          <Title level={4}>
            PRANTO <span>SHIKDER</span>
          </Title>
        </Link>
      </div>

      <div className="menu_tabs">
        <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="project">Project</Menu.Item>
          <Menu.Item key="experience">Experience</Menu.Item>
          <Menu.Item key="contact">Contact US</Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default DesktopMenu;
