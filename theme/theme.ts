import { createTheme } from '@mui/material/styles';

const serif = 'Georgia, "Times New Roman", serif';

export const theme = createTheme({
  palette: {
    primary: { main: '#1e6b54' },
    secondary: { main: '#d9a93c' },
    info: { main: '#c8794a' },
    background: { default: '#f7f6f1', paper: '#fdfcf9' },
    text: { primary: '#2b2a26', secondary: '#6f6a5e' },
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    h1: { fontFamily: serif, fontWeight: 600 },
    h2: { fontFamily: serif, fontWeight: 600 },
    h3: { fontFamily: serif, fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: 'none', fontWeight: 600, borderRadius: 12 } } },
  },
});
