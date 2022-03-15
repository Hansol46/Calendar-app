import { FC } from "react";
import { Box } from "@mui/material";

export const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "end",
      }}
    >
      © 2022 create by Yury
    </Box>
  );
};
