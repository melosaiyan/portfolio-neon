import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Zoom from '@mui/material/Zoom';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { gradients } from '../theme';
import { profile } from '../data/profile';

const openExternal = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

const actions = [
  {
    name: 'Back to top',
    icon: <KeyboardArrowUpIcon />,
    run: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  },
  { name: 'GitHub', icon: <GitHubIcon />, run: () => openExternal(profile.github) },
  { name: 'LinkedIn', icon: <LinkedInIcon />, run: () => openExternal(profile.linkedin) },
  {
    name: 'Email',
    icon: <MailOutlineIcon />,
    run: () => {
      window.location.href = `mailto:${profile.email}`;
    },
  },
];

/** Speed dial in the corner that appears after the visitor scrolls down. */
export default function FloatingActions() {
  const visible = useScrollTrigger({ disableHysteresis: true, threshold: 300 });

  return (
    <Zoom in={visible}>
      <SpeedDial
        ariaLabel="Quick actions"
        icon={<SpeedDialIcon />}
        sx={{
          position: 'fixed',
          right: { xs: 16, md: 28 },
          bottom: { xs: 16, md: 28 },
          '& .MuiSpeedDial-fab': {
            color: '#fff',
            backgroundImage: gradients.brand,
            boxShadow: '0 12px 30px -8px rgba(255, 77, 141, 0.7)',
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={action.run} />
        ))}
      </SpeedDial>
    </Zoom>
  );
}
