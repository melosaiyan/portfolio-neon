import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ColorModeToggle from './ColorModeToggle';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { gradients, monoFont } from '../theme';
import { profile } from '../data/profile';

const navItems = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 });
  const progress = useScrollProgress();

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: 'blur(14px) saturate(140%)',
        WebkitBackdropFilter: 'blur(14px) saturate(140%)',
        backgroundColor: scrolled
          ? 'color-mix(in srgb, var(--mui-palette-background-default) 72%, transparent)'
          : 'transparent',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'divider' : 'transparent',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 1 }}>
          {/* Monogram logo: spins its gradient border on hover */}
          <Link href="#top" underline="none" aria-label="Back to top" sx={{ flexGrow: 1, display: 'flex' }}>
            <Box
              sx={{
                display: 'grid',
                placeItems: 'center',
                width: 42,
                height: 42,
                borderRadius: '12px',
                backgroundImage: gradients.brand,
                color: '#fff',
                fontFamily: monoFont,
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'transform 0.4s ease, border-radius 0.4s ease',
                '&:hover': { transform: 'rotate(-8deg) scale(1.08)', borderRadius: '50%' },
              }}
            >
              {profile.initials}
            </Box>
          </Link>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                color="inherit"
                sx={{
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 14,
                    right: 14,
                    bottom: 6,
                    height: 2,
                    borderRadius: '12px',
                    backgroundImage: gradients.brand,
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover': { backgroundColor: 'transparent' },
                  '&:hover::after': { transform: 'scaleX(1)' },
                }}
              >
                {item.label}
              </Button>
            ))}
            <ColorModeToggle />
            <Button variant="gradient" href="#contact" sx={{ ml: 1 }}>
              Hire me
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <ColorModeToggle />
            <IconButton color="inherit" aria-label="Open navigation menu" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Scroll progress bar */}
      <LinearProgress
        variant="determinate"
        value={progress}
        aria-label="Page scroll progress"
        sx={{
          height: 3,
          backgroundColor: 'transparent',
          '& .MuiLinearProgress-bar': { backgroundImage: gradients.brand, transition: 'none' },
        }}
      />

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, p: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton aria-label="Close navigation menu" onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {[...navItems, { label: 'Contact', href: '#contact' }].map((item) => (
              <ListItemButton
                key={item.href}
                component="a"
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                sx={{ borderRadius: '12px' }}
              >
                <ListItemText primary={item.label} slotProps={{ primary: { variant: 'h6' } }} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
