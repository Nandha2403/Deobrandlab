import React, { useState } from "react";
import { Button, Drawer, Menu } from "antd";
import DeoLogo from "../../Images/DeoLogo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
  return (
    <nav className="menu">
      <div className="menu__logo">
        <Link to={"/"} target="_top">
          <img src={DeoLogo} alt="Deobrandlab" />
        </Link>
      </div>
      <div className="menu__container">
        <div className="menu_links_big_screen">
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <a href="#">Home</a>
            </Menu.Item>
            <Menu.Item key="Clients">
              <a href="#">Clients</a>
            </Menu.Item>
            <Menu.Item key="Portfolio">
              <a href="#">Portfolio</a>
            </Menu.Item>
            <Menu.Item key="Services">
              <a href="#">Services</a>
            </Menu.Item>
            <Menu.Item key="AboutUs">
              <a href="#">About Us</a>
            </Menu.Item>
          </Menu>
        </div>

        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={handleDrawerOnOpen}
        >
          <span className="Menu_btn_bars"></span>
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          onClose={handleDrawerOnClose}
          open={open}
        >
          <Menu mode="vertical">
            <Menu.Item key="home">
              <a href="#">Home</a>
            </Menu.Item>
            <Menu.Item key="Clients">
              <a href="#">Clients</a>
            </Menu.Item>
            <Menu.Item key="Portfolio">
              <a href="#">Portfolio</a>
            </Menu.Item>
            <Menu.Item key="Services">
              <a href="#">Services</a>
            </Menu.Item>
            <Menu.Item key="AboutUs">
              <a href="#">About Us</a>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
