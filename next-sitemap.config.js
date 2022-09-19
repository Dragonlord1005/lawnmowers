/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'lawnmowers.vercel.app',
  generateRobotsTxt: true, // (optional)
  // ...other options
}