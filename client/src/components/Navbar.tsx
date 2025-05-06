import React, { useState, useEffect } from 'react';
import { PAYMENT_LINK } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Função para rolagem suave para seções
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    const section = document.getElementById(sectionId);
    if (section) {
      // Fechar menu móvel se estiver aberto
      setIsMobileMenuOpen(false);
      
      // Animação de rolagem suave
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Destacar a seção atual na navegação (opcional)
      const links = document.querySelectorAll('nav a');
      links.forEach(link => link.classList.remove('text-secondary'));
      const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
      if (activeLink) activeLink.classList.add('text-secondary');
    }
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-montserrat font-bold text-primary">Transformação em Unidade</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#beneficios" onClick={(e) => scrollToSection(e, 'beneficios')} className="font-montserrat font-medium hover:text-secondary transition">Benefícios</a>
          <a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className="font-montserrat font-medium hover:text-secondary transition">Sobre o Livro</a>
          <a href="#autora" onClick={(e) => scrollToSection(e, 'autora')} className="font-montserrat font-medium hover:text-secondary transition">Autora</a>
          <a href="#depoimentos" onClick={(e) => scrollToSection(e, 'depoimentos')} className="font-montserrat font-medium hover:text-secondary transition">Depoimentos</a>
          <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="font-montserrat font-medium hover:text-secondary transition">FAQ</a>
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
            onClick={(e) => scrollToSection(e, 'beneficios')}
          >
            Benefícios
          </a>
          <a 
            href="#sobre" 
            className="font-montserrat font-medium hover:text-secondary transition py-2"
            onClick={(e) => scrollToSection(e, 'sobre')}
          >
            Sobre o Livro
          </a>
          <a 
            href="#autora" 
            className="font-montserrat font-medium hover:text-secondary transition py-2"
            onClick={(e) => scrollToSection(e, 'autora')}
          >
            Autora
          </a>
          <a 
            href="#depoimentos" 
            className="font-montserrat font-medium hover:text-secondary transition py-2"
            onClick={(e) => scrollToSection(e, 'depoimentos')}
          >
            Depoimentos
          </a>
          <a 
            href="#faq" 
            className="font-montserrat font-medium hover:text-secondary transition py-2"
            onClick={(e) => scrollToSection(e, 'faq')}
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
