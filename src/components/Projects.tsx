import { useRef, useState, type MouseEvent, type ReactNode } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ApiIcon from '@mui/icons-material/Api';
import BoltIcon from '@mui/icons-material/Bolt';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
import Reveal from './Reveal';
import Section from './Section';
import { glass, gradients } from '../theme';
import { projects, type Project, type ProjectCategory, type ProjectIcon } from '../data/profile';

const icons: Record<ProjectIcon, ReactNode> = {
  web: <WebIcon fontSize="inherit" />,
  api: <ApiIcon fontSize="inherit" />,
  data: <StorageIcon fontSize="inherit" />,
  terminal: <TerminalIcon fontSize="inherit" />,
};

const banners: Record<ProjectCategory, string> = {
  'Full stack': gradients.brand,
  Backend: gradients.cool,
  Frontend: gradients.lime,
};

type Filter = 'All' | ProjectCategory;
const filters: Filter[] = ['All', 'Frontend', 'Backend', 'Full stack'];

/**
 * Card that tilts in 3D toward the cursor and shows a glow that follows it.
 * Mouse position is written to CSS variables, so moving the mouse never re-renders React.
 */
function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    el.style.setProperty('--ry', `${(x - 0.5) * 12}deg`);
    el.style.setProperty('--rx', `${(0.5 - y) * 12}deg`);
    el.style.setProperty('--mx', `${x * 100}%`);
    el.style.setProperty('--my', `${y * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
  };

  return (
    <Box sx={{ perspective: '1000px', height: '100%' }}>
      <Card
        ref={ref}
        elevation={0}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        sx={{
          ...glass,
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '28px',
          transform: 'rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))',
          transition: 'transform 0.18s ease-out, box-shadow 0.3s ease, border-color 0.3s ease',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(255, 92, 154, 0.22), transparent 60%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
          },
          '&:hover': {
            borderColor: 'secondary.main',
            boxShadow: '0 30px 60px -30px rgba(124, 77, 255, 0.75)',
          },
          '&:hover::before': { opacity: 1 },
          '&:hover .project-icon': { transform: 'scale(1.25) rotate(-8deg)' },
        }}
      >
        {children}
      </Card>
    </Box>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const visible = projects.filter((p) => filter === 'All' || p.category === filter);

  const openProject = (project: Project) => {
    setSelected(project);
    setDialogOpen(true);
  };

  return (
    <Section
      id="projects"
      kicker="02 / Projects"
      title="Things I have"
      highlight="built"
      subtitle="Hover a card to tilt it, click it for the full story."
    >
      <Reveal>
        <ToggleButtonGroup
          exclusive
          value={filter}
          onChange={(_event, next: Filter | null) => {
            if (next) setFilter(next);
          }}
          aria-label="Filter projects by category"
          sx={{
            ...glass,
            mb: 4,
            p: 0.5,
            gap: 0.5,
            borderRadius: '999px',
            flexWrap: 'wrap',
            '& .MuiToggleButton-root': {
              border: 0,
              borderRadius: '999px !important',
              px: 2.5,
              py: 0.75,
              textTransform: 'none',
              fontWeight: 600,
              transition: 'color 0.25s ease, background-color 0.25s ease',
            },
            '& .MuiToggleButton-root.Mui-selected, & .MuiToggleButton-root.Mui-selected:hover': {
              color: '#fff',
              backgroundImage: gradients.brand,
            },
          }}
        >
          {filters.map((f) => (
            <ToggleButton key={f} value={f}>
              {f}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Reveal>

      <Grid container spacing={3}>
        {visible.map((project, i) => (
          <Grid key={project.title} size={{ xs: 12, sm: 6 }}>
            <Reveal delay={i * 90} fullHeight>
              <TiltCard>
                <CardActionArea
                  onClick={() => openProject(project)}
                  aria-label={`Open details for ${project.title}`}
                  sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                >
                  <Box
                    sx={{
                      height: 140,
                      display: 'grid',
                      placeItems: 'center',
                      backgroundImage: banners[project.category],
                      color: 'rgba(255,255,255,0.95)',
                      fontSize: 64,
                    }}
                  >
                    <Box
                      className="project-icon"
                      sx={{ display: 'flex', transition: 'transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1)' }}
                    >
                      {icons[project.icon]}
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="overline" sx={{ color: 'accent.main' }}>
                      {project.category}
                    </Typography>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 2 }}>{project.summary}</Typography>
                    <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', gap: 0.75 }}>
                      {project.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" variant="outlined" />
                      ))}
                    </Stack>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ px: 2, pb: 2, position: 'relative' }}>
                  <Button size="small" onClick={() => openProject(project)}>
                    Details
                  </Button>
                  <Box sx={{ flexGrow: 1 }} />
                  {project.repoUrl && (
                    <Tooltip title="View source">
                      <IconButton
                        aria-label={`${project.title} source code`}
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ '&:hover': { color: 'secondary.main', transform: 'translateY(-3px)' } }}
                      >
                        <CodeIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  {project.liveUrl && (
                    <Tooltip title="Open live demo">
                      <IconButton
                        aria-label={`${project.title} live demo`}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ '&:hover': { color: 'secondary.main', transform: 'translateY(-3px)' } }}
                      >
                        <OpenInNewIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </CardActions>
              </TiltCard>
            </Reveal>
          </Grid>
        ))}
      </Grid>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth maxWidth="sm">
        {selected && (
          <>
            <Box sx={{ height: 8, backgroundImage: banners[selected.category] }} />
            <DialogTitle sx={{ pr: 7 }}>
              {selected.title}
              <IconButton
                aria-label="Close"
                onClick={() => setDialogOpen(false)}
                sx={{ position: 'absolute', right: 12, top: 18 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Typography sx={{ color: 'text.secondary' }}>{selected.details}</Typography>
              <List dense sx={{ my: 1 }}>
                {selected.highlights.map((item) => (
                  <ListItem key={item} disableGutters>
                    <ListItemIcon sx={{ minWidth: 34, color: 'accent.main' }}>
                      <BoltIcon />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
              <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', gap: 0.75 }}>
                {selected.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" color="primary" variant="outlined" />
                ))}
              </Stack>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 3 }}>
              {selected.repoUrl && (
                <Button
                  variant="outlined"
                  color="inherit"
                  startIcon={<CodeIcon />}
                  href={selected.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </Button>
              )}
              {selected.liveUrl && (
                <Button
                  variant="gradient"
                  endIcon={<OpenInNewIcon />}
                  href={selected.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo
                </Button>
              )}
            </DialogActions>
          </>
        )}
      </Dialog>
    </Section>
  );
}
