import { Lato } from "next/font/google";
import "./globals.css";
import './plugins.css';
import './style.css';
import Script from 'next/script';
import Header from './layouts/header';
import Footer from './layouts/footer';
import CustomFloatingWhatsapp from "./components/custom-floating-whatsapp";
import { LogoJsonLd, LocalBusinessJsonLd, SocialProfileJsonLd } from 'next-seo';

const lato = Lato({ 
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
	display: 'swap', 
});

export const metadata = {
	title: "Gadai BPKB Mobil & Motor | Pinjaman Cepat dari Adira",
	description: "Pinjaman cepat dengan gadai BPKB mobil & motor di Adira. Proses mudah, bunga kompetitif. Dapatkan dana tunai Anda hari ini! Hubungi kami sekarang.",
	icons: {
		icon: '/favicon.ico', // /public path
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		title: 'Gadai BPKB Mobil & Motor | Pinjaman Cepat dari Adira',
		description: 'Pinjaman cepat dengan gadai BPKB mobil & motor di Adira. Proses mudah, bunga kompetitif. Dapatkan dana tunai Anda hari ini! Hubungi kami sekarang.',
		url: process.env.APP_URL,
		siteName: 'Adiracabang.id',
		images: [
			{
				url: `${process.env.APP_URL}/img/logo.png`,
				width: 836,
				height: 231,
			},
		],
		locale: 'id_ID',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Gadai BPKB Mobil & Motor | Pinjaman Cepat dari Adira',
		description: 'Pinjaman cepat dengan gadai BPKB mobil & motor di Adira. Proses mudah, bunga kompetitif. Dapatkan dana tunai Anda hari ini! Hubungi kami sekarang.',
		creator: '@AdiraFinanceID',
		images: [
			`${process.env.APP_URL}/img/logo.png`
		],
	},
	alternates: {
		canonical: process.env.APP_URL,
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="id-ID" className={lato.className}>
			<head>
				<link rel="stylesheet" type="text/css" href="/css/unicons.css" />
				<link rel="stylesheet" href="/css/colors/navy.css" />

				<LogoJsonLd
					useAppDir={true}
					logo={`${process.env.APP_URL}/img/logo.png`}
					url={process.env.APP_URL}
				/>

				<LocalBusinessJsonLd
					useAppDir={true}
					type="LocalBusiness"
					name="Adira Cabang"
					description="Gadai BPKB mobil & motor di Adira dengan proses cepat, aman, dan mudah."
					url={process.env.APP_URL}
					telephone="+62895424249065"
					address={{
						streetAddress: 'Jl. Jend. Sudirman Kav. 25 Karet Setiabudi',
						addressLocality: 'Jakarta',
						addressRegion: 'DKI Jakarta',
						postalCode: '12940',
						addressCountry: 'ID',
					}}
					images={[
						`${process.env.APP_URL}/img/logo.png`,
					]}
				/>

				<SocialProfileJsonLd
					useAppDir={true}
					type="Person"
					name="Adiracabang.id"
					url={process.env.APP_URL}
					sameAs={[
						'https://www.facebook.com/adirafinanceid/',
						'https://www.instagram.com/adirafinanceid/?hl=en',
						'https://www.linkedin.com/company/adira/',
						'https://x.com/AdiraFinanceID',
						'https://www.tiktok.com/@adirafinanceid?lang=id-ID',
						'https://www.youtube.com/channel/UCu0ZMhNTndtyDEB63-LqwSg',
					]}
				/>
			</head>
			{/* <body className="!font-Manrope !text-[0.8rem] !font-medium !leading-[1.7] !text-[#60697b] bg-[#fefefe]"> */}
			
			<body className="!text-[0.8rem] !font-medium !leading-[1.7] !text-gray-700 bg-[#fefefe]">
				<div className="grow shrink-0">
					<Header />
					{children}
					<Footer />
				</div>

				<CustomFloatingWhatsapp />
			</body>

			<Script src="/js/plugins.js" />
			<Script src="/js/theme.js" />
		</html>
	);
}
