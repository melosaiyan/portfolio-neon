import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { gradients } from '../theme';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 4 }}>
      <Box sx={{ height: 2, backgroundImage: gradients.brand, opacity: 0.7 }} />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
          © {new Date().getFullYear()} {profile.name}. Built with React and Material UI.
        </Typography>
      </Container>
    </Box>
  );
}
