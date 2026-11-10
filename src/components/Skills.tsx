import { useState } from 'react';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Reveal from './Reveal';
import Section from './Section';
import { glass, gradients } from '../theme';
import { skills } from '../data/profile';

export default function Skills() {
  const [tab, setTab] = useState(0);
  const group = skills[tab] ?? skills[0];

  return (
    <Section
      id="skills"
      kicker="01 / Skills"
      title="What I"
      highlight="work with"
      subtitle="Pick a category to see the tools and technologies I have used professionally."
    >
      <Reveal>
        <Paper elevation={0} sx={{ ...glass, borderRadius: '28px', overflow: 'hidden' }}>
          <Tabs
            value={tab}
            onChange={(_event, next: number) => setTab(next)}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Skill categories"
            sx={{
              px: 2,
              borderBottom: 1,
              borderColor: 'divider',
              '& .MuiTabs-indicator': { height: 3, borderRadius: '14px', backgroundImage: gradients.brand },
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                minHeight: 60,
                transition: 'color 0.25s ease',
              },
            }}
          >
            {skills.map((g) => (
              <Tab key={g.category} label={g.category} />
            ))}
          </Tabs>

          {group && (
            <Stack
              key={group.category}
              direction="row"
              useFlexGap
              role="tabpanel"
              sx={{ flexWrap: 'wrap', gap: 1.25, p: { xs: 2.5, md: 4 } }}
            >
              {group.items.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  variant="outlined"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    py: 2.25,
                    transition: 'transform 0.25s ease, border-color 0.25s ease',
                    '&:hover': { transform: 'translateY(-3px)', borderColor: 'secondary.main' },
                  }}
                />
              ))}
            </Stack>
          )}
        </Paper>
      </Reveal>
    </Section>
  );
}
