import React from 'react';
import { PAYMENT_LINK } from '@/lib/constants';

const BookPreviewSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-main text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8">
          O Que Você Vai Encontrar No Livro
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-montserrat font-bold text-2xl">1</span>
            </div>
            <h3 className="font-montserrat font-bold text-xl mb-3">Diagnóstico</h3>
            <p>
              Ferramentas para identificar áreas desalinhadas em sua vida e compreender padrões que impedem sua transformação.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-montserrat font-bold text-2xl">2</span>
            </div>
            <h3 className="font-montserrat font-bold text-xl mb-3">Transformação</h3>
            <p>
              Estratégias práticas para renovar sua mente, nutrir seu espírito e cuidar do seu corpo de forma integrada.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-montserrat font-bold text-2xl">3</span>
            </div>
            <h3 className="font-montserrat font-bold text-xl mb-3">Manutenção</h3>
            <p>
              Sistemas para sustentar suas conquistas e continuar crescendo em todas as dimensões da sua vida.
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <a 
            href={PAYMENT_LINK} 
            className="bg-accent hover:bg-opacity-90 text-accent-foreground font-montserrat font-bold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full inline-flex justify-center items-center transition shadow-md hover:shadow-lg whitespace-nowrap max-w-[280px] sm:max-w-none mx-auto"
          >
            Quero Comprar Agora
          </a>
          <p className="mt-4 text-sm opacity-90">
            Quantidade limitada de exemplares com desconto especial
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookPreviewSection;
