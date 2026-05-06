/**
 * Next-sitemap configuration
 * Generates sitemap.xml and robots.txt for the site.
 */
module.exports = {
  siteUrl: 'https://myenum.in',
  generateRobotsTxt: true,
  // Optional: additional paths or exclude rules
  // exclude: ['/secret', '/admin'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [],
  },
};
