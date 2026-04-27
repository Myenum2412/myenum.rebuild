import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://myenum.in';
  
  // Define all static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/product',
    '/contact',
    '/partnership',
    '/features',
    '/privacy',
    '/terms',
    '/tamil-nadu',
    '/kerala',
    '/karnataka',
    '/uk',
    '/germany',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
