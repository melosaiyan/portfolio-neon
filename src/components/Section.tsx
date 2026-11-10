import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Reveal from './Reveal';
import { gradientText } from '../theme';

type SectionProps = {
  id: string;
  kicker: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ id, kicker, title, highlight, subtitle, children }: SectionProps) {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: '72px' }}>
      <Container maxWidth="lg">
        <Reveal>
          <Typography variant="overline" sx={{ color: 'accent.main' }}>
            {kicker}
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.1rem', md: '3rem' }, mt: 0.5, mb: subtitle ? 1.5 : 5 }}>
            {title}{' '}
            {highlight && (
              <Box component="span" sx={gradientText}>
                {highlight}
              </Box>
            )}
          </Typography>
          {subtitle && (
            <Typography sx={{ color: 'text.secondary', mb: 5, maxWidth: 640, fontSize: '1.05rem' }}>
              {subtitle}
            </Typography>
          )}
        </Reveal>
        {children}
      </Container>
    </Box>
  );
}
