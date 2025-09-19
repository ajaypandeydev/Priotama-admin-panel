import React from 'react';
import { Card, CardContent, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Avatar, Box, Button } from '@mui/material';

const sampleUsers = [
  { id: 1, name: 'Aarav Sharma', age: 24, location: 'Delhi, India', email: 'aarav@example.com', phone: '+91 98765 43210', insta: '@aarav_sh', avatar: 'https://i.pravatar.cc/80?img=12' },
  { id: 2, name: 'Nisha Verma', age: 22, location: 'Mumbai, India', email: 'nisha.v@example.com', phone: '+91 91234 56789', insta: '@nisha.verma', avatar: 'https://i.pravatar.cc/80?img=5' },
  { id: 3, name: 'Rahul Singh', age: 27, location: 'Bengaluru, India', email: 'rahul.s@example.com', phone: '+91 99876 54321', insta: '@rahul_s', avatar: 'https://i.pravatar.cc/80?img=8' },
];

export default function UsersTable() {
  return (
    <Card sx={{ borderRadius: 16 }} elevation={3}>
      <CardContent>
        <Typography variant="h6" sx={{ color: '#262626', fontWeight: 700, mb: 1 }}>User Data</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#F75270', fontWeight: 700 }}>Profile</TableCell>
                <TableCell sx={{ color: '#262626', fontWeight: 700 }}>Name</TableCell>
                <TableCell sx={{ color: '#262626', fontWeight: 700 }}>Age</TableCell>
                <TableCell sx={{ color: '#262626', fontWeight: 700 }}>Location</TableCell>
                <TableCell sx={{ color: '#262626', fontWeight: 700 }}>Email ID</TableCell>
                <TableCell sx={{ color: '#262626', fontWeight: 700 }}>Phone</TableCell>
                <TableCell sx={{ color: '#262626', fontWeight: 700 }}>Instagram</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleUsers.map((u) => (
                <TableRow key={u.id} hover sx={{ '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 18px rgba(0,0,0,0.06)' } }}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar src={u.avatar} alt={u.name} sx={{ width: 48, height: 48 }} />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: '#262626', fontWeight: 600 }}>{u.name}</TableCell>
                  <TableCell>{u.age}</TableCell>
                  <TableCell>{u.location}</TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell>{u.phone}</TableCell>
                  <TableCell>{u.insta}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="contained" sx={{ bgcolor: '#8CCDED', color: '#262626', textTransform: 'none' }}>Export CSV</Button>
        </Box>
      </CardContent>
    </Card>
  );
}
