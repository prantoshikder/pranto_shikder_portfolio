import { Layout } from "antd";
import DesktopMenu from "../../components/HeaderMenu/DesktopMenu";

const { Content } = Layout;

const headerColor = {
  background: "#071a2f",
  color: "#fff",
};

const Header = () => {
  return (
    <Layout className="menu_bar" style={headerColor}>
      <Content className="container">
        <DesktopMenu />
      </Content>
    </Layout>
  );
};

export default Header;
