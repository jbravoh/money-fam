import React, {useState} from "react"
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { formatTopics } from "../../utils";
import heartFilled from "../../icons/heart-filled.svg"
import heartEmpty from "../../icons/heart-empty.svg"
import comment from "../../icons/comment.svg"

const useStyles = makeStyles((theme) => {
  return {
    container: {
      borderRadius: "8px",
      boxShadow: "0 3px 15px rgb(0 0 0 / 0.3)",
      padding: "15px",
      marginBottom: "20px;",
    },
    title: {
      fontSize: "1.2rem",
      marginBottom: "5px",
      color: "#185d45ff",
    },
    topicContainer: {
      border: "solid 1px black",
      display: "inline-block",
      padding: "6px",
      marginTop: "8px",
      borderRadius: "10px",
      fontSize: "12px"
    },
    flex: {
      display:"flex", 
      flexDirection: "row",
      alignItems: "end",
      justifyContent: "space-between",
      marginTop: "10px",
    }, 
    comments: {
      marginRight: "10px",
      width: "18px",
      height: "18px",

    },
    likes: {
      alignItem: "end",
      width: "18px",
      height: "18px"
    }

  };
});

const PostContainer = ({ title, extract, topic }) => {
  const [liked, setLiked] = useState(false)
  const classes = useStyles();

  const handleLikeButtonClick = () => {
    setLiked(!liked)

  }
  
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{title}</h1>
      <p>{extract}</p>
      <div className={classes.flex}> 
      {topic && <div className={classes.topicContainer}>
        <p>{formatTopics(topic)}</p>
      </div> }
      <div>
        <img className={classes.comments} alt="comments" src={comment} />
        {liked ?  (<img className={classes.likes} src={heartFilled} alt="likes" onClick={handleLikeButtonClick}/>) : (  <img className={classes.likes} src={heartEmpty} alt="likes" onClick={handleLikeButtonClick} />)}
      
      </div>
      </div>
    </div>
     
  );
};

PostContainer.propTypes = {
  title: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  //   extract: PropTypes.string,
  //   likes: PropTypes.string,
  //   comments: PropTypes.string,
};
export default PostContainer;
