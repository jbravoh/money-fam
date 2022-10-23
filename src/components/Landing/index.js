import { Link } from "react-router-dom";
import { makeStyles, Container, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      // height: "100%",
      // width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      overflow: "auto",
      backgroundColor: "#185d45ff",
      textAlign: "center",
    },
    title: {
      color: "#fff",
      fontSize: "60px",
      textAlign: "center",
      marginTop: "100px",
      marginBottom: "20px",
    },
    slogan: {
      fontSize: "30px",
      textAlign: "center",
      color: "#f9cdad",
      marginBottom: "40px",
    },
    paragraph: {
      color: "#fff",
      fontFamily: "Nunito",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "#fff",
      margin: "0 auto",
      display: "block",
      textDecoration: "none",
      padding: "10px",
      borderRadius: "8px",
      marginTop: "100px",
    },
    buttonText: {
      fontsSize: "3rem",
    },
    hover: {
      "&:hover": {
        backgroundColor: "#fff",
      },
    },
  };
});

const Landing = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <h1 className={classes.title}>MoneyFam</h1>
      <h2 className={classes.slogan}>
        a financial community you can relate to.
      </h2>
      {/* <p className={classes.paragraph}>
        
      </p> */}
      <Link to="/chatbot" style={{ textDecoration: "none" }} hover>
        <Button hover className={classes.button}>
          Let's get started!
          {/* <p className={classes.buttonText}>Let's get started!</p> */}
        </Button>
      </Link>
      {/* </Box> */}
    </Container>
  );
};

export default Landing;
