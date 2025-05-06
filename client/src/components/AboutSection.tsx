import React from 'react';
import { PAYMENT_LINK } from '@/lib/constants';
import { Check, Bath, Brain, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 bg-gradient-main text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">21 Dias de Jornada Transformadora</h2>
            <p className="text-lg mb-6">
              O livro <span className="font-bold text-accent">Transformação em Unidade</span> oferece um programa prático de 21 dias para transformar completamente sua vida, focando nos três pilares fundamentais:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Bath className="text-primary h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg">Espírito</h3>
                  <p>Fortaleça sua conexão espiritual e encontre propósito e direção para sua vida.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Brain className="text-primary h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg">Alma</h3>
                  <p>Renove sua mente, emoções e vontade para alinhar-se com uma vida plena.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Heart className="text-primary h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg">Corpo</h3>
                  <p>Aprenda a cuidar do seu templo físico e desenvolva hábitos saudáveis duradouros.</p>
                </div>
              </div>
            </div>
            
            <p className="mb-8">
              Cada dia do programa oferece reflexões, passagens inspiradoras, exercícios práticos e orientações específicas para ajudá-lo a implementar mudanças significativas em todas as áreas da sua vida.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <h3 className="font-montserrat font-bold text-lg mb-3">O que torna este livro único:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  <span>Abordagem holística que trata a pessoa por completo</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  <span>Fundamentado em princípios espirituais e científicos</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  <span>Método passo a passo fácil de implementar</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  <span>Resultados comprovados por centenas de leitores</span>
                </li>
              </ul>
            </div>
            
            <a 
              href={PAYMENT_LINK} 
              className="bg-accent hover:bg-opacity-90 text-accent-foreground font-montserrat font-bold px-8 py-4 rounded-full inline-block transition shadow-md hover:shadow-lg"
            >
              Garantir Meu Exemplar
            </a>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=1200" 
              alt="Jornada de 21 dias de transformação" 
              className="rounded-xl shadow-2xl max-w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
