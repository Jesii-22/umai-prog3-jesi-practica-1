
import NavBar from "@/components/nav/NavBar";
import Card from "@/components/Card/Card";
import cardGrid from "@/components/CardsGrid/cardGrid";
import Hero from "@/components/hero/hero"
import fotos from "@/components/fotos/fotos";
import Hero2 from "@/components/hero2/hero2";
import CardsGridComp from "@/components/CardsGrid/CardsGridComp";
import Footer from "@/components/Footer/Footer";

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
