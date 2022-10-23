import { Link } from "react-router-dom";
import { makeStyles, Button, Container } from "@material-ui/core";
import "./Homepage.module.css";

const useStyles = makeStyles((theme) => {
  return {
    title: {
      color: "#fff",
      fontSize: "60px",
      textAlign: "center",
    },
    slogan: {
      fontSize: "30px",
      textAlign: "center",
      color: "#f9cdad",
    },
    paragraph: {
      color: "#fff",
      fontFamily: "Nunito",
    },
    button: {
      backgroundColor: "#fff",
      margin: "0 auto",
      display: "block",
      textDecoration: "none",
    },
    hover: {
      "&:hover": {
        backgroundColor: "pink",
      },
    },
  };
});

const Homepage = () => {
  const classes = useStyles();

  return (
    <Container>
      <h1 className={classes.title}>MoneyFam</h1>
      <h2 className={classes.slogan}>
        a financial community you can relate to.
      </h2>
      <p className={classes.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam orci
        orci, molestie sit amet blandit utx, sollicitudin in nisi.
      </p>
      {/* <Box justifyContent="center"> */}
      <Link to="/chatbot" style={{ textDecoration: "none" }} hover>
        <button hover className={classes.button}>
          Let's get started!
        </button>
      </Link>
      {/* </Box> */}
    </Container>
  );
};

export default Homepage;
