import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      borderRadius: "8px",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      padding: "10px",
      marginBottom: "10px;",
    },
    title: {
      fontSize: "1.2rem",
      marginBottom: "5px",
    },
  };
});

const PostContainer = ({ title, extract,  }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{title}</h1>
      <p>{extract}</p>
      <div>
        <p></p>
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
