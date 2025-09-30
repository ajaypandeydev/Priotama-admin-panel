
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FaLock } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";


export default function ResetPassword({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const token = localStorage.getItem("token"); // get token from login

      const response = await axios.post(
        `https://bitmaxtest.com/api/admin/change-password`,
        {
          oldPassword: formData.oldPassword,
          newPassword: formData.newPassword,
          confirmNewPassword: formData.confirmPassword,
        },
        {
          headers: { Authorization: `Bearer ${token}`},
        }
      );
      Swal.fire("Success", response.data.message ||"Password has been reset successfully!", "success").then(() => {
          localStorage.removeItem("token");
          if(setIsAuthenticated) setIsAuthenticated(false)
          navigate('/')
    });
    }
    catch(err){
      Swal.fire(
        "Error",
        err.response?.data?.message || "Password reset failed, Try Again!",
        "error"
      )
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#191C24"
    >
      <Card sx={{ maxWidth: 400, width: "100%", p: 2, borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Reset Password
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Old Password"
              name="oldPassword"
              type={showPassword ? 'text' : 'password'}
              value={formData.oldPassword}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />

            <TextField
              fullWidth
              margin="normal"
              label="New Password"
              name="newPassword"
              type={showPassword ? 'text' : 'password'}
              value={formData.newPassword}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge='end'
                    >
                      {showPassword ? <Visibility /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />

            <TextField
              fullWidth
              margin="normal"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaLock />
                  </InputAdornment>
                ),
              }}
              required
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2, borderRadius: 2 }}
            >
              Confirm
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
