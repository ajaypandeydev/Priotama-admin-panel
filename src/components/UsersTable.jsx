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
  Box
} from "@mui/material";
import { FaBan, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

export default function UsersTable({ data, onToggleBlock }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  if(!data.length){
    return <p style={{textAlign: 'center', padding: '20px'}}>Loading Users data.....</p>
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
              {["Name", "Age", "Gender", "Email", "Phone", "Location", "Action"].map((head, i) => (
                <TableCell key={i} sx={{ color: "#262626", fontWeight: "bold" }}>
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => (
                <TableRow key={index} hover>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.location}</TableCell>
                  <TableCell>
                    <IconButton
                      color={user.blocked ? "error" : "success"}
                      onClick={() => onToggleBlock(user.id)}
                    >
                      {user.blocked ? <FaBan /> : <FaCheckCircle />}
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
