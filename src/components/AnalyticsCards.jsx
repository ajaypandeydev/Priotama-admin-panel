import { Grid, Card, CardContent, Typography } from "@mui/material";

export default function AnalyticsCards({ registered, blocked }) {
  const cards = [
    { title: "Total Registered Users", value: registered, color: "#198754" },
    { title: "Total Blocked Users", value: blocked, color: "#AF1763" },
  ];

  return (
    <Grid container spacing={3} sx={{ my: 3 }}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
          <Card
            sx={{
              backgroundColor: card.color,
              color: "#fff",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {card.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
