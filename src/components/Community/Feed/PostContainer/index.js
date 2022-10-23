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
  };
});

const PostContainer = ({ title, extract }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>{title}</h1>
      <div>
        <p>{extract}</p>
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
