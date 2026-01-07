import React from 'react';
import { PAYMENT_LINK } from '@/lib/constants';
import { Scale, Heart, Brain, HandHelping, Weight, Sprout } from 'lucide-react';
import AnimatedElement from '@/components/AnimatedElement';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardAnimation, buttonAnimation } from '@/components/animations';

const benefits = [
  {
    icon: <Scale className="text-2xl text-secondary" />,
    title: "Equilíbrio Integral",
    description: "Aprenda a equilibrar corpo, mente e espírito para uma vida plena e harmoniosa, exatamente como foi planejada para você."
  },
  {
    icon: <Heart className="text-2xl text-secondary" />,
    title: "Saúde Duradoura",
    description: "Desenvolva hábitos saudáveis que não apenas transformam seu corpo, mas sustentam uma vida com mais energia e vitalidade."
  },
  {
    icon: <Brain className="text-2xl text-secondary" />,
    title: "Renovação Mental",
    description: "Transforme padrões de pensamento negativos e destrutivos em uma mentalidade positiva e alinhada com seus objetivos."
  },
  {
    icon: <HandHelping className="text-2xl text-secondary" />,
    title: "Conexão Espiritual",
    description: "Fortaleça sua conexão espiritual e descubra como ela é fundamental para sua transformação completa."
  },
  {
    icon: <Weight className="text-2xl text-secondary" />,
    title: "Emagrecimento de Dentro para Fora",
    description: "Compreenda por que dietas falham e descubra como emagrecer de forma natural e duradoura, iniciando a transformação internamente."
  },
  {
    icon: <Sprout className="text-2xl text-secondary" />,
    title: "Crescimento Pessoal",
    description: "Desenvolva uma nova relação consigo mesmo, cultivando amor-próprio, autoconfiança e uma identidade fortalecida."
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedElement variants={fadeInUp} delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
              O Que Você Vai Conquistar
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Descubra como este livro transformará seu relacionamento com seu corpo, mente e espírito, trazendo a harmonia que você sempre buscou.
            </p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedElement 
              key={index} 
              variants={cardAnimation}
              delay={0.1 * index}
            >
              <motion.div
                className="bg-white rounded-xl shadow-md p-6 h-full"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mb-4"
                  whileHover={{
                    rotate: [0, 10, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-montserrat font-bold mb-3">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            </AnimatedElement>
          ))}
        </AnimatedElement>
        
        <AnimatedElement variants={buttonAnimation} delay={0.8} className="text-center mt-12">
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
            Quero Iniciar Minha Transformação
          </motion.a>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default BenefitsSection;
