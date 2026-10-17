import Fab from '@mui/material/Fab';
import { waLink } from '@/lib/constants';

export default function WhatsAppButton() {
  return (
    <Fab
      variant="extended"
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      sx={{
        position: 'fixed', right: 16, bottom: 16, zIndex: 1200,
        bgcolor: '#25D366', color: '#fff', fontWeight: 600, textTransform: 'none',
        '&:hover': { bgcolor: '#1ebe5b' },
      }}
    >
      WhatsApp
    </Fab>
  );
}
