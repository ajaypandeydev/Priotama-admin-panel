import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FaSignOutAlt, FaRedo, FaUserShield, FaBars } from "react-icons/fa";

export default function Navbar({ onLogout, onResetPassword }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabletOrAbove = useMediaQuery(theme.breakpoints.up("sm")); 

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#191C24" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left side with icon + heading */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FaUserShield color="#8CCDED" size={24} style={{ marginRight: 8 }} />
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{ fontWeight: "bold" }}
            >
              Admin Panel
            </Typography>
          </Box>

          {/* Right side */}
          {isTabletOrAbove ? (
            // Show inline buttons on tablet/desktop
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
          ) : (
            // Show hamburger on mobile
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <FaBars />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ backgroundColor: "#191C24" }}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={onResetPassword}>
                <ListItemIcon>
                  <FaRedo />
                </ListItemIcon>
                <ListItemText primary="Reset Password" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={onLogout}>
                <ListItemIcon>
                  <FaSignOutAlt />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
