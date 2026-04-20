/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://myenum.in',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  extraPaths: async () => [
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
  ],
};
