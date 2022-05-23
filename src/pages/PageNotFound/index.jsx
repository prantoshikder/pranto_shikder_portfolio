import { Typography } from "antd";

const { Title, Text } = Typography;
const textColor = {
  color: "#fff",
  margin: "0px",
};

const PageNotFound = () => {
  return (
    <div className="flex content_center item_center" style={{ textAlign: "center", width: "100%", height: "100vh", background: "#071a2f" }}>
      <div className="page_not_found_info">
        <Title level={3} style={textColor}>
          Page Not Found
        </Title>
        <Title style={({ ...textColor }, { color: "#ffc300", margin: "5px 0" })}>404</Title>
        <Text style={textColor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laboriosam doloribus consectetur aut, libero excepturi.</Text>
      </div>
    </div>
  );
};

export default PageNotFound;
