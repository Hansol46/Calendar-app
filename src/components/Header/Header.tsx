import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthActionCreator } from "../../store/reducers/authReducer/action-creators";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            {" "}
            MENU
          </IconButton> */}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            New App
          </Typography>

          <Typography pr={3}>Yury Kiryaev</Typography>

          <Button color="inherit" onClick={() => dispatch(AuthActionCreator.logout())}>
            Выйти
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
