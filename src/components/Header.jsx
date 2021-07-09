import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useStyles } from "../styles";

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">سبد خرید</Button>
          <Button color="inherit">
            <Link className={classes.navitem} to="/admin/login" exact>
              مدیریت
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}