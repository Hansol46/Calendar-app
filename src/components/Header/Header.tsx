import { Link, useNavigate } from "react-router-dom";
// Material
import {
  // Link,
  Avatar,
  List,
  ListItem,
  Stack,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
// Icons
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// Hooks
import { useActions } from "../../hooks";
// import IconButton from "@mui/material/IconButton";
// import { useDispatch } from "react-redux";
// import { AuthActionCreator } from "../../store/reducers/authReducer/action-creators";

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
                  <ListItem key={title} sx={{ whiteSpace: "nowrap" }}>
                    <Link to={link}>
                      <Typography variant='body1' color='white'> {title} </Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Stack>

            <Stack direction="row" gap={1} alignItems="center">
              <Avatar>YK</Avatar>
              <Typography variant='body1'>Yury Kiryaev</Typography>

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
