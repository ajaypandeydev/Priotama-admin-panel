import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TablePagination,
  Box,
  CircularProgress
} from "@mui/material";
import { FaBan, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

export default function UsersTable({ data, onToggleBlock }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

const formatPhone = (phone) => {
  if (!phone) return "";

  let str = phone.toString().replace(/\s+/g, ""); // remove spaces if any

  // Match +<countrycode><rest>
  const match = str.match(/^(\+\d{1,4})(\d{6,15})$/);

  if (match) {
    return `${match[1]} ${match[2]}`; // "+880 954616151"
  }

  return str; // fallback
};


  if(!data.length){
    return <p style={{textAlign: 'center', padding: '20px', color: '#C9CDCF', display: 'flex', alignItems:'center'}}>Loading Users data <CircularProgress size={24} color="#262626"/></p>
  }

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  
  return (
    <Paper sx={{ mt: 3, borderRadius: 2, overflow: "hidden" }}>
      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: "#A7E399" }}>
            <TableRow>
              {["Name", "Age", "Gender", "Email", "Phone", "Profession", "Country", "State", "Hobby", "Instagram", "Action"].map((head, i) => (
                <TableCell key={i} sx={{ color: "#262626", fontWeight: "bold" }}>
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow key={user._id} hover>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell sx={{whiteSpace: 'nowrap'}}>{formatPhone(user.phone)}</TableCell>
                  <TableCell>{user.profession}</TableCell>
                  <TableCell>{user.country}</TableCell>
                  <TableCell>{user.state}</TableCell>
                  <TableCell>{user.hobby}</TableCell>
                  <TableCell>{user.instaId}</TableCell>
                  <TableCell>
                    <IconButton
                      color={user.isBlocked ? "error" : "success"}
                      onClick={() => onToggleBlock(user._id, user.isBlocked)}
                    >
                      {user.isBlocked ? <FaBan /> : <FaCheckCircle />}
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: "flex", justifyContent: "center", py: 1 }}>
        <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Box>
    </Paper>
  );
}
