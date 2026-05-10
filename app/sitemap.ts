import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://myenum.in';
  
  // Define all static routes
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/product', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/features', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/testimonials', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/partnership', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/tamil-nadu', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/kerala', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/karnataka', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/uk', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/germany', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/careers', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/undermaintenance', priority: 0.1, changeFrequency: 'yearly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
