import React, { useState } from 'react';
import { PAYMENT_LINK } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-montserrat font-bold text-primary">Transformação em Unidade</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#beneficios" className="font-montserrat font-medium hover:text-secondary transition">Benefícios</a>
          <a href="#sobre" className="font-montserrat font-medium hover:text-secondary transition">Sobre o Livro</a>
          <a href="#autora" className="font-montserrat font-medium hover:text-secondary transition">Autora</a>
          <a href="#depoimentos" className="font-montserrat font-medium hover:text-secondary transition">Depoimentos</a>
          <a href="#faq" className="font-montserrat font-medium hover:text-secondary transition">FAQ</a>
        </nav>
        
        <a 
          href={PAYMENT_LINK} 
          className="hidden md:block bg-accent hover:bg-opacity-90 text-accent-foreground font-montserrat font-bold px-6 py-2 rounded-full transition shadow-md hover:shadow-lg"
        >
          Comprar Agora
        </a>
        
        <button 
          className="md:hidden text-primary text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-md ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a 
            href="#beneficios" 
            className="font-montserrat font-medium hover:text-secondary transition py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Benefícios
          </a>
          <a 
            href="#sobre" 
            className="font-montserrat font-medium hover:text-secondary transition py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre o Livro
          </a>
          <a 
            href="#autora" 
            className="font-montserrat font-medium hover:text-secondary transition py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Autora
          </a>
          <a 
            href="#depoimentos" 
            className="font-montserrat font-medium hover:text-secondary transition py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Depoimentos
          </a>
          <a 
            href="#faq" 
            className="font-montserrat font-medium hover:text-secondary transition py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href={PAYMENT_LINK}
            className="bg-accent hover:bg-opacity-90 text-accent-foreground font-montserrat font-bold px-6 py-3 rounded-full transition shadow-md hover:shadow-lg text-center"
          >
            Comprar Agora
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
