import React from "react";
import ShareLink from "react-facebook-share-link";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";

const FBshare = (props) => {
  const myLink = "www.tvizugit.co.il/" + props.name?.split(" ").join("_");
  return (
    <ShareLink link={myLink}>
      {(link) => (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <IconButton>
            <ShareIcon />
          </IconButton>
        </a>
      )}
    </ShareLink>
  );
};

export default FBshare;
