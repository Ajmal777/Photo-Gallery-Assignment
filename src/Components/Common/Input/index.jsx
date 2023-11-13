import React from "react";
import "./style.css";
const Input = (props) => {
  return (
    <div className="input" style={props.style}>

      {props.prefix && (
        <span className="prefix" style={props.prefixstyle}>
          {props.prefix}
        </span>
      )}

      <input {...props} style={props.inputstyle} type={props.type ?? "text"}>
        {props.children}
      </input>
      
      {props.suffix && (
        <span className="suffix" style={props.suffixstyle}>
          {props.suffix}
        </span>
      )}
    </div>
  );
};

export default Input;
