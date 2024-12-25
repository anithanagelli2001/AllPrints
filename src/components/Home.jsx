// src/components/Home.jsx
import React from 'react';
import { Button } from './ui/button'; 
import Services from './Services';
import Process from './Process';
import Order from './Order';
import Contact from './Contact';
import Reviews from './Reviews';
import Footer from './Footer'; 
import ImageCarousel from './ImageCarousel';

const Home = () => {
  return (
    <section className="pt-10 text-center w-full font-serif">
      <div className="flex justify-between items-center">
        <div className="w-1/2 pr-10">
          <h1 className="text-3xl font-extrabold text-fuchsia-800 bg-clip-text bg-gradient-to-r">
            Welcome to AllPrints - Powered by Dhushanth
          </h1>
          <p className="mt-4 text-xl text-white">
            Discover top-quality printing services tailored to your needs. From custom prints to bulk orders, AllPrints provides reliable and efficient solutions for all your printing projects.
          </p>
          <p className="mt-2 text-md text-white font-sans">
            Whether you're in need of custom coffee cup prints, pizza box branding, logo designs, T-shirt printing, or many more personalized items, we have the expertise to deliver exceptional results every time.
          </p>
          <Button className="bg-gradient-to-l from-purple-500 to-blue-500 text-white text-xs shadow-md mt-6">
            Get Started
          </Button>
        </div>
        <div className="w-1/2">
          <ImageCarousel />
        </div>
      </div>

      <Services />
      <Process />
      <Order />
      <Contact />
      <Reviews />
      <Footer />
    </section>
  );
};

export default Home;
