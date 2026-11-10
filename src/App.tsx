import Box from '@mui/material/Box';
import AuroraBackground from './components/AuroraBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <Box
      sx={{
        position: 'relative',
        isolation: 'isolate',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'clip',
      }}
    >
      <AuroraBackground />
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Box>
      <Footer />
      <FloatingActions />
    </Box>
  );
}
