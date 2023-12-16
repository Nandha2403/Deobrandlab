import React, { useState } from "react";
import { Button, Drawer, Menu, Dropdown } from "antd";
import DeoLogo from "../../Images/DeoLogo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const SubMenu = Menu.SubMenu;

const MenuItemGroup = Menu.ItemGroup;

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
      label: <a href="#">Design Service</a>,
    },
    {
      key: "3",
      label: <a href="#">Digital Marketing</a>,
    },
    {
      key: "4",
      label: <a href="#">Content Writing</a>,
    },
    {
      key: "5",
      label: <a href="#">Personal Linkedin</a>,
    },
    {
      key: "6",
      label: <Link to={"/market-analysis"}>Market Analysis</Link>,
    },
    {
      key: "7",
      label: <a href="#">Website Design</a>,
    },
    {
      key: "8",
      label: <a href="#">Media & Film</a>,
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
          <Menu mode="horizontal" style={{ fontSize: "18px" }}>
            <Menu.Item key="home">
              <Link to={"/"}>Home</Link>
            </Menu.Item>
            <Menu.Item key="Portfolio">
              <a href="#">Portfolio</a>
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
            <Menu.Item key="AboutUs">
              <Link to={"/about-us"}>About Us</Link>
            </Menu.Item>
            <Menu.Item key="ContactUs">
              <a href="#">Contact Us</a>
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
