import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/material/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useTypewriter } from '../hooks/useTypewriter';
import { glass, gradientText, monoFont } from '../theme';
import { profile } from '../data/profile';

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(-1.5deg); }
  50% { transform: translateY(-14px) rotate(0.5deg); }
`;
const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;
const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(198, 255, 61, 0.6); }
  100% { box-shadow: 0 0 0 10px rgba(198, 255, 61, 0); }
`;

// Syntax colors for the decorative code card.
const code = { key: 'secondary.main', str: 'accent.main', fn: 'primary.main', dim: 'text.secondary' };

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <Box id="top" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Chip
              icon={
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    ml: '10px !important',
                    borderRadius: '50%',
                    bgcolor: 'accent.main',
                    animation: `${pulse} 1.6s ease-out infinite`,
                  }}
                />
              }
              label="Available for new opportunities"
              variant="outlined"
              sx={{ ...glass, mb: 3 }}
            />

            <Typography variant="h1" sx={{ fontSize: { xs: '2.9rem', sm: '3.8rem', md: '4.8rem' }, lineHeight: 1.02 }}>
              Hi, I&apos;m{' '}
              <Box component="span" sx={gradientText}>
                {profile.name}
              </Box>
            </Typography>

            <Typography
              component="p"
              aria-label={profile.roles.join(', ')}
              sx={{
                fontFamily: monoFont,
                fontSize: { xs: '1.15rem', md: '1.5rem' },
                mt: 2.5,
                minHeight: '2.2em',
                color: 'text.secondary',
              }}
            >
              <Box component="span" sx={{ color: 'accent.main' }}>
                &gt;{' '}
              </Box>
              {typed}
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  width: '0.6ch',
                  height: '1.1em',
                  ml: 0.5,
                  verticalAlign: 'text-bottom',
                  bgcolor: 'secondary.main',
                  animation: `${blink} 1s step-end infinite`,
                }}
              />
            </Typography>

            <Typography sx={{ color: 'text.secondary', fontSize: '1.15rem', maxWidth: 560, mt: 1, mb: 4.5 }}>
              {profile.tagline}
            </Typography>

            <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', gap: 2 }}>
              <Button
                variant="gradient"
                size="large"
                href="#projects"
                endIcon={<ArrowOutwardIcon />}
                sx={{
                  '& .MuiButton-endIcon': { transition: 'transform 0.25s ease' },
                  '&:hover .MuiButton-endIcon': { transform: 'translate(3px, -3px)' },
                }}
              >
                See my work
              </Button>
              <Button variant="outlined" size="large" color="inherit" href="#contact">
                Get in touch
              </Button>
            </Stack>
          </Grid>

          {/* Decorative floating code card */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ position: 'relative' }}>
              <Paper
                elevation={0}
                sx={{
                  ...glass,
                  p: 3,
                  borderRadius: '24px',
                  fontFamily: monoFont,
                  fontSize: '0.92rem',
                  lineHeight: 1.9,
                  animation: `${float} 7s ease-in-out infinite`,
                  boxShadow: '0 30px 80px -30px rgba(124, 77, 255, 0.7)',
                }}
              >
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  {['#ff5f57', '#febc2e', '#28c840'].map((dot) => (
                    <Box key={dot} sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: dot }} />
                  ))}
                </Stack>
                <Box>
                  <Box component="span" sx={{ color: code.key }}>const</Box> developer = {'{'}
                </Box>
                <Box sx={{ pl: 3 }}>
                  name: <Box component="span" sx={{ color: code.str }}>&apos;{profile.name}&apos;</Box>,
                </Box>
                <Box sx={{ pl: 3 }}>
                  stack: [<Box component="span" sx={{ color: code.str }}>&apos;React&apos;, &apos;Node&apos;, &apos;SQL&apos;</Box>],
                </Box>
                <Box sx={{ pl: 3 }}>
                  also: [<Box component="span" sx={{ color: code.str }}>&apos;Java&apos;, &apos;Python&apos;</Box>],
                </Box>
                <Box sx={{ pl: 3 }}>
                  <Box component="span" sx={{ color: code.fn }}>ship</Box>: () =&gt;{' '}
                  <Box component="span" sx={{ color: code.str }}>&apos;on time&apos;</Box>,
                </Box>
                <Box>{'};'}</Box>
                <Box sx={{ color: code.dim, mt: 1 }}>{'// Ready to develop'}</Box>
              </Paper>

              <Chip
                icon={<AutoAwesomeIcon />}
                label="Built with MUI"
                color="accent"
                sx={{
                  position: 'absolute',
                  right: -12,
                  bottom: -18,
                  fontWeight: 600,
                  transform: 'rotate(6deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'rotate(-4deg) scale(1.1)' },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
