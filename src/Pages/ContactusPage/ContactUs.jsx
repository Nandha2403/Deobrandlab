import React, { useState } from "react";

import "./ContactUs.css";
import Navbar from "../../Components/Navabar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const ContactUs = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onRecaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
  };
  return (
    <div>
      <Navbar />

      <div>
        <div className="get_in_touch_cont">
          <p>Get In Touch</p>
        </div>

        <div className="contact_us_tagline_cont">
          <p>Ready to Win?</p>
          <p>Let's Begin.</p>
        </div>

        <div className="what_app_and_email_links_cont">
          <div>
            <p>Whatsapp</p>
            <a
              target="blank"
              href="https://wa.me/+919900054213?text=Hello%20there!%20I%20saw%20your%20link%20and%20wanted%20to%20chat."
            >
              <FaWhatsapp fontSize={"26px"} className="icon-style" />
              Chat with us
            </a>
          </div>
          <div>
            <p>Email us</p>
            <a target="blank" href="mailto:richab@deobrandlab.com">
              <MdOutlineEmail fontSize={"26px"} className="icon-style" />
              richab@deobrandlab.com
            </a>
          </div>
        </div>
      </div>

      <div className="contactus_form_main">
        <div className="contactus_form_cont">
          <Form layout="vertical">
            <Form.Item
              name="Name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Please input your Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              name="Enter Name of Business"
              label="Name of business"
              rules={[
                {
                  required: true,
                  message: "Please input your Name of Business!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="Message" label="Message">
              <Input.TextArea showCount maxLength={100} />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
          </Form>
          <Form.Item {...tailFormItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
              // style={{ display: "block", margin: "auto" }}
            >
              Submit
            </Button>
          </Form.Item>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
