import Iframe from "react-iframe";
import { Link } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core";
import NavBar from "../Navbar";

const useStyles = makeStyles((theme) => {
  return {
    chatbot: {
      margin: "0 auto",
      borderRadius: "10px",
      borderStyle: "none",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      width: "300px",
      minHeight: "600px",
      display: "block",
    },
    chatbotContainer: {
      alignItems: "center",
    },
  };
});

const ChatBotPage = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Container>
        <Link to="/community">
          <button>Go to Feed!</button>
        </Link>
        <div className={classes.chatbotContainer}>
          <Iframe
            url="https://landbot.online/v3/H-1399300-PS53KTE2XA2WIUKJ/index.html"
            className={classes.chatbot}
          />
        </div>
      </Container>
    </>
  );
};

export default ChatBotPage;
