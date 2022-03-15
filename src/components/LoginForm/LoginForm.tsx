import { FC, useState } from "react";
import {
  Box,
  Card,
  Grid,
  Stack,
  Button,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
// Icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useActions, useTypedSelector } from "../../hooks";
import { useLocation, useNavigate } from "react-router-dom";

export const LoginForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const { login } = useActions();
  const navigate = useNavigate();
  const location: any = useLocation();

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    login(username, password);

    if (location?.state?.from) {
      navigate(location.state?.from?.pathname, { replace: true });
    } else {
      navigate("/");
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Card raised sx={{ margin: 2 }}>
        <Box
          component="form"
          autoComplete="off"
          onSubmit={onSubmitHandler}
          p={5}
        >
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">Авторизация</Typography>

              {error && (
                <Typography variant="body1" color="error" sx={{ marginTop: 1 }}>
                  {error}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                //   error
                // helperText={error.message}
                label="Введите логин"
                name="username"
                variant="outlined"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                //   error
                // helperText={error.message}
                label="Введите пароль"
                name="password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" type="submit" disabled={isLoading}>
                Войти
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Stack>
  );
};
