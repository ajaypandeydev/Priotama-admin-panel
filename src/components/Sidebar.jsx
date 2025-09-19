
import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Divider, List, ListItemButton, ListItemIcon, ListItemText, Button, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AiOutlineAreaChart, AiOutlineUser } from 'react-icons/ai';

const SidebarPaper = styled(Paper)(() => ({
  width: 80,
  borderRadius: 16,
  padding: '12px 8px',
  background: 'rgba(255,255,255,0.6)',
  boxShadow: '0 6px 18px rgba(15,23,42,0.06)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
}));

export default function Sidebar({ active, onChange }) {
  const items = [
    { id: 'analytics', label: 'Analytics', icon: <AiOutlineAreaChart size={20} /> },
    { id: 'users', label: 'User Data', icon: <AiOutlineUser size={20} /> },
  ];

  return (
    <SidebarPaper>
      <Avatar sx={{ bgcolor: 'transparent', width: 48, height: 48, mb: 1 }} alt="logo">💘</Avatar>
      <Divider sx={{ width: '100%', opacity: 0.12 }} />

      <List sx={{ width: '100%', p: 0 }}>
        {items.map((it) => (
          <ListItemButton
            key={it.id}
            selected={active === it.id}
            onClick={() => onChange(it.id)}
            sx={{ display: 'flex', flexDirection: 'column', py: 1.2, borderRadius: 2 }}
          >
            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', color: active === it.id ? '#F75270' : '#262626' }}>
              {it.icon}
            </ListItemIcon>
            <ListItemText
              primary={it.label}
              primaryTypographyProps={{
                fontSize: 11,
                textAlign: 'center',
                color: active === it.id ? '#F75270' : '#262626',
              }}
            />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ flex: 1 }} />
      <Button
        variant="contained"
        sx={{ width: '100%', borderRadius: 2, textTransform: 'none', bgcolor: '#8CCDED', color: '#262626' }}
      >
        Invite
      </Button>
    </SidebarPaper>
  );
}

Sidebar.propTypes = {
  active: PropTypes.string,
  onChange: PropTypes.func,
};
