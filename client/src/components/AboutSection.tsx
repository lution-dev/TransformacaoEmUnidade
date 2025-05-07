import React from 'react';
import { PAYMENT_LINK } from '@/lib/constants';
import { Check, Bath, Brain, Heart } from 'lucide-react';
import AnimatedElement from '@/components/AnimatedElement';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, buttonAnimation, imageAnimation } from '@/components/animations';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 bg-gradient-main text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <AnimatedElement variants={fadeInLeft} delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">21 Dias de Transformação de Dentro para Fora</h2>
            </AnimatedElement>
            
            <AnimatedElement variants={fadeInLeft} delay={0.2}>
              <p className="text-lg mb-6">
                O livro <span className="font-bold text-accent">Transformação em Unidade</span> oferece um programa prático de 21 dias cuidadosamente planejado para transformar completamente sua vida. O projeto foi estruturado para ajudar você a encontrar o equilíbrio entre os três pilares fundamentais do seu ser:
              </p>
            </AnimatedElement>
            
            <div className="space-y-4 mb-8">
              <AnimatedElement variants={fadeInUp} delay={0.3}>
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 10,
                      transition: { duration: 0.3 } 
                    }}
                  >
                    <Bath className="text-primary h-4 w-4" />
                  </motion.div>
                  <div>
                    <h3 className="font-montserrat font-bold text-lg">Espírito</h3>
                    <p>Fortaleça sua conexão espiritual, aprenda a investir no tempo ministerial e com Deus, descobrindo um novo propósito para sua vida.</p>
                  </div>
                </motion.div>
              </AnimatedElement>
              
              <AnimatedElement variants={fadeInUp} delay={0.4}>
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 10,
                      transition: { duration: 0.3 } 
                    }}
                  >
                    <Brain className="text-primary h-4 w-4" />
                  </motion.div>
                  <div>
                    <h3 className="font-montserrat font-bold text-lg">Alma</h3>
                    <p>Renove sua mente, emoções e vontade, encontrando raizes de traumas e descobrindo uma nova relação com a comida e com as pessoas.</p>
                  </div>
                </motion.div>
              </AnimatedElement>
              
              <AnimatedElement variants={fadeInUp} delay={0.5}>
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 10,
                      transition: { duration: 0.3 } 
                    }}
                  >
                    <Heart className="text-primary h-4 w-4" />
                  </motion.div>
                  <div>
                    <h3 className="font-montserrat font-bold text-lg">Corpo</h3>
                    <p>Aprenda a cuidar adequadamente do seu templo físico, recobrando energia e vitalidade, com orientações nutricionais completas e práticas.</p>
                  </div>
                </motion.div>
              </AnimatedElement>
            </div>
            
            <AnimatedElement variants={fadeInLeft} delay={0.6}>
              <p className="mb-8">
                Os próximos capítulos são essenciais para você começar os 21 dias preparados. O livro traz todas as informações necessárias sobre as fases do projeto, dias de jejum, alimentos a retirar, dicas de compras e muito mais. Cada dia oferece reflexões, passagens inspiradoras e exercícios práticos para você implementar mudanças significativas que trazem equilíbrio para todas as áreas da sua vida.
              </p>
            </AnimatedElement>
            
            <AnimatedElement variants={fadeInUp} delay={0.7}>
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8"
                whileHover={{ 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  transition: { duration: 0.3 } 
                }}
              >
                <h3 className="font-montserrat font-bold text-lg mb-3">O que torna este livro único:</h3>
                <ul className="space-y-2">
                  {[
                    "Abordagem holística que equilibra espírito, alma e corpo",
                    "Fundamentado em princípios espirituais cristãos",
                    "Orientações detalhadas sobre jejum e alimentação",
                    "Ajuda você a superar a compulsão alimentar",
                    "Resultados comprovados com perda de peso e mais disposição"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + (index * 0.1), duration: 0.3 }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <motion.div
                        whileHover={{ 
                          rotate: [0, 10, -10, 10, 0],
                          transition: { duration: 0.5 } 
                        }}
                      >
                        <Check className="text-accent mr-2 h-5 w-5" />
                      </motion.div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedElement>
            
            <AnimatedElement variants={buttonAnimation} delay={0.8}>
              <motion.a 
                href={PAYMENT_LINK} 
                className="bg-accent hover:bg-opacity-90 text-accent-foreground font-montserrat font-bold px-8 py-4 rounded-full inline-block transition shadow-md hover:shadow-lg whitespace-nowrap"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
              >
                Garantir Meu Exemplar
              </motion.a>
            </AnimatedElement>
          </div>
          
          <AnimatedElement variants={imageAnimation} delay={0.3} className="order-1 md:order-2 flex justify-center">
            <motion.div 
              className="rounded-xl shadow-2xl max-w-full w-full max-w-[400px] p-6 bg-gradient-to-br from-purple-100/80 to-teal-100/80 flex flex-col items-center justify-center"
              whileHover={{ 
                y: -5,
                boxShadow: "0 25px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.4 } 
              }}
            >
              {/* SVG ilustrativo da jornada de transformação */}
              <motion.svg 
                viewBox="0 0 500 500" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[350px]"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.3 } 
                }}
              >
                {/* Círculo representando um ciclo de 21 dias */}
                <motion.circle 
                  cx="250" 
                  cy="250" 
                  r="200" 
                  fill="none" 
                  stroke="#5B2C91" 
                  strokeWidth="5" 
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />

                {/* Marcador dos 21 dias no círculo */}
                {Array.from({ length: 21 }).map((_, i) => {
                  const angle = (i * (360 / 21) * Math.PI) / 180;
                  const x = 250 + 200 * Math.cos(angle);
                  const y = 250 + 200 * Math.sin(angle);
                  return (
                    <motion.circle 
                      key={i} 
                      cx={x} 
                      cy={y} 
                      r="5" 
                      fill={i < 7 ? "#1DD3B0" : i < 14 ? "#4B3A95" : "#BEFF00"}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.6 + (i * 0.05) }}
                    />
                  );
                })}

                {/* Borboleta central - símbolo de transformação */}
                <motion.g 
                  transform="translate(250, 250) scale(0.8)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  whileHover={{ 
                    scale: 1.1, 
                    transition: { duration: 0.3 } 
                  }}
                >
                  <path d="M0,0 C-50,-30 -100,-10 -80,40 C-70,80 -30,100 0,80 C30,100 70,80 80,40 C100,-10 50,-30 0,0" fill="#5B2C91" opacity="0.7" />
                  <path d="M0,0 C-40,-20 -80,-5 -60,30 C-50,60 -20,75 0,60 C20,75 50,60 60,30 C80,-5 40,-20 0,0" fill="#1DD3B0" opacity="0.7" />
                  <line x1="0" y1="-10" x2="0" y2="90" stroke="#4B3A95" strokeWidth="3" />
                </motion.g>

                {/* Texto - 21 dias */}
                <motion.text 
                  x="250" 
                  y="135" 
                  fontFamily="Montserrat" 
                  fontSize="28" 
                  fontWeight="bold" 
                  fill="#5B2C91" 
                  textAnchor="middle"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  21 DIAS
                </motion.text>
                
                {/* Texto - Transformação */}
                <motion.text 
                  x="250" 
                  y="385" 
                  fontFamily="Montserrat" 
                  fontSize="24" 
                  fontWeight="bold" 
                  fill="#5B2C91" 
                  textAnchor="middle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  TRANSFORMAÇÃO
                </motion.text>
                <motion.text 
                  x="250" 
                  y="415" 
                  fontFamily="Montserrat" 
                  fontSize="24" 
                  fontWeight="bold" 
                  fill="#1DD3B0" 
                  textAnchor="middle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  EM UNIDADE
                </motion.text>

                {/* Raios de transformação */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i * 45 * Math.PI) / 180;
                  return (
                    <motion.line 
                      key={i}
                      x1={250 + 100 * Math.cos(angle)}
                      y1={250 + 100 * Math.sin(angle)}
                      x2={250 + 150 * Math.cos(angle)}
                      y2={250 + 150 * Math.sin(angle)}
                      stroke="#BEFF00"
                      strokeWidth="3"
                      strokeDasharray="10 5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 + (i * 0.05) }}
                    />
                  );
                })}
              </motion.svg>
              <motion.p 
                className="mt-4 text-center text-purple-900 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                Uma jornada de transformação para seu espírito, alma e corpo
              </motion.p>
            </motion.div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
