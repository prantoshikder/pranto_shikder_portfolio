import { FacebookFilled, GithubOutlined, LinkedinFilled, TwitterSquareFilled } from "@ant-design/icons";
import { Typography } from "antd";
import moment from "moment";
import "./Footer.styles.scss";

const copyRightFooterBg = {
  background: "#071a2f",
};

const CopyRight = () => {
  const { Title } = Typography;
  const format = "YYYY";
  const today = new Date();

  const socialLink = [
    {
      id: 1,
      link: "https://www.facebook.com/prantoshikder95",
      icon: <FacebookFilled />,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/prantoshikder",
      icon: <LinkedinFilled />,
    },
    {
      id: 3,
      link: "https://twitter.com/prantoshikder4",
      icon: <TwitterSquareFilled />,
    },
    {
      id: 4,
      link: "https://github.com/prantoshikder",
      icon: <GithubOutlined />,
    },
  ];

  return (
    <div className="container" style={copyRightFooterBg}>
      <div className="copy_right_footer flex content_between item_center">
        <div className="copy_right_info">
          <Title level={5}>
            Copyright &copy; {moment(today).format(format)} <span style={{ color: "#ffc300" }}>Prantoshikder</span>
          </Title>
        </div>

        <div className="social_media flex content_between item_center">
          {socialLink?.length > 0 &&
            socialLink?.map((media) => (
              <div key={media?.id} style={{ marginRight: "8px" }}>
                <a href={media?.link}>{media?.icon}</a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
