import { Link } from "react-router-dom";
import { makeStyles, Container } from "@material-ui/core";
import "../../styles/Landing.css";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      height: "100%",
      width: "100v%",
      backgroundColor: "#185d45ff",
      margin: 0,
    },
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
      padding: "5px",
      borderRadius: "8px",
    },
    buttonText: {
      fontsSize: "2rem",
    },
    hover: {
      "&:hover": {
        backgroundColor: "#fff",
      },
    },
  };
});

const Homepage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
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
          <p className={classes.buttonText}>Let's get started!</p>
        </button>
      </Link>
      {/* </Box> */}
    </Container>
  );
};

export default Homepage;
