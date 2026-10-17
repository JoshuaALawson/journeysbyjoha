export const BRAND = {
  name: 'Journeys by Joha',
  tagline: 'Viajes diseñados a tu medida',
  description:
    'Diseñamos viajes personalizados desde Panamá hacia el mundo, con cercanía y atención a cada detalle.',
  whatsapp: '50767086838',
  whatsappDisplay: '+507 6708 6838',
  instagram: '', // Pega aquí tu enlace de Instagram. Si queda vacío, no se muestra.
  url: 'https://tu-dominio.com', // Cámbialo por tu dominio o por el de Vercel.
};

export const waLink = (msg = 'Hola, Joha. Quiero planear un viaje.') =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`;
