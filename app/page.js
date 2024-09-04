import Hero from './sections/hero';
import Feature from './sections/feature';
import Persayaratan from './sections/persyaratan';
import Service from './sections/service';
import Proses from './sections/proses';
import Simulasi from './sections/simulasi';
import Faq from './sections/faq';
import Article from "./sections/article";

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
			<Article />
		</>
	);
}
