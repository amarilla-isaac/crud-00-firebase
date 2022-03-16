import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box } from "@mui/system";
import React from "react";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TO - DO
          </Typography>
          <div>
            <IconButton color="inherit">
              <LogoutIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
