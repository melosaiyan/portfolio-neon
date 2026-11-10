import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepContent from '@mui/material/StepContent';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import Reveal from './Reveal';
import Section from './Section';
import { glass, monoFont } from '../theme';
import { experience } from '../data/profile';

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <Section
      id="experience"
      kicker="03 / Experience"
      title="Where I have"
      highlight="been"
      subtitle="Click a role to expand it."
    >
      <Reveal>
        <Paper elevation={0} sx={{ ...glass, p: { xs: 2.5, md: 4 }, borderRadius: '28px' }}>
          <Stepper
            nonLinear
            activeStep={active}
            orientation="vertical"
            sx={{
              '& .MuiStepIcon-root': { fontSize: 30, transition: 'color 0.3s ease, transform 0.3s ease' },
              '& .MuiStepIcon-root.Mui-active': { color: 'secondary.main', transform: 'scale(1.15)' },
              '& .MuiStepLabel-label': { fontSize: '1.1rem', fontWeight: 600 },
              '& .MuiStepButton-root:hover .MuiStepIcon-root': { color: 'primary.main' },
            }}
          >
            {experience.map((job, index) => (
              <Step key={`${job.company}-${job.period}`}>
                <StepButton
                  onClick={() => setActive(index)}
                  optional={
                    <Typography variant="caption" sx={{ fontFamily: monoFont, color: 'text.secondary' }}>
                      {job.period}
                    </Typography>
                  }
                >
                  {job.role} · {job.company}
                </StepButton>
                <StepContent>
                  {job.points.map((point) => (
                    <Typography key={point} sx={{ color: 'text.secondary', py: 0.4 }}>
                      {point}
                    </Typography>
                  ))}
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </Reveal>
    </Section>
  );
}
