import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import { validate } from "email-validator";
import { useDispatch } from "react-redux";
import { startRegisterWithEmailPasswordName } from "../actions/auth";

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

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [inputValues, handleInputChange] = useForm({
    name: "leav",
    email: "leav@leav.com",
    password: "leav123",
  });
  const { name, email, password } = inputValues;
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log("Registranding");
    if (name === "" || email === "" || password === "") {
      Swal.fire({
        title: "Rellena los datos no seas imbecil",
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
    dispatch(startRegisterWithEmailPasswordName(email, password, name));
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://www.hola.com/imagenes/cocina/noticiaslibros/20210209183991/dia-mundial-pizza-recetas/0-917-728/dia-pizza-m.jpg)',
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
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />

        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>

            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>

            <form onSubmit={handleRegister} className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Username"
                name="name"
                value={name}
                onChange={handleInputChange}
                autoComplete="username"
                autoFocus
              />
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
                Registrar
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link to="/">Volver</Link>
                </Grid>
                <Grid item>
                  <Typography component="h4" variant="h5">¿Ya tienes una cuenta?</Typography>
                  <Link to="/auth/login">Inicia sesión aquí</Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
