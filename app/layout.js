import './globals.css'

export const metadata = {
  title: 'NFT Airdrop Hunter - Latest NFT & Web3 Game Airdrops 2026',
  description: 'Discover the latest NFT marketplace airdrops and Web3 gaming rewards. Step-by-step guides for OpenSea, Blur, Magic Eden, Tensor and more.',
  keywords: 'NFT airdrop, free NFT, NFT marketplace, OpenSea airdrop, Blur airdrop, Magic Eden airdrop, Web3 game airdrop',
  authors: [{ name: 'NFT Airdrop Hunter Team' }],
  openGraph: {
    title: 'NFT Airdrop Hunter - Latest NFT Airdrops 2026',
    description: 'Find the best NFT marketplace and Web3 gaming airdrops with step-by-step guides',
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
      <body>{children}</body>
    </html>
  )
}
