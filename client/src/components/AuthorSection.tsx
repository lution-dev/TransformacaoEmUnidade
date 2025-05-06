import React from 'react';
import { Book, Users, Award } from 'lucide-react';

const AuthorSection: React.FC = () => {
  return (
    <section id="autora" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
              alt="Renata Rodrigues - Autora" 
              className="rounded-xl shadow-lg w-full max-w-md" 
            />
          </div>
          
          <div>
            <div className="inline-block px-4 py-1 bg-secondary/20 text-secondary rounded-full font-montserrat font-bold text-sm mb-4">
              CONHEÇA A AUTORA
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-6">
              Renata Rodrigues
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Renata Rodrigues é especialista em transformação pessoal, combinando conhecimentos de espiritualidade, saúde integral e desenvolvimento humano.
              </p>
              
              <p>
                Com mais de 15 anos de experiência ajudando pessoas a encontrarem equilíbrio e propósito, Renata desenvolveu o método "Transformação em Unidade" após sua própria jornada de superação e descobertas.
              </p>
              
              <p>
                Formada em Psicologia e com especializações em Nutrição Comportamental e Teologia, ela oferece uma perspectiva única que integra ciência e espiritualidade para uma vida plena.
              </p>
              
              <p>
                Já impactou mais de 20.000 pessoas através de seus livros, palestras e programas de coaching.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Book className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold">5+ Livros</p>
                  <p className="text-sm text-gray-600">Publicados</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Users className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold">20.000+</p>
                  <p className="text-sm text-gray-600">Vidas impactadas</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Award className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold">15+ Anos</p>
                  <p className="text-sm text-gray-600">De experiência</p>
                </div>
              </div>
            </div>
            
            <blockquote className="mt-8 border-l-4 border-secondary pl-4 italic text-gray-600">
              "Minha missão é ajudar você a descobrir que a verdadeira transformação começa de dentro para fora, unindo seu ser em completa harmonia como foi planejado."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
