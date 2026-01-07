import React from 'react';
import { Book, Users, Award } from 'lucide-react';

const AuthorSection: React.FC = () => {
  return (
    <section id="autora" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src="/images/renata-profile.jpeg" 
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
                Renata Rodrigues é cristã, terapeuta emocional, consultora financeira e palestrante com uma missão clara: ajudar pessoas a encontrarem equilíbrio e transformação em suas vidas.
              </p>

              <p>
                Formada em Ciências Contábeis pela Faculdade Fundação Santo André, no ABC Paulista, há 15 anos, Renata construiu uma sólida carreira como Consultora Financeira, utilizando seu conhecimento para ajudar pessoas não apenas com finanças, mas também com as emoções associadas ao dinheiro.
              </p>

              <p>
                Por 13 anos, atuou em uma instituição financeira, onde descobriu seu dom especial: saber ouvir e aconselhar. Sua paixão por ajudar cresceu tanto que decidiu se especializar, tornando-se Terapeuta Emocional, formada pela TRG há 2 anos.
              </p>

              <p>
                Desde 2024, Renata cumpre a missão que Deus lhe confiou através do Projeto "Transformação em Unidade", ajudando pessoas a libertarem-se da compulsão alimentar, descobrindo as raízes emocionais de seus traumas e transformando-se de dentro para fora.
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
              "Você está prestes a viver uma grande mudança em sua vida! Não permita ser roubado de viver essa transformação. Minha missão é caminhar com quem precisa recomeçar, mostrando que é possível viver uma vida leve, curada e cheia de significado."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;