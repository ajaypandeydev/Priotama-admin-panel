import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import AnalyticsCards from "../components/AnalyticsCards";
import UsersTable from "../components/UsersTable";

export default function AdminDashboard({ onLogout }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
  const mockUsers = [
    { id: 1, name: "John Doe", age: 28, gender: "Male", email: "john@example.com", phone: "9876543210", location: "New York", blocked: false },
    { id: 2, name: "Jane Smith", age: 25, gender: "Female", email: "jane@example.com", phone: "8765432109", location: "Los Angeles", blocked: true },
    { id: 3, name: "Mike Johnson", age: 30, gender: "Male", email: "mike@example.com", phone: "7654321098", location: "Chicago", blocked: false },
    { id: 4, name: "Emily Davis", age: 27, gender: "Female", email: "emily@example.com", phone: "6543210987", location: "San Francisco", blocked: false },
    { id: 5, name: "Robert Brown", age: 32, gender: "Male", email: "robert@example.com", phone: "5432109876", location: "Houston", blocked: false },
    { id: 6, name: "Linda Wilson", age: 29, gender: "Female", email: "linda@example.com", phone: "4321098765", location: "Phoenix", blocked: true },
    { id: 7, name: "James Taylor", age: 26, gender: "Male", email: "james@example.com", phone: "3210987654", location: "Philadelphia", blocked: false },
    { id: 8, name: "Patricia Anderson", age: 31, gender: "Female", email: "patricia@example.com", phone: "2109876543", location: "San Antonio", blocked: false },
    { id: 9, name: "David Thomas", age: 27, gender: "Male", email: "david@example.com", phone: "1098765432", location: "San Diego", blocked: false },
    { id: 10, name: "Barbara Jackson", age: 28, gender: "Female", email: "barbara@example.com", phone: "9988776655", location: "Dallas", blocked: true },
    { id: 11, name: "Michael White", age: 33, gender: "Male", email: "michael@example.com", phone: "8877665544", location: "San Jose", blocked: false },
    { id: 12, name: "Elizabeth Harris", age: 24, gender: "Female", email: "elizabeth@example.com", phone: "7766554433", location: "Austin", blocked: false },
    { id: 13, name: "William Martin", age: 29, gender: "Male", email: "william@example.com", phone: "6655443322", location: "Jacksonville", blocked: false },
    { id: 14, name: "Susan Lee", age: 30, gender: "Female", email: "susan@example.com", phone: "5544332211", location: "Fort Worth", blocked: true },
    { id: 15, name: "Charles Hall", age: 27, gender: "Male", email: "charles@example.com", phone: "4433221100", location: "Columbus", blocked: false },
    { id: 16, name: "Charl Hally", age: 37, gender: "Male", email: "charles@example.com", phone: "4433221100", location: "Columbus", blocked: false },
  ];
    setUsers(mockUsers);
  }, []);

  const handleToggleBlock = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, blocked: !user.blocked } : user
      )
    );
  };

  const registeredCount = users.length;
  const blockedCount = users.filter((u) => u.blocked).length;

  const handleResetPassword = () => alert("Reset Password Clicked");

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#191C24" }} >
      <Navbar onLogout={onLogout} onResetPassword={handleResetPassword} />
      <Container maxWidth="lg">
        <AnalyticsCards registered={registeredCount} blocked={blockedCount} users={users}/>
        <UsersTable data={users} onToggleBlock={handleToggleBlock} />
      </Container>
    </Box>
  );
}
