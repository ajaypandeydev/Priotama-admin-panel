import { Grid, Card, CardContent, Typography, Box, Grow, Button } from "@mui/material";
import { FaUsers, FaUserSlash, FaFileCsv } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function AnalyticsCards({ registered, blocked, users }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  // Handle CSV download
  const handleDownloadCSV = () => {
    const rows = [
      ["Name", "Age","Gender", "Email", "Phone", "Profession", "Country", "State", "Hobby", "Instagram", "Action"],
      ...users.map(user => [
        user.name, 
        user.age,
        user.gender,
        user.email,
        user.phone,
        user.profession,
        user.country,
        user.state,
        user.hobby,
        user.instaId,
        user.isBlocked,
      ])
    ];

    const csvContent = rows.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "analytics.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cards = [
    {
      title: "Total Registered Users",
      value: registered,
      color: "linear-gradient(135deg, #6A82FB, #8E9FE6)",
      icon: <FaUsers size={40} />,
    },
    {
      title: "Total Blocked Users",
      value: blocked,
      color: "linear-gradient(135deg, #FF6CAB, #C562AF)",
      icon: <FaUserSlash size={40} />,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        gap: 2,
        my: 3,
      }}
    >
      {/* Left side: Cards */}
      <Grid container spacing={2} sx={{ flex: 1 }}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Grow in={checked} style={{ transformOrigin: "0 0 0" }} timeout={600 + index * 300}>
              <Card
                sx={{
                  background: card.color,
                  color: "#fff",
                  borderRadius: 3,
                  boxShadow: 6,
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.03)",
                    boxShadow: 10,
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Box>
                      <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                        {card.title}
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        {card.value}
                      </Typography>
                    </Box>
                    <Box sx={{ fontSize: 40, opacity: 0.8 }}>{card.icon}</Box>
                  </Box>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>

      {/* Right side: Export Button */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="contained"
          color="success"
          startIcon={<FaFileCsv />}
          onClick={handleDownloadCSV}
          sx={{ height: "fit-content", whiteSpace: "nowrap" }}
        >
          Export CSV
        </Button>
      </Box>
    </Box>
  );
}
