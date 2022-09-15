import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField } from "@mui/material";
import { AuthLayout } from "../../Layout/AuthLayout.jsx";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@gmail.com"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="contraseña"
                type="password"
                placeholder="contraseña"
                fullWidth
              />
            </Grid>

            <Grid container sx={{ mt: 2 }}>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Ingresar
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid container justifyContent="end">
            <Grid item sx={{mt: 1}}>
                <Link component={RouterLink} color="inherit" to="/auth/registro">
                    Registro
                </Link>
            </Grid>
          </Grid>

        </form>
    </AuthLayout>
  );
};
