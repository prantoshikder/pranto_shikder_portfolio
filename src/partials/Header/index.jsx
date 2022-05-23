import { Layout } from "antd";
import DesktopMenu from "../../components/HeaderMenu/DesktopMenu";

const { Content } = Layout;

const HeaderColor = {
  background: "#071a2f",
  color: "#fff",
};

const Header = () => {
  return (
    <Layout className="menu_bar" style={HeaderColor}>
      <Content className="container">
        <DesktopMenu />
      </Content>
    </Layout>
  );
};

export default Header;
