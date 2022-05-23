import { Col, Row } from "antd";
import Heading from "./../../components/Heading";
import "./Footer.styles.scss";

const FooterContact = () => {
  return (
    <div className="footer_contact">
      <div className="container">
        <div className="footer_contact_wrapper">
          <Heading title="Contact Us" subTitle="Get In Touch" style={{ textAlign: "left", zIndex: 99 }} />

          <div className="contact_info">
            <Row gutter={20}>
              <Col lg={8}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium qui aliquid neque numquam impedit illum.</p>
              </Col>
              <Col lg={16}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia voluptatum minima sed aliquam provident, eum sapiente, minus eveniet
                  asperiores dolore, alias quos. Tempore, amet non!
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
