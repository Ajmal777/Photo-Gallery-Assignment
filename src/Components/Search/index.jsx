import React, { useState } from "react";
import "./style.css";
import Input from "../Common/Input";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setInput('');
      navigate(`/search/${input}`);
    }
  }

  return (
    <div className="search">
      <div className="content">
        <h1>Download High Quality Images by creators</h1>
        <p>Over 2.4 million+ stock Images by our talented community</p>
        <Input
          value={input}
          onKeyDown={handleKeyPress}
          onChange={(e) => setInput(e.target.value)}
          prefix={<SearchOutlined />}
          placeholder="Search high resolution Images, categories, wallpapers"
          style={{
            boxShadow: "0px 4px 19px 0px #0000000D inset",
            padding: "0.5rem 1rem",
          }}
          inputstyle={{ color: "#4F4F4F" }}
          prefixstyle={{ color: "#C4C4C4" }}
        />
      </div>
    </div>
  );
};

export default Search;
