import Iframe from "react-iframe";
import { Container, makeStyles } from "@material-ui/core";
import NavBar from "../Navbar";

const useStyles = makeStyles(() => {
  return {
    chatbot: {
      margin: "0 auto",
      borderRadius: "10px",
      borderStyle: "none",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      width: "380px",
      height: "550px",
      display: "block",
    },
    chatbotContainer: {
      alignItems: "center",
      marginTop: "20px",
    },
  };
});

const ChatbotPage = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Container maxWidth="sm">
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

export default ChatbotPage;
