import React from "react";
import PropTypes from "prop-types";

const Video = ({ title, url }) => {
  return (
    url && (
      <iframe
        title={title}
        width="560"
        height="315"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  );
};

Video.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
};

export default Video;
