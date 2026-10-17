import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FORMS } from '@/lib/forms';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return FORMS.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const form = FORMS.find((f) => f.slug === params.slug);
  return { title: form ? `${form.title} · Journeys by Joha` : 'Formulario' };
}

export default function FormPage({ params }: Props) {
  const form = FORMS.find((f) => f.slug === params.slug);
  if (!form) notFound();
  const pending = form.embedUrl.includes('PEGA_AQUI');

  return (
    <Container maxWidth="md" sx={{ py: { xs: 3, md: 5 } }}>
      <Button href="/#formularios" size="small" sx={{ mb: 2 }}>← Volver</Button>
      <Typography variant="h1" color="primary" sx={{ fontSize: { xs: 28, md: 38 } }}>{form.title}</Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb: 3 }}>{form.description}</Typography>
      {pending ? (
        <Alert severity="warning">Falta pegar el enlace de este formulario en lib/forms.ts.</Alert>
      ) : (
        <>
          <Box
            component="iframe"
            src={form.embedUrl}
            title={form.title}
            sx={{ width: '100%', height: { xs: 1700, md: 1300 }, border: 0, borderRadius: 2, bgcolor: 'background.paper' }}
          />
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Button href={form.embedUrl.replace('?embedded=true', '')} target="_blank" rel="noopener noreferrer" size="small">
              ¿No carga? Ábrelo en una pestaña nueva
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}
