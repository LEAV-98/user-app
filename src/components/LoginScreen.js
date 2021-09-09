import { validate } from "email-validator";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  startLoginEmailPassword,
  // , startGoogleLogin
} from "../actions/auth";
import { useForm } from "../hooks/useForm";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
//import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import { Header } from "./Header";

// get our fontawesome imports
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { email, password } = formValues;
  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("login");
    if (email === "" || password === "") {
      Swal.fire({
        title: "Complete todos los campos",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    if (!validate(email)) {
      Swal.fire({
        title: "Formato de Email Inválido",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    dispatch(startLoginEmailPassword(email, password));
  };
  // const handleGoogleLogin = () => {
  //   dispatch(startGoogleLogin());
  // };

  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    image: {
      backgroundImage:
        "url(http://d2j6dbq0eux0bg.cloudfront.net/startersite/images/31449124/1592414316449.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />

        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h3">
              Login
            </Typography>

            <form onSubmit={handleLogin} className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                value={email}
                onChange={handleInputChange}
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                value={password}
                onChange={handleInputChange}
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{ fontSize: 15 }}
              >
                Sign In
              </Button>
              {/* <Button
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={handleGoogleLogin}
                style={{ fontSize: 12 }}
              >
                <FontAwesomeIcon
                  icon={faGoogle}
                  style={{ marginRight: "8px", fontSize: 17 }}
                />
                Ingresa por google
              </Button> */}

              <Grid container>
                <Grid item xs>
                  <Link to="/">Volver</Link>
                </Grid>
                <Grid item>
                  <Link to="/auth/register">Registrate aquí</Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
