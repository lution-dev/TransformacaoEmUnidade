import React from 'react';
import { PAYMENT_LINK } from '@/lib/constants';
import { Check, Bath, Brain, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 bg-gradient-main text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">21 Dias de Transformação de Dentro para Fora</h2>
            <p className="text-lg mb-6">
              O livro <span className="font-bold text-accent">Transformação em Unidade</span> oferece um programa prático de 21 dias cuidadosamente planejado para transformar completamente sua vida. O projeto foi estruturado para ajudar você a encontrar o equilíbrio entre os três pilares fundamentais do seu ser:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Bath className="text-primary h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg">Espírito</h3>
                  <p>Fortaleça sua conexão espiritual, aprenda a investir no tempo ministerial e com Deus, descobrindo um novo propósito para sua vida.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Brain className="text-primary h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg">Alma</h3>
                  <p>Renove sua mente, emoções e vontade, encontrando raizes de traumas e descobrindo uma nova relação com a comida e com as pessoas.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Heart className="text-primary h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg">Corpo</h3>
                  <p>Aprenda a cuidar adequadamente do seu templo físico, recobrando energia e vitalidade, com orientações nutricionais completas e práticas.</p>
                </div>
              </div>
            </div>
            
            <p className="mb-8">
              Os próximos capítulos são essenciais para você começar os 21 dias preparados. O livro traz todas as informações necessárias sobre as fases do projeto, dias de jejum, alimentos a retirar, dicas de compras e muito mais. Cada dia oferece reflexões, passagens inspiradoras e exercícios práticos para você implementar mudanças significativas que trazem equilíbrio para todas as áreas da sua vida.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <h3 className="font-montserrat font-bold text-lg mb-3">O que torna este livro único:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  <span>Abordagem holística que equilibra espírito, alma e corpo</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  <span>Fundamentado em princípios espirituais cristãos</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  <span>Orientações detalhadas sobre jejum e alimentação</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  <span>Ajuda você a superar a compulsão alimentar</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  <span>Resultados comprovados com perda de peso e mais disposição</span>
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
            <div className="rounded-xl shadow-2xl max-w-full w-full max-w-[400px] p-6 bg-gradient-to-br from-purple-100/80 to-teal-100/80 flex flex-col items-center justify-center">
              {/* SVG ilustrativo da jornada de transformação */}
              <svg 
                viewBox="0 0 500 500" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[350px]"
              >
                {/* Círculo representando um ciclo de 21 dias */}
                <circle cx="250" cy="250" r="200" fill="none" stroke="#5B2C91" strokeWidth="5" strokeDasharray="8 4" />

                {/* Marcador dos 21 dias no círculo */}
                {Array.from({ length: 21 }).map((_, i) => {
                  const angle = (i * (360 / 21) * Math.PI) / 180;
                  const x = 250 + 200 * Math.cos(angle);
                  const y = 250 + 200 * Math.sin(angle);
                  return (
                    <circle 
                      key={i} 
                      cx={x} 
                      cy={y} 
                      r="5" 
                      fill={i < 7 ? "#1DD3B0" : i < 14 ? "#4B3A95" : "#BEFF00"}
                    />
                  );
                })}

                {/* Borboleta central - símbolo de transformação */}
                <g transform="translate(250, 250) scale(0.8)">
                  <path d="M0,0 C-50,-30 -100,-10 -80,40 C-70,80 -30,100 0,80 C30,100 70,80 80,40 C100,-10 50,-30 0,0" fill="#5B2C91" opacity="0.7" />
                  <path d="M0,0 C-40,-20 -80,-5 -60,30 C-50,60 -20,75 0,60 C20,75 50,60 60,30 C80,-5 40,-20 0,0" fill="#1DD3B0" opacity="0.7" />
                  <line x1="0" y1="-10" x2="0" y2="90" stroke="#4B3A95" strokeWidth="3" />
                </g>

                {/* Texto - 21 dias */}
                <text x="250" y="135" fontFamily="Montserrat" fontSize="28" fontWeight="bold" fill="#5B2C91" textAnchor="middle">21 DIAS</text>
                
                {/* Texto - Transformação */}
                <text x="250" y="385" fontFamily="Montserrat" fontSize="24" fontWeight="bold" fill="#5B2C91" textAnchor="middle">TRANSFORMAÇÃO</text>
                <text x="250" y="415" fontFamily="Montserrat" fontSize="24" fontWeight="bold" fill="#1DD3B0" textAnchor="middle">EM UNIDADE</text>

                {/* Raios de transformação */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i * 45 * Math.PI) / 180;
                  return (
                    <line 
                      key={i}
                      x1={250 + 100 * Math.cos(angle)}
                      y1={250 + 100 * Math.sin(angle)}
                      x2={250 + 150 * Math.cos(angle)}
                      y2={250 + 150 * Math.sin(angle)}
                      stroke="#BEFF00"
                      strokeWidth="3"
                      strokeDasharray="10 5"
                    />
                  );
                })}
              </svg>
              <p className="mt-4 text-center text-purple-900 font-semibold">Uma jornada de transformação para seu espírito, alma e corpo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
