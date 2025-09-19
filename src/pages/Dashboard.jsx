import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Analytics from '../components/Analytics';
import UsersTable from '../components/UsersTable';

const theme = createTheme({
  palette: {
    primary: { main: '#8CCDED' },
    background: {
      default: 'linear-gradient(to right, #ffe4ec, #e1f5ff)',
      paper: '#F2F9FF',
    },
    heading: { main: '#F75270' },
    text: { primary: '#262626', secondary: '#FAA4BD' },
  },
  typography: {
    fontFamily: "Inter, Roboto, 'Helvetica Neue', Arial",
    h5: { fontWeight: 700, color: '#262626' },
    body1: { color: '#262626' },
    subtitle1: { color: '#FAA4BD' },
  },
});

const PageWrapper = styled(Box)(() => ({
  minHeight: '100vh',
  display: 'flex',
  background: 'linear-gradient(to right, #ffe4ec, #e1f5ff)',
  padding: 24,
  gap: 24,
}));

const MainContent = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
}));

export default function Dashboard() {
  const [active, setActive] = React.useState('analytics');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageWrapper>
        <Sidebar active={active} onChange={setActive} />
        <MainContent>
          <Navbar />
          <Box sx={{ flex: 1 }}>
            {active === 'analytics' ? <Analytics /> : <UsersTable />}
          </Box>
        </MainContent>
      </PageWrapper>
    </ThemeProvider>
  );
}
