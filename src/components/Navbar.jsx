import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { FaSignOutAlt, FaRedo } from "react-icons/fa";

export default function Navbar({ onLogout, onResetPassword }) {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#191C24" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Admin Panel
        </Typography>
        <Box>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<FaRedo />}
            sx={{ mr: 2 }}
            onClick={onResetPassword}
          >
            Reset Password
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<FaSignOutAlt />}
            onClick={onLogout}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
