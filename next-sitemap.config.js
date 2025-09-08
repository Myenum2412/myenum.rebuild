/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.myenum.in',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  extraPaths: async () => [
    '/about',
    '/services',
    '/contact',
    '/blog',
  ],
};
