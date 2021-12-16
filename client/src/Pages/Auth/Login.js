import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { Login } from "../../JS/actions/user";
import Notification from "../../Component/Notification";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const SignIn = () => {
  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const errorsR = useSelector((state) => state.userReducer.errors);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    dispatch(Login(watch(), navigate));
    // setUser({
    //   Email: "",
    //   Password: "",
    // });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  // eslint-disable-next-line no-console
  // console.log({
  //   email: data.get("email"),
  //   password: data.get("password"),
  // });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {errorsR && errorsR.map((el) => <Notification error={el} />)}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            width="100%"
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register("Email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              onInput={handleUser}
              value={user.Email}
            />
            {errors.Email && <span>This Email is required</span>}

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("Password", { required: true })}
              onInput={handleUser}
              value={user.Password}
            />
            {errors.Password && <span>This Password is required</span>}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
