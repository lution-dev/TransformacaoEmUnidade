import React, { useState, useEffect } from 'react';
import { PAYMENT_LINK } from '@/lib/constants';
import { Clock, Lock, ArrowRight } from 'lucide-react';
import ButterflyIcon from '@/components/ButterflyIcon';

const HeroSection: React.FC = () => {
  const [countdown, setCountdown] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Countdown timer
  useEffect(() => {
    const countdownDate = new Date();
    countdownDate.setHours(countdownDate.getHours() + 24);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate.getTime() - now;
      
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setCountdown({ hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-main text-white pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      <div className="butterfly top-10 left-5 rotate-45">
        <ButterflyIcon className="text-secondary text-4xl" />
      </div>
      <div className="butterfly bottom-10 right-5 -rotate-45">
        <ButterflyIcon className="text-secondary text-6xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold mb-4">
              <span className="text-accent">Transformação</span> em 
              <span className="text-accent"> Unidade</span>
            </h1>
            <p className="text-xl md:text-2xl font-montserrat mb-6">Encontre o equilíbrio para uma vida plena</p>
            <p className="text-lg mb-8">Descubra uma vida saudável, equilibrada e plena que Deus sonhou para você. Aprenda a emagrecer de dentro para fora e viva em harmonia.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full mr-3">
                  <Clock className="text-white h-5 w-5" />
                </div>
                <div>
                  <p className="font-montserrat font-bold">Programa de 21 dias</p>
                  <p className="text-sm">Transformação completa</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div>
                  <p className="font-montserrat font-bold">Resultados garantidos</p>
                  <p className="text-sm">Comprovado por leitores</p>
                </div>
              </div>
            </div>
            
            <a 
              href={PAYMENT_LINK} 
              className="bg-accent hover:bg-opacity-90 text-accent-foreground font-montserrat font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full inline-flex items-center justify-center transition shadow-md hover:shadow-lg cta-pulse whitespace-nowrap max-w-[280px] sm:max-w-none mx-auto sm:mx-0"
            >
              <span>Quero Comprar Agora</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <div className="mt-4 text-sm font-montserrat">
              <p className="flex items-center">
                <Lock className="mr-1 h-4 w-4" /> 
                Pagamento 100% seguro
              </p>
            </div>
            
            <div className="mt-8">
              <div className="text-sm font-bold uppercase tracking-wider mb-2">Promoção especial:</div>
              <div className="flex items-center">
                <div className="text-2xl font-montserrat font-bold line-through mr-3 text-gray-300">R$97,00</div>
                <div className="text-3xl font-montserrat font-bold text-accent">R$39,90</div>
              </div>
              <div className="mt-2 text-sm font-semibold">
                Oferta expira em: <strong>{countdown.hours}h {countdown.minutes}m {countdown.seconds}s</strong>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end fade-in">
            <div className="book-container relative w-3/4 md:w-full max-w-md overflow-visible p-4">
              {/* Simplificado mockup do livro */}
              <div className="book-shadow absolute -right-2 -bottom-2 w-full h-full bg-black/20 rounded-lg transform rotate-2"></div>
              <img 
                src="/images/book-cover.png" 
                alt="Livro Transformação em Unidade" 
                className="w-full rounded-md shadow-xl transform rotate-[-2deg] hover:rotate-0 transition-all duration-500 ease-in-out hover:scale-105 z-10 relative" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
