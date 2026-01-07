import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 flex-shrink-0 bg-secondary rounded-full flex items-center justify-center">
            <ShieldCheck className="text-white text-4xl" />
          </div>
          <div>
            <h3 className="text-2xl font-montserrat font-bold text-primary mb-3">Garantia de Satisfação de 7 Dias</h3>
            <p className="text-gray-700 mb-4">
              Se você não ficar completamente satisfeito com o conteúdo do livro "Transformação em Unidade", basta solicitar reembolso em até 7 dias após a compra e devolveremos 100% do valor investido, sem questionamentos. Nosso compromisso é com sua satisfação e transformação.
            </p>
            <div className="flex items-center">
              <Check className="text-green-500 mr-2 h-5 w-5" />
              <span className="text-sm font-bold">Sem riscos - Satisfação garantida ou seu dinheiro de volta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
