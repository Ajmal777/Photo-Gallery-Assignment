import React, { useState } from "react";
import "./style.css";
import Input from "../Common/Input";
import { Drawer, Switch } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setInput("");
      navigate(`/search/${input}`);
    }
  }

  return (
    <div className="navbar">
      <div className="nav-body">
        <div className="brand">
          <Link to="/">Image Gallery</Link>
        </div>
        <div className="nav-content">
          <div className={`searchBar`} onKeyDown={handleKeyPress}>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              prefix={<SearchOutlined />}
              placeholder="Search Images here"
              style={{
                boxShadow: "0px 4px 19px 0px #0000000D inset",
                padding: "0.5rem 1rem",
              }}
              inputstyle={{ color: "#4F4F4F" }}
              prefixstyle={{ color: "#C4C4C4" }}
            />
          </div>
          <div className="lg nav-links">
            <ul className="lg links">
              <li className="lg link">
                <a href="">Explore</a>
              </li>
              <li>
                <a href="">Collection</a>
              </li>
              <li>
                <a href="">Community</a>
              </li>
            </ul>
          </div>
          {/* <div className="lg theme-btn">
            <Switch defaultChecked />
          </div> */}
          <button className="menu-btn" onClick={showDrawer}>
            <MenuOutlined />
          </button>
        </div>
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          open={open}
          width='auto'
        >
          <div className="sm nav-links">
            <div className="sm links">
              <div className="sm link">
                <a href="">Explore</a>
              </div>
              <div>
                <a href="">Collection</a>
              </div>
              <div>
                <a href="">Community</a>
              </div>
            </div>
          </div>
          {/* <div className="sm-theme-btn">
            <Switch defaultChecked />
          </div> */}
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
