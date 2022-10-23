import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import Logo from "../../Logo.svg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    flex: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "10px",

      alignItems: "center",
    },
    logo: {
      display: "inline-block",
    },
    button: {
      fontSize: "16px",
      padding: "5px",
    },
  };
});

const Navbar = () => {
  const location = useLocation().pathname;
  const classes = useStyles();

  console.log(location);

  return (
    <>
      <div className={classes.flex}>
        <Link to="/">
          <h1 className={classes.logo}>MoneyFam</h1>
        </Link>
        {location === "/community" && (
          <Link to="/chatbot">
            <button className={classes.button}>Chatbot</button>
          </Link>
        )}

        {location === "/chatbot" && (
          <Link to="/community">
            <button className={classes.button}>
              <p style={{}}>Community</p>
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
