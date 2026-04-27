import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MyEnum Agency',
    short_name: 'MyEnum',
    description: 'Best Software Development Company India & Global',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/iconc.webp',
        sizes: 'any',
        type: 'image/webp',
      },
    ],
  };
}
