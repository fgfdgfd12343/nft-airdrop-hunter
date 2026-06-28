export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://nft-airdrop-hunter.vercel.app/sitemap.xml',
  };
}
