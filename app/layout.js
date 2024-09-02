import { Lato } from "next/font/google";
import "./globals.css";
import './plugins.css';
import './style.css';
import '../public/css/dm.css';
import Script from 'next/script';
import Header from './components/header';
import Footer from './components/footer';
import CustomFloatingWhatsapp from "./components/custom-floating-whatsapp";
import { LogoJsonLd, LocalBusinessJsonLd, SocialProfileJsonLd } from 'next-seo';

const lato = Lato({ 
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
	display: 'swap', 
});

export const metadata = {
	title: "Gadai BPKB Mobil & Motor Mudah di Adira | Adiracabang.id",
	description: "Gadai BPKB mobil & motor di Adira dengan proses cepat, aman, dan mudah. Dapatkan dana tunai tanpa ribet di Adiracabang.id.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="id-ID" className={lato.className}>
			<head>
				<link rel="stylesheet" type="text/css" href="/css/unicons.css" />
				<link rel="stylesheet" href="/css/colors/navy.css" />
				{/* <link rel="stylesheet" href="/css/colors/violet.css" /> */}

				<LogoJsonLd
					useAppDir={true}
					logo={`${process.env.APP_URL}/img/logo-new.png`}
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
						`${process.env.APP_URL}/img/logo-new.png`,
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
				
				<Script src="/js/plugins.js" />
				<Script src="/js/theme.js" />
			</body>
		</html>
	);
}
