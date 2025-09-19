import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { FaUsers } from 'react-icons/fa';
import { FiUserCheck } from 'react-icons/fi';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const tinyLine = [{ v: 10 }, { v: 12 }, { v: 9 }, { v: 14 }, { v: 18 }, { v: 16 }, { v: 20 }];
const tinyBar = [{ v: 5 }, { v: 8 }, { v: 6 }, { v: 10 }, { v: 12 }, { v: 9 }, { v: 14 }];
const pieData = [
  { name: 'happy', value: 400 },
  { name: 'meh', value: 300 },
  { name: 'reported', value: 100 },
];
const PIE_COLORS = ['#8CCDED', '#FAA4BD', '#FFF3C7'];

function StatCard({ title, value, icon, chart }) {
  return (
    <Card elevation={3} sx={{ borderRadius: 16 }}>
      <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Box sx={{
          width: 60, height: 60, display: 'flex', alignItems: 'center',
          justifyContent: 'center', borderRadius: 2,
          background: 'linear-gradient(250deg, rgba(179,229,252,1) 0%, rgba(200,230,201,1) 100%)'
        }}>
          {icon}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" sx={{ color: '#F75270', fontWeight: 700 }}>{title}</Typography>
          <Typography variant="h5" sx={{ color: '#262626', fontWeight: 800 }}>{value}</Typography>
        </Box>
        <Box sx={{ width: 140, height: 60 }}>{chart}</Box>
      </CardContent>
    </Card>
  );
}
StatCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.node,
  chart: PropTypes.node,
};

export default function Analytics() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <StatCard
            title="Total Users"
            value={12458}
            icon={<FaUsers size={22} />}
            chart={<ResponsiveContainer width="100%" height={60}>
              <LineChart data={tinyLine}>
                <Line type="monotone" dataKey="v" stroke="#F75270" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatCard
            title="Active Users"
            value={3289}
            icon={<FiUserCheck size={22} />}
            chart={<ResponsiveContainer width="100%" height={60}>
              <BarChart data={tinyBar}><Bar dataKey="v" radius={[6, 6, 6, 6]} /></BarChart>
            </ResponsiveContainer>}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatCard
            title="Matches Made"
            value={842}
            icon={<AiOutlineAreaChart size={22} />}
            chart={<ResponsiveContainer width="100%" height={60}>
              <LineChart data={tinyLine}>
                <Line type="monotone" dataKey="v" stroke="#8CCDED" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatCard
            title="Reported Profiles"
            value={48}
            icon={<RiErrorWarningLine size={22} />}
            chart={<ResponsiveContainer width="100%" height={60}>
              <PieChart>
                <Pie data={pieData} dataKey="value" innerRadius={16} outerRadius={28}>
                  {pieData.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={PIE_COLORS[idx % PIE_COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>}
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Card sx={{ borderRadius: 16 }} elevation={3}>
          <CardContent>
            <Typography variant="h6" sx={{ color: '#262626', fontWeight: 700 }}>Insights</Typography>
            <Typography variant="body2" sx={{ color: '#FAA4BD', mt: 1 }}>
              Recent growth is driven by improved onboarding flows and targeted promotions;
              matches per active user improved by 12% month-over-month.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
