import Hero from '@/pages/Hero';
import Navbar from '@/components/Navbar';

const metadataParams = {
	title: 'My App',
	description: 'My simple Next App with Chakra.',
	images: ['/'],
	icons: {
		icon: '/',
		shortcut: '/',
		apple: '/'
	},
	siteName: 'MyApp',
	themeColor: '#FFFFFF',
	url: `/`,
	metabase: new URL(`https://my.app`),
	keywords: ['my app', 'best'],
	twitter: {
		card: 'summary',
		creator: '@',
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	manifest: '/manifest.json'
}

export const metadata = {
	title: metadataParams.title,
	description: metadataParams.description,
	metadataBase: metadataParams.metabase,
	icons: metadataParams.icons,
	openGraph: {
		title: metadataParams.title,
		description: metadataParams.description,
		url: metadataParams.url,
		siteName: metadataParams.siteName,
		images: metadataParams.images,
	},
	twitter: {
		title: metadataParams.title,
		description: metadataParams.description,
		creator: metadataParams.twitter.creator,
		card: metadataParams.twitter.card
	},
	manifest: metadataParams.manifest
}

export const viewport = {
	themeColor: metadataParams.themeColor
}

export default function HomePage() {
	return (
		<>
			<Navbar />
			<Hero />
		</>
	)
}
