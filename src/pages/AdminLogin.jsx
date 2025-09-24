/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Swal from 'sweetalert2'

export default function AdminLogin({ setIsAuthenticated }) {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // replace api 
    if (form.email === "admin@example.com" && form.password === "1234") {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true'); //persist
      Swal.fire({      
      title: 'Success!',
      text: 'Your action was successful.',
      icon: 'success',
      confirmButtonText: 'OK'
    })
      navigate("/dashboard");
    } else {
      Swal.fire({
        title: 'Oops! Invalid credentials ',
        text: 'Try again',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  };

  useEffect(() => {
    const authState = localStorage.getItem("isAuthenticated");
    if(authState === "true"){
      navigate('/dashboard')
    }
  }, [navigate])

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#f5f6fa",
      }}
    >
      {/* Left Side Image */}
      <Box
        sx={{
          flex: 1,
          background: "linear-gradient(135deg, #191C24 0%, #198754 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <img
          src="/login.svg"
          alt="Admin Illustration"
          style={{ width: "70%", maxWidth: "400px" }}
        />
      </Box>

      {/* Right Side Login Form */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 5,
            width: "100%",
            maxWidth: 400,
            borderRadius: "16px",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#191C24", textAlign: "center" }}
          >
            Admin Login
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Email Address"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              variant="outlined"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                bgcolor: "#198754",
                "&:hover": { bgcolor: "#146c43" },
                borderRadius: "8px",
                py: 1.2,
              }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
}
