/* eslint-disable no-unused-vars */
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
    const token = localStorage.getItem("token");
    
    axios.get("https://bitmaxtest.com/api/admin/users",{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        if(Array.isArray(res.data)){
          setUsers(res.data)
        } else if(Array.isArray(res.data.users)){
          setUsers(res.data.users)
        } else{
          setUsers([])
        }
      })
      .catch((err) => Swal.fire("Error fetching users:", err.message, "error"));
  }, []);

  const handleToggleBlock = async (id, isBlocked) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`https://bitmaxtest.com/api/admin/users/${id}/block`, 
        {isBlocked: !isBlocked},
        {
          headers: {
          Authorization: `Bearer ${token}`
        },
      }
    );
      setUsers((prev) =>
        prev.map((user) =>
          user._id === id ? { ...user, isBlocked: !user.isBlocked } : user
        )
      );
    } catch (error) {
      Swal.fire("Error updating user");
    }
  };

  const registeredCount = users.length;
  const blockedCount = users.filter((u) => u.isBlocked).length;

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
