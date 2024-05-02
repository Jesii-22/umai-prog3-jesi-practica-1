
import NavBar from "../app/components/NavBar/Navbar";
import Card from "../app/components/Card/Card";
import cardGrid from "../app/components/CardsGrid/CardsGrid";
import Hero from "../app/components/hero/hero"
import fotos from "../app/components/fotos/foto";
import Hero2 from "../app/components/hero2/hero2";
import CardsGridComp from "../app/components/CardsGrid/CardsGridComp";
import Footer from "../app/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <NavBar title={'Maybelline'}/>
      <Hero imagen={fotos[0].imagen} alt={fotos[0].description} title={fotos[0].title} />
      <CardsGridComp cards={cardGrid}/>
      <Hero2 mainText={`hola`}/>
      <Footer/>
    </main>
  );
}
