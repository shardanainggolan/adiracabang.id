import Image from "next/image";
import Hero from './sections/hero';
import Feature from './sections/feature';
import Persayaratan from './sections/persyaratan';
import Service from './sections/service';
import Proses from './sections/proses';
import Simulasi from './sections/simulasi';
import Faq from './sections/faq';
import About from './sections/about';
import Parallax from './sections/parallax';
import Team from './sections/team';

export default function Home() {
	return (
		<>
			<Hero />
			<Feature />
			<Service />
			<Persayaratan />
			<Proses />
			<Simulasi />
			<Faq />
			{/* <About /> */}
			{/* <Parallax /> */}
			{/* <Team /> */}
		</>
	);
}
