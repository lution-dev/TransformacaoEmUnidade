import React from 'react';
import { PAYMENT_LINK } from '@/lib/constants';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Após seguir o programa de 21 dias, não apenas perdi 8kg, mas encontrei uma paz interior e clareza mental que nunca havia experimentado. Minha relação com Deus e comigo mesma foi completamente restaurada.",
    name: "Ana Oliveira",
    location: "Rio de Janeiro, RJ",
    avatarColor: "bg-primary",
    avatarUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    text: "Sempre tentei várias dietas sem sucesso duradouro. Este livro me mostrou que a transformação verdadeira começa no espírito e na mente. Hoje tenho uma nova relação com a comida e com meu corpo. Estou 12kg mais leve e muito mais feliz!",
    name: "Carlos Mendes",
    location: "São Paulo, SP",
    avatarColor: "bg-secondary",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    text: "Este livro foi uma resposta às minhas orações. Eu sabia que precisava mudar, mas não tinha direção. O programa dos 21 dias me deu exatamente o que eu precisava - estrutura, motivação espiritual e resultados práticos. Minha família notou a diferença em apenas uma semana!",
    name: "Mariana Costa",
    location: "Belo Horizonte, MG",
    avatarColor: "bg-accent",
    avatarUrl: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Vidas Transformadas
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Histórias reais de pessoas que experimentaram o poder da transformação integral através deste livro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-current h-4 w-4" />
                  ))}
                </div>
                <span className="ml-2 text-sm font-bold">5.0</span>
              </div>
              
              <blockquote className="text-gray-700 mb-6 font-playfair italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.avatarColor} rounded-full overflow-hidden mr-4`}>
                  <img 
                    src={testimonial.avatarUrl} 
                    alt="Foto de perfil" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-montserrat font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href={PAYMENT_LINK} 
            className="bg-accent hover:bg-opacity-90 text-accent-foreground font-montserrat font-bold px-8 py-4 rounded-full inline-block transition shadow-md hover:shadow-lg"
          >
            Quero Resultados Como Estes
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
