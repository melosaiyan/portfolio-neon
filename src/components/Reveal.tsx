import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { useInView } from '../hooks/useInView';

type RevealProps = {
  children: ReactNode;
  /** Delay in milliseconds, handy for staggering items in a grid. */
  delay?: number;
  fullHeight?: boolean;
};

/** Fades and slides its children in the first time they scroll into view. */
export default function Reveal({ children, delay = 0, fullHeight = false }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Box
      ref={ref}
      sx={{
        width: '100%',
        height: fullHeight ? '100%' : 'auto',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </Box>
  );
}
