import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import Reveal from './Reveal';
import Section from './Section';
import { glass, monoFont } from '../theme';
import { profile } from '../data/profile';

const socialHover = {
  border: '1px solid',
  borderColor: 'divider',
  '&:hover': {
    color: '#fff',
    bgcolor: 'secondary.main',
    borderColor: 'secondary.main',
    transform: 'translateY(-4px) rotate(-6deg)',
  },
} as const;

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [toast, setToast] = useState<{ text: string; ok: boolean } | null>(null);
  const [toastOpen, setToastOpen] = useState(false);

  const showToast = (text: string, ok: boolean) => {
    setToast({ text, ok });
    setToastOpen(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      showToast('Email copied to clipboard', true);
    } catch {
      showToast('Could not copy. The address is ' + profile.email, false);
    }
  };

  // No backend: the form opens the visitor's email app with the message filled in.
  // Swap this for Formspree or Web3Forms if you want messages delivered directly.
  const sendMessage = () => {
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" kicker="04 / Contact" title="Let's build" highlight="something">
      <Reveal>
        <Paper elevation={0} sx={{ ...glass, p: { xs: 3, md: 5 }, borderRadius: '28px' }}>
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', mb: 3 }}>
                I&apos;m open to new roles and interesting projects. Email is the fastest way to reach me.
              </Typography>

              <Tooltip title="Click to copy">
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={copyEmail}
                  endIcon={<ContentCopyIcon />}
                  sx={{ fontFamily: monoFont, maxWidth: '100%', overflowWrap: 'anywhere' }}
                >
                  {profile.email}
                </Button>
              </Tooltip>

              <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
                <Tooltip title="GitHub">
                  <IconButton
                    aria-label="GitHub"
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={socialHover}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <IconButton
                    aria-label="LinkedIn"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={socialHover}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Tooltip>
              </Stack>

              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
                Based in {profile.location}
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  sendMessage();
                }}
              >
                <Stack spacing={2.5}>
                  <TextField
                    label="Your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                    fullWidth
                    multiline
                    minRows={4}
                  />
                  <Box>
                    <Button
                      type="submit"
                      variant="gradient"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        '& .MuiButton-endIcon': { transition: 'transform 0.3s ease' },
                        '&:hover .MuiButton-endIcon': { transform: 'translateX(5px) rotate(-20deg)' },
                      }}
                    >
                      Send message
                    </Button>
                  </Box>
                </Stack>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Reveal>

      <Snackbar
        open={toastOpen}
        autoHideDuration={3500}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={toast?.ok === false ? 'warning' : 'success'} variant="filled" onClose={() => setToastOpen(false)}>
          {toast?.text}
        </Alert>
      </Snackbar>
    </Section>
  );
}
