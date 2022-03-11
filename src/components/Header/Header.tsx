import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthActionCreator } from "../../store/reducers/authReducer/action-creators";
import { useActions } from "../../hooks";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Avatar, List, ListItem, Stack } from "@mui/material";

interface Menu {
  title: string;
  link: string;
}

export const Header = () => {
  const { logout } = useActions();
  const navigate = useNavigate();

  const menu: Menu[] = [
    {
      title: "Календарь",
      link: "/",
    },
    {
      title: "Профиль",
      link: "/profile",
    },
    {
      title: "О проекте",
      link: "/about",
    },
  ];

  const onLogoutHandler = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Stack direction="row" width="100%" justifyContent="space-between">
            <Stack direction="row" gap={1} alignItems="center">
              <CalendarMonthIcon fontSize="large" />

              <List sx={{ display: "flex" }}>
                {menu.map(({ title, link }) => (
                  <ListItem sx={{ whiteSpace: "nowrap" }}>
                    <Link to={link}> {title} </Link>
                  </ListItem>
                ))}
              </List>
            </Stack>

            <Stack direction="row" gap={1} alignItems="center">
              <Avatar>YK</Avatar>
              <Typography>Yury Kiryaev</Typography>

              <Button color="inherit" onClick={onLogoutHandler}>
                Выйти
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
