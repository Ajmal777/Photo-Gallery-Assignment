import { Avatar } from "antd";
import React, { memo, useState } from "react";
import Like from "../../../../Resources/like.svg";
import "./style.css";
import convertNumber from "../../../Functions/convertNumber";
import MyModal from "../MyModal";

const Card = memo(({ data }) => {
  const [open, setOpen] = useState(false);
  function getOrientaion(width, height) {
    const ratio = width / height;
    if (ratio < 0.76) return "portrait";
    else if (ratio > 1.4) return "landscape";
    else return "square";
  }


  return (
    <>
      <div
        className={"card " + getOrientaion(data.width, data.height)}
        onClick={(e) => {
          e.preventDefault();
          setOpen(true)
        }}
      >
        <div className="card-cover">
          <img src={data.urls.thumb} />
        </div>
        <div className="details">
          <div className="wrapper">
            <div className="author">
              <Avatar src={data.user.profile_image.small} />
              <div className="social">
                <div className="author-name">{data.user.name}</div>
                <div className="social-link">
                  <a href={data.user.links.html}>@{data.user.username}</a>
                </div>
              </div>
            </div>
            <div className="likes">
              <img src={Like} />
              {convertNumber(data.likes)}
            </div>
          </div>
        </div>
      </div>
      <MyModal open={open} setOpen={setOpen} id={data.id} data={data}/>
    </>
  );
})

export default Card;
