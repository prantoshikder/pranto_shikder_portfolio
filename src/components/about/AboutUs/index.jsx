import { FacebookFilled, GithubOutlined, LinkedinFilled, TwitterSquareFilled } from "@ant-design/icons";
import { Col, Image, Row, Typography } from "antd";
import aboutImage from "../../../assets/profileImage.jpg";
import Heading from "../../Heading";
import "./AboutUs.style.scss";

const AboutUs = () => {
  const { Title, Text } = Typography;

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
    <div className="container top">
      <Heading title="About US" subTitle="Information" style={{ textAlign: "center" }} />

      <div className="about_us_wrapper">
        <Row gutter={20}>
          <Col lg={14}>
            <div className="about_us_content">
              <Title level={3}>Hello!</Title>
              <Title>
                I'm <span>Pranto Shikder</span>
              </Title>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores necessitatibus itaque, sint commodi nisi iusto quibusdam illum odit ipsam eos.
              </Text>

              <div className="aboutUs_social_media flex">
                {socialLink?.length > 0 &&
                  socialLink?.map((media) => (
                    <div key={media?.id} style={{ marginRight: "10px" }}>
                      <a href={media?.link}>{media?.icon}</a>
                    </div>
                  ))}
              </div>
            </div>
          </Col>

          <Col lg={10}>
            <div className="about_img">
              <Image src={aboutImage} preview={false} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
