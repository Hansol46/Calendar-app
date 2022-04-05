import { FC } from "react";
import { Box, Typography } from "@mui/material";
// Icons
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from '@mui/icons-material/Email';

export const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        padding: 3,
        flexDirection: "column",
        alignItems: 'center',
      }}
    >
      <Typography> © 2022 version 1.2.1 </Typography>
      
      <Box>
        <TwitterIcon />

        <TelegramIcon />

        <EmailIcon />
      </Box>
    </Box>
  );
};
