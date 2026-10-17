export interface FormEntry {
  slug: string; // Va en la dirección: /formularios/<slug>
  title: string;
  description: string;
  embedUrl: string; // En Google Forms: Enviar → pestaña "<>" → copia el src del iframe
  minutes: number;
}

// Para agregar un formulario nuevo, copia un bloque y cambia sus datos.
export const FORMS: FormEntry[] = [
  {
    slug: 'cuentanos-tu-viaje',
    title: 'Cuéntanos tu viaje',
    description:
      'Dinos a dónde sueñas ir, cuándo y con quién, y diseñamos una propuesta a tu medida.',
    embedUrl: 'https://docs.google.com/forms/d/e/PEGA_AQUI_EL_ID/viewform?embedded=true',
    minutes: 5,
  },
];
