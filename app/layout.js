import './globals.css'

export const metadata = {
  title: 'NFT Airdrop Hunter - Latest NFT Airdrops 2026',
  description: 'Discover and track the latest NFT airdrops and marketplace rewards. Detailed guides, official links, and step-by-step tutorials.',
  keywords: 'NFT airdrop, free NFT, NFT rewards, Blur airdrop, Magic Eden, Pudgy Penguins, NFT marketplace rewards',
  authors: [{ name: 'NFT Airdrop Hunter Team' }],
  openGraph: {
    title: 'NFT Airdrop Hunter - Latest NFT Airdrops 2026',
    description: 'Find the best NFT airdrops with step-by-step guides',
    url: 'https://nft-airdrop-hunter.vercel.app',
    siteName: 'NFT Airdrop Hunter',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NFT Airdrop Hunter - Latest NFT Airdrops',
    description: 'Discover and track the latest NFT airdrops',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console - 待 NFT 站申请后填入新验证码 */}
        {/* Google AdSense - 待审核通过后取消注释并填入你的发布商ID */}
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script> */}
      </head>
      <body>{children}</body>
    </html>
  )
}
