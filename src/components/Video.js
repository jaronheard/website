import React from "react";
import PropTypes from "prop-types";

const Video = ({ title, url }) => {
  return (
    url && (
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "98%",
            height: "98%"
          }}
          title={title}
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  );
};

Video.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
};

export default Video;
