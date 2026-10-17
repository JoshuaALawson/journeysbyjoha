import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BRAND, waLink } from '@/lib/constants';
import { FORMS } from '@/lib/forms';

const STEPS = [
  { n: '1', t: 'Cuéntanos tu viaje', d: 'Llena un formulario corto con tus ideas, fechas y presupuesto.' },
  { n: '2', t: 'Diseñamos tu propuesta', d: 'Armamos opciones a tu medida, con atención a cada detalle.' },
  { n: '3', t: 'Reserva y viaja tranquilo', d: 'Te acompañamos antes, durante y después de tu viaje.' },
];

export default function Home() {
  return (
    <main>
      <Container maxWidth="md" sx={{ textAlign: 'center', pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 7 } }}>
        <Box component="img" src="/logo.webp" alt={BRAND.name} sx={{ width: { xs: 150, md: 190 }, height: 'auto', mb: 2 }} />
        <Typography variant="h1" color="primary" sx={{ fontSize: { xs: 32, md: 46 }, lineHeight: 1.15 }}>
          Tu próximo viaje, diseñado a tu medida
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2, mx: 'auto', maxWidth: 560, fontSize: { xs: 16, md: 18 } }}>
          {BRAND.description}
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="center" sx={{ mt: 3.5 }}>
          <Button variant="contained" size="large" href="#formularios">Empieza tu viaje</Button>
          <Button variant="outlined" size="large" href={waLink()} target="_blank" rel="noopener noreferrer">
            Escríbenos por WhatsApp
          </Button>
        </Stack>
      </Container>

      <Box sx={{ bgcolor: 'background.paper', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" color="primary" textAlign="center" sx={{ fontSize: { xs: 26, md: 34 }, mb: 4 }}>
            Cómo funciona
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            {STEPS.map((s) => (
              <Box key={s.n} sx={{ flex: 1, textAlign: 'center' }}>
                <Box sx={{ width: 44, height: 44, mx: 'auto', mb: 1.5, borderRadius: '50%', bgcolor: 'secondary.main', color: '#2b2a26', display: 'grid', placeItems: 'center', fontWeight: 700 }}>
                  {s.n}
                </Box>
                <Typography variant="h3" sx={{ fontSize: 20, mb: 0.5 }}>{s.t}</Typography>
                <Typography color="text.secondary">{s.d}</Typography>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      <Container id="formularios" maxWidth="md" sx={{ py: { xs: 5, md: 7 }, scrollMarginTop: 16 }}>
        <Typography variant="h2" color="primary" textAlign="center" sx={{ fontSize: { xs: 26, md: 34 }, mb: 1 }}>
          Formularios
        </Typography>
        <Typography color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
          Elige el que necesites y llénalo sin salir de esta página.
        </Typography>
        <Stack spacing={2}>
          {FORMS.map((f) => (
            <Card key={f.slug} variant="outlined" sx={{ borderColor: 'divider' }}>
              <CardContent sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: { sm: 'center' }, justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h3" sx={{ fontSize: 22 }}>{f.title}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 0.5 }}>{f.description}</Typography>
                  <Typography variant="caption" color="info.main">Toma unos {f.minutes} minutos</Typography>
                </Box>
                <Button variant="contained" href={`/formularios/${f.slug}`} sx={{ flexShrink: 0 }}>
                  Completar formulario
                </Button>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>

      <Box component="footer" sx={{ textAlign: 'center', py: 4, pb: 10, color: 'text.secondary' }}>
        <Typography variant="body2">
          Con cariño, {BRAND.name} · {BRAND.whatsappDisplay}
        </Typography>
        {BRAND.instagram && (
          <Button href={BRAND.instagram} target="_blank" rel="noopener noreferrer" size="small" sx={{ mt: 1 }}>
            Instagram
          </Button>
        )}
      </Box>
    </main>
  );
}
