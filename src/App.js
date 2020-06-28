import React from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PageHero from "./components/PageHero";
import ImageGallery from "./components/ImageGallery";
import Testimonials from "./components/Testimonials";
import HeroContent from './content/hero.json';
import WhatYouNeed from "./content/what-you-need.json";
import Services from "./content/services.json";
import TestimonialsContent from "./content/testimonials.json";
import ContactContent from "./content/contact.json";
import { photos } from "./content/gallery";

function App() {
  return (
		<main className="App">
			<Header />
			<Hero content={HeroContent} />
			<PageHero content={WhatYouNeed} />
			<PageHero content={Services} />
			<ImageGallery photos={photos} />
			<Testimonials content={TestimonialsContent} />
			<PageHero content={ContactContent} />
      <Footer />
		</main>
	);
}

export default App;
