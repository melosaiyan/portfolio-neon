import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import { glass, gradientText } from '../theme';
import { stats, type Stat } from '../data/profile';

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const value = useCountUp(stat.value, start);

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 1,
        transition: 'transform 0.3s ease',
        '&:hover': { transform: 'translateY(-6px) scale(1.04)' },
      }}
    >
      <Typography variant="h3" component="p" sx={{ ...gradientText, fontSize: { xs: '2.2rem', md: '3rem' } }}>
        {value}
        {stat.suffix}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {stat.label}
      </Typography>
    </Box>
  );
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <Container maxWidth="lg">
      <Paper ref={ref} elevation={0} sx={{ ...glass, p: { xs: 3, md: 4 }, borderRadius: '28px' }}>
        <Grid container spacing={3}>
          {stats.map((stat) => (
            <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
              <StatItem stat={stat} start={inView} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
