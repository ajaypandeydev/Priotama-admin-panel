import { useState, useEffect } from "react";
import { Container, Box, Dialog, DialogTitle, DialogContent, TextField, Button, Slide } from "@mui/material";
import Navbar from "../components/Navbar";
import AnalyticsCards from "../components/AnalyticsCards";
import UsersTable from "../components/UsersTable";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export default function Dashboard({ onLogout }) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => Swal.fire("Error fetching users:", err.message, "error"));
  }, []);

  const handleToggleBlock = async (id, blocked) => {
    try {
      await axios.patch(`http://localhost:5000/users/${Number(id)}`, { blocked: !blocked });
      setUsers((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, blocked: !user.blocked } : user
        )
      );
    } catch (error) {
      Swal.fire("Error updating user");
      console.error("Error updating user:", error);
    }
  };

  const registeredCount = users.length;
  const blockedCount = users.filter((u) => u.blocked).length;

  const handleResetPassword = () => navigate('/reset-password/');

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#191C24" }}>
      <Navbar onLogout={onLogout} onResetPassword={handleResetPassword} />
      <Container maxWidth="lg">
        <AnalyticsCards registered={registeredCount} blocked={blockedCount} users={users} />
        <UsersTable data={users} onToggleBlock={handleToggleBlock} />
      </Container>
    </Box>
  );
}
