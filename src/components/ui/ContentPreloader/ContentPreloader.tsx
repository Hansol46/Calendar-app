import { FC } from "react";
// Material components
import { Box, CircularProgress } from "@mui/material";

interface Props {
  isLoading?: boolean;
}

/**
 * Прелоадер контента
 */
export const ContentPreloader: FC<Props> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return <>{children}</>;
};
