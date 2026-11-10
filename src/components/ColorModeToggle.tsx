import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useColorScheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ColorModeToggle() {
  const { mode, systemMode, setMode } = useColorScheme();

  // Wait until the stored mode is known to avoid a wrong icon flash.
  if (!mode) return null;

  const resolved = mode === 'system' ? systemMode : mode;
  const isDark = resolved === 'dark';

  return (
    <Tooltip title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      <IconButton
        color="inherit"
        aria-label="Toggle light and dark mode"
        onClick={() => setMode(isDark ? 'light' : 'dark')}
        sx={{ '&:hover': { transform: 'rotate(40deg)', color: 'secondary.main' } }}
      >
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
