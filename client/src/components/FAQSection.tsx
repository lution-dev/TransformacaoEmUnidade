import React, { useState } from 'react';
import { PAYMENT_LINK } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como o livro é entregue?",
    answer: "O livro \"Transformação em Unidade\" é entregue exclusivamente em formato digital (PDF, ePub e Kindle) através da plataforma Hotmart. Após a compra, você receberá imediatamente um e-mail da Hotmart com instruções para acessar sua área de membros, onde poderá baixar o material e acessar em qualquer dispositivo. Não há versão física do livro."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "O programa foi estruturado para 21 dias porque pesquisas mostram que este é o tempo mínimo para formar novos hábitos. Muitos leitores relatam mudanças significativas já na primeira semana, especialmente em relação à clareza mental e disposição física. Para resultados completos na perda de peso e transformação integral, recomendamos seguir todo o programa de 21 dias."
  },
  {
    question: "O livro inclui planos alimentares?",
    answer: "Sim! O livro inclui orientações nutricionais completas, com sugestões de cardápios equilibrados e dicas para uma alimentação saudável. No entanto, diferente de dietas restritivas, o foco está em criar uma relação saudável com a comida e desenvolver hábitos alimentares sustentáveis."
  },
  {
    question: "Posso adaptar o programa à minha rotina?",
    answer: "Absolutamente! O programa foi desenvolvido pensando em pessoas com rotinas ocupadas. Os exercícios e práticas diárias podem ser realizados em diferentes momentos do dia e adaptados à sua disponibilidade de tempo. O livro oferece alternativas para diferentes situações e níveis de experiência."
  },
  {
    question: "Existe garantia de satisfação?",
    answer: "Sim! Oferecemos garantia de 7 dias. Se você não ficar satisfeito com o conteúdo do livro por qualquer motivo, basta solicitar reembolso dentro deste prazo e devolveremos 100% do seu investimento, sem perguntas."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o livro "Transformação em Unidade"
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden mb-4 px-0">
                <AccordionTrigger className="px-6 py-4 text-left font-montserrat font-bold hover:bg-gray-50 transition">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href={PAYMENT_LINK} 
            className="bg-accent hover:bg-opacity-90 text-accent-foreground font-montserrat font-bold px-8 py-4 rounded-full inline-block transition shadow-md hover:shadow-lg"
          >
            Adquirir Agora Por Apenas R$45,00
          </a>
          <p className="mt-4 text-gray-600">Oferta por tempo limitado - Preço original: R$97,00</p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
