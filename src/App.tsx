import * as Yup from "yup";
import React from "react";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";

import "./App.css";

const schemaValidate = Yup.object({
  name: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string()
    .email("El correo electrónico no es válido")
    .required("El campo es requerido"),
  password: Yup.string()
    .min(8, "Contraseña débil")
    .max(20, "Contraseña demasiado tonta")
    .required("Contraseña requerida"),
  acceptTerms: Yup.boolean().equals([true]).required(),
});

interface ISigninValues {
  name: string;
  lastName: string;
  email: string;
  password: string;
  acceptTerms: boolean;
}

function App(): React.ReactElement {
  const handleOnSubmit = (values: ISigninValues) => {
    console.log("Se envio el formulario", values);
  };
  const signinForm = useFormik<ISigninValues>({
    initialValues: {
      name: "Julio",
      email: "",
      acceptTerms: false,
      lastName: "",
      password: "",
    },
    onSubmit: handleOnSubmit,
    validationSchema: schemaValidate,
  });

  return (
    <Container fixed>
      <Grid container>
        <Grid item xs={12} md={5}>
          <h1>{JSON.stringify(signinForm.errors)}</h1>
          <Typography>
            Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they
            sold out High Life.
          </Typography>
          <Typography>Takamaru Ayako</Typography>
          <Typography>Manager an inVision</Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography component="h2">Create new account</Typography>
          <Typography component="span">
            Use your work email to create new account... it's free.
          </Typography>
          <form onSubmit={signinForm.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={signinForm.values.name}
                  onChangeCapture={signinForm.handleChange("name")}
                  label="First Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={signinForm.values.lastName}
                  onChangeCapture={signinForm.handleChange("lastName")}
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  value={signinForm.values.email}
                  onChangeCapture={signinForm.handleChange("email")}
                  type="email"
                  variant="outlined"
                  fullWidth
                />
                {signinForm.errors.email && (
                  <span>{signinForm.errors.email}</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  value={signinForm.values.password}
                  onChangeCapture={signinForm.handleChange("password")}
                  type="password"
                  variant="outlined"
                  fullWidth
                />
                {signinForm.errors.password && (
                  <span>{signinForm.errors.password}</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChangeCapture={signinForm.handleChange("acceptTerms")}
                    />
                  }
                  label={
                    <Typography>
                      I have read the <a href="#">Terms and Conditions</a>.
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  <Typography>SIGN UP NOW</Typography>
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Have an account? <a href="#">Sign In</a>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
