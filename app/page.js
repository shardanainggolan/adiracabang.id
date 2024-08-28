import Image from "next/image";
import Hero from './sections/hero';
import Persayaratan from './sections/persyaratan';
import Service from './sections/service';
import About from './sections/about';
import Parallax from './sections/parallax';
import Team from './sections/team';

export default function Home() {
	return (
		<>
			<Hero />
			<Service />
			<Persayaratan />
			<About />
			<Parallax />
			<Team />
		</>
	);
}
