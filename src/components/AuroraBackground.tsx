import Box from '@mui/material/Box';
import { keyframes } from '@mui/material/styles';

const driftA = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(12vw, 8vh, 0) scale(1.2); }
`;
const driftB = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1.1); }
  50% { transform: translate3d(-10vw, -6vh, 0) scale(0.9); }
`;

const blob = {
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(90px)',
  willChange: 'transform',
} as const;

/** Slow-moving blurred color blobs plus a faint grid, fixed behind the page. */
export default function AuroraBackground() {
  return (
    <Box
      aria-hidden
      sx={(theme) => ({
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
        opacity: 0.3,
        ...theme.applyStyles('dark', { opacity: 0.5 }),
      })}
    >
      <Box
        sx={{
          ...blob,
          top: '-15%',
          left: '-10%',
          width: '55vw',
          height: '55vw',
          background: '#7c4dff',
          animation: `${driftA} 22s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          ...blob,
          top: '20%',
          right: '-15%',
          width: '45vw',
          height: '45vw',
          background: '#ff4d8d',
          animation: `${driftB} 26s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          ...blob,
          bottom: '-25%',
          left: '25%',
          width: '40vw',
          height: '40vw',
          background: '#22d3ee',
          opacity: 0.6,
          animation: `${driftA} 30s ease-in-out infinite reverse`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(var(--mui-palette-divider) 1px, transparent 1px), linear-gradient(90deg, var(--mui-palette-divider) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at 50% 0%, #000 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, #000 0%, transparent 70%)',
        }}
      />
    </Box>
  );
}
