import { Typography } from "antd";

const Heading = ({ title, subTitle, style, ...rest }) => {
  const { Title, Text } = Typography;
  return (
    <div style={style}>
      {subTitle && <Text style={{ letterSpacing: "2px", color: "#ffc300" }}>{subTitle}</Text>}
      <Title level={2} style={{ margin: "0px", color: "#ffc300", zIndex: "99" }}>
        {title}
      </Title>
    </div>
  );
};

export default Heading;
