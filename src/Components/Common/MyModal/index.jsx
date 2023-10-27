import { Avatar, Modal } from "antd";
import React, { useEffect, useState } from "react";
import convertNumber from "../../../Functions/convertNumber";
import Like from "../../../../Resources/like.svg";
import "./style.css";
import { CloseOutlined } from "@ant-design/icons";
import axios from "axios";
import Tag from "../Tag";
import { Info, Share } from "../Icons";
import { Link } from "react-router-dom";
import Error from "../Error";
const MyModal = ({ open, setOpen, id }) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.unsplash.com/photos/${id}`, {
        headers: {
          Authorization:
            "Client-ID zaCFc9U1redoHt3KTFRe2_OnCYTVOEU58-F1uvA4Wp8",
        },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!loading && (
        <Modal
          centered
          open={open}
          onCancel={() => setOpen(false)}
          closeIcon={<CloseOutlined className="close-icon" />}
        >
          {error && <Error error={error} />}
          {!error && (
            <>
              <div className="image">
                <img src={data.urls.small} />
                <div className="btn-container">
                  <div className="btn-group">
                    <button className="transparent-btn">
                      <span className="btn-prefix">
                        <Share />
                      </span>
                      Share
                    </button>
                    <Link to={data.links.html} target="_blank">
                      <button className="transparent-btn">
                        <span className="btn-prefix">
                          <Info />
                        </span>
                        Info
                      </button>
                    </Link>
                  </div>
                  <button className="download-btn">Download image</button>
                </div>
              </div>
              <div className="padding">
                <div className="wrapper">
                  <div className="author">
                    <Avatar src={data.user.profile_image.small} />
                    <div className="social">
                      <div className="author-name">{data.user.name}</div>
                      <div className="social-link">
                        <a href={data.user.links.html} target="_blank">
                          @{data.user.username}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="stats">
                    <div className="downloads">
                      {convertNumber(data.downloads)} downloads
                    </div>
                    <div className="likes">
                      <img src={Like} />
                      {convertNumber(data.likes)}
                    </div>
                  </div>
                </div>
                <div className="related-tags">
                  <p>Related tags</p>
                  <div className="tags">
                    {data.tags.map((tag) => {
                      if (tag.type === "search") {
                        return <Tag title={tag.title} />;
                      }
                    })}
                  </div>
                </div>
              </div>
            </>
          )}
        </Modal>
      )}
    </>
  );
};

export default MyModal;
