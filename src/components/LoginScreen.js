import { validate } from "email-validator";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { startLoginEmailPassword, startGoogleLogin } from "../actions/auth";
import { useForm } from "../hooks/useForm";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
//import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from "./Header";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons"

export const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    email: "luis@luis.com",
    password: "luis123",
  });
  const dispatch = useDispatch();
  const { email, password } = formValues;
  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("login");
    if (email === "" || password === "") {
      Swal.fire({
        title: "Campos Vacíos",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    if (!validate(email)) {
      Swal.fire({
        title: "Escribe un email valido pndejo",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    dispatch(startLoginEmailPassword(email, password));
  };
  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(http://d2j6dbq0eux0bg.cloudfront.net/startersite/images/31449124/1592414316449.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return (
    <>{/* 
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-10   mx-auto mt-3">
            <Link to="/">Volver</Link>
            <h1 className="text-center">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Usuario"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Contraseña"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="submit"
                  className="btn btn-success "
                  value="ingresar"
                />
              </div>
            </form>
            <div className="mt-2">
              <button className="btn btn-primary" onClick={handleGoogleLogin}>
                Ingresa epicamente por Google
              </button>
            </div>
            <p>
              No tienes cuenta? <Link to="/auth/register">Registrate aquí</Link>
            </p>
          </div>
        </div>
      </div>
       */}
      <Grid container component="main" className={classes.root}>
        <CssBaseline />

        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>

            <form onSubmit={handleLogin} className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
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
                label="Password"
                type="password"
                id="password"

                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={handleGoogleLogin}
              >
                <FontAwesomeIcon  icon={faGoogle} style={{marginRight: '5px'}}/>
                Ingresa epicamente por google
              </Button>
              
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
