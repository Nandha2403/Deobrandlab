import React, { useState } from "react";
import {
  Button,
  Drawer,
  Menu,
  Dropdown,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import DeoLogo from "../../Images/DeoLogo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const SubMenu = Menu.SubMenu;
const { Option } = Select;

const MenuItemGroup = Menu.ItemGroup;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleDrawerOnOpen = () => {
    setOpen(true);
  };
  const handleDrawerOnClose = () => {
    setOpen(false);
  };

  const items = [
    {
      key: "1",
      label: <Link to={"/brand-strategy"}>Branding</Link>,
    },
    {
      key: "2",
      label: <Link to={"/design-service"}>Design Service</Link>,
    },
    {
      key: "3",
      label: <Link to={"/digital-marketing"}>Digital Marketing</Link>,
    },
    {
      key: "4",
      label: <Link to={"/content-writing"}>Content Writing</Link>,
    },
    {
      key: "5",
      label: <Link to={"/personal-linkedin"}>Personal Linkedin</Link>,
    },
    {
      key: "6",
      label: <Link to={"/market-analysis"}>Market Analysis</Link>,
    },
    {
      key: "7",
      label: <Link to={"/website-design"}>Website Design</Link>,
    },
    {
      key: "8",
      label: <Link to={"/media&film"}>Media & Film</Link>,
    },
  ];

  const MobileMenuItems = [
    {
      key: "1",
      label: "Services",
      children: <Link to={"/brand-stratergy"}>Branding</Link>,
    },
  ];
  return (
    <nav className="menu">
      <div className="menu_logo">
        <Link to={"/"}>
          <img src={DeoLogo} alt="Deobrandlab" />
        </Link>
      </div>
      <div className="menu_container">
        <div className="menu_links_big_screen">
          <Menu
            mode="horizontal"
            style={{ fontSize: "18px", alignItems: "center" }}
          >
            <Menu.Item key="home">
              <Link to={"/"}>Home</Link>
            </Menu.Item>
            <Menu.Item key="AboutUs">
              <Link to={"/about-us"}>About Us</Link>
            </Menu.Item>
            <Menu.Item key="Services">
              <Dropdown
                menu={{ items }}
                placement="bottom"
                arrow={{ pointAtCenter: true }}
              >
                <a href="#">Services</a>
              </Dropdown>
            </Menu.Item>

            <Menu.Item key="Portfolio">
              <a href="#">Portfolio</a>
            </Menu.Item>
            <Menu.Item key="ContactUs">
              <Link to={"/contact-us"}>Contact Us</Link>
              {/* <div> */}
              <Drawer
                title="Create a new account"
                width={720}
                onClose={onClose}
                open={open}
                styles={{
                  body: {
                    paddingBottom: 80,
                  },
                }}
                extra={
                  <Space>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onClose} type="primary">
                      Submit
                    </Button>
                  </Space>
                }
              >
                <Form layout="vertical">
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                          {
                            required: true,
                            message: "Please enter user name",
                          },
                        ]}
                      >
                        <Input placeholder="Please enter user name" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="url"
                        label="Url"
                        rules={[
                          { required: true, message: "Please enter url" },
                        ]}
                      >
                        <Input
                          style={{ width: "100%" }}
                          addonBefore="http://"
                          addonAfter=".com"
                          placeholder="Please enter url"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name="owner"
                        label="Owner"
                        rules={[
                          {
                            required: true,
                            message: "Please select an owner",
                          },
                        ]}
                      >
                        <Select placeholder="Please select an owner">
                          <Option value="xiao">Xiaoxiao Fu</Option>
                          <Option value="mao">Maomao Zhou</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="type"
                        label="Type"
                        rules={[
                          {
                            required: true,
                            message: "Please choose the type",
                          },
                        ]}
                      >
                        <Select placeholder="Please choose the type">
                          <Option value="private">Private</Option>
                          <Option value="public">Public</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name="approver"
                        label="Approver"
                        rules={[
                          {
                            required: true,
                            message: "Please choose the approver",
                          },
                        ]}
                      >
                        <Select placeholder="Please choose the approver">
                          <Option value="jack">Jack Ma</Option>
                          <Option value="tom">Tom Liu</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="dateTime"
                        label="DateTime"
                        rules={[
                          {
                            required: true,
                            message: "Please choose the dateTime",
                          },
                        ]}
                      >
                        <DatePicker.RangePicker style={{ width: "100%" }} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Form.Item
                        name="description"
                        label="Description"
                        rules={[
                          {
                            required: true,
                            message: "please enter url description",
                          },
                        ]}
                      >
                        <Input.TextArea
                          rows={4}
                          placeholder="please enter url description"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Drawer>
              {/* </div> */}
            </Menu.Item>
          </Menu>
        </div>

        <Button
          className="menu_mobile-button"
          type="primary"
          onClick={handleDrawerOnOpen}
        >
          <span className="Menu_btn_bars"></span>
        </Button>
        <Drawer placement="right" onClose={handleDrawerOnClose} open={open}>
          <Menu mode="vertical">
            <Menu.Item key="home">
              <Link to={"/"}>Home</Link>
            </Menu.Item>
            <Menu.Item key="Clients">
              <a href="#">Clients</a>
            </Menu.Item>
            <Menu.Item key="Portfolio">
              <a href="#">Portfolio</a>
            </Menu.Item>
            <Menu.Item key="Services">
              {/* <a href="#">Services</a> */}
              <Dropdown
                menu={{ items }}
                placement="bottom"
                arrow={{ pointAtCenter: true }}
              >
                <a href="#">Services</a>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="AboutUs">
              <Link to={"/about-us"}>About Us</Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
