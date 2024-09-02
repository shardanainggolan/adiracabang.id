import { Inter, Open_Sans, Lato, Merriweather, Poppins } from "next/font/google";
import "./globals.css";
import './plugins.css';
import './style.css';
import '../public/css/dm.css';
import Script from 'next/script';
import Header from './components/header';
import Footer from './components/footer';
import CustomFloatingWhatsapp from "./components/custom-floating-whatsapp";
import { LogoJsonLd, LocalBusinessJsonLd, SocialProfileJsonLd } from 'next-seo';

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });
const poppins = Poppins({ 
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
	display: 'swap',
});
const merriweather = Merriweather({ 
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
	display: 'swap',
});
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
				{/* <link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
				{/* <link
					href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Manrope:wght@400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
					rel="stylesheet" /> */}

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
