import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "./Register.css";
import { register as signup } from "../../JS/actions/user";
import { useForm } from "react-hook-form";

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

const SignUp = () => {
  const [user, setUser] = useState({
    Gender: "",
    Country: "",
    Name: "",
    Last_Name: "",
    Email: "",
    Password: "",
    Company_Name: "",
    Number: "",
    Role: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const errorsR = useSelector((state) => state.userReducer.errors);
  const navigate = useNavigate();
  console.log(navigate);
  const dispatch = useDispatch();
  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(watch());
  const onSubmit = () => {
    dispatch(signup(watch(), navigate));
    //   setUser({
    //     Country: "",
    //     Name: "",
    //     Last_Name: "",
    //     Email: "",
    //     Password: "",
    //     Company_Name: "",
    //     Number: "",
    //     Role: "",
    //   });
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     // eslint-disable-next-line no-console
  //     console.log({
  //       email: data.get("email"),
  //       password: data.get("password"),
  //     });
  //   };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        style={{ display: "inline-table" }}
      >
        <CssBaseline />
        {errorsR && errorsR.map((el) => <Notification error={el} />)}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            width: "650px",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="First Name"
                  onInput={handleUser}
                  value={user.Name}
                  {...register("Name", { required: true })}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Last_Name"
                  label="Last Name"
                  name="Last_Name"
                  autoComplete="family-name"
                  onInput={handleUser}
                  value={user.Last_Name}
                  {...register("Last_Name", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Email"
                  label="Email Address"
                  name="Email"
                  autoComplete="email"
                  onInput={handleUser}
                  value={user.Email}
                  {...register("Email", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="password"
                  id="Password"
                  autoComplete="new-password"
                  onInput={handleUser}
                  value={user.Password}
                  {...register("Password", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Number"
                  label="Phone"
                  name="Number"
                  autoComplete="Phone"
                  onInput={handleUser}
                  value={user.Number}
                  {...register("Number", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
export default SignUp;
