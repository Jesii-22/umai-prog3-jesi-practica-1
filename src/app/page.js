 import Image from "next/image";
import styles from "./page.module.css";


import React from 'react';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import Hero from '../app/components/Hero';
import CardsGrid from '../app/components/CardsGrid'
import Card from './components/Card';
import img from '../'

const Home = () => {
  // Datos para las tarjetas
  const cardsData = [
    {
      title: 'Tarjeta 1',
      image: '/card1.jpg',
      description: 'Esta es la descripción de la tarjeta 1.',
    },
    {
      title: 'Tarjeta 2',
      image: '/card2.jpg',
      description: 'Esta es la descripción de la tarjeta 2.',
    },
    {
      title: 'Tarjeta 3',
      image: '/card3.jpg',
      description: 'Esta es la descripción de la tarjeta 3.',
    },
    // Puedes agregar más datos de tarjetas aquí si es necesario
  ];

  return (
    <div>
      {/* Navbar con título */}
      <Navbar title="Mi Aplicación Next.js" />

      {/* Contenido principal */}
      <main>
        {/* Sección del héroe con título y descripción */}
        <Hero title="Bienvenido a mi aplicación" description="Esta es una descripción de la aplicación." />

        {/* Grid de tarjetas */}
        <CardsGrid cards={cardsData} />
      </main>

      {/* Footer con derechos de autor */}
      <Footer copyright="© 2024 Mi Empresa" />
    </div>
  );
}

export default Home;



