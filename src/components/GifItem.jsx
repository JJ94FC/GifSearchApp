import React from "react";
import { Box } from "@mui/material";
import PropTypes from 'prop-types'

export const GifItem = ({ title, url }) => {
  return (
    <Box component={'div'} className="gifItem animate__animated animate__fadeInUp">
      <p>
        {title}
      </p>
      <img
        src={url}
        alt={title}
      />
    </Box>
  );
};

GifItem.prototype = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}