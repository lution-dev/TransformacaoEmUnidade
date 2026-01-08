import React from 'react';
import { PAYMENT_LINK } from '@/lib/constants';
import { CheckCircle, Lock, CreditCard, ShieldCheck } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-main text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">Comece Sua Transformação Hoje!</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Tudo começa dentro de você. Descubra como governar seu espírito, alma e corpo para uma vida em unidade e equilíbrio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center max-w-xs">
            <div className="text-3xl font-montserrat font-bold mb-2 line-through text-gray-300">R$97,00</div>
            <div className="text-5xl font-montserrat font-bold text-accent mb-4">R$59,90</div>
            <p className="mb-2">Oferta por tempo limitado</p>
            <p className="text-sm">Economia de 54%</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <CheckCircle className="text-accent text-xl mr-3 h-6 w-6" />
              <span>Acesso imediato ao livro digital via Hotmart</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-accent text-xl mr-3 h-6 w-6" />
              <span>Programa completo de 21 dias</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-accent text-xl mr-3 h-6 w-6" />
              <span>Garantia de 7 dias</span>
            </div>
          </div>
        </div>

        <a
          href={PAYMENT_LINK}
          className="bg-accent hover:bg-opacity-90 text-accent-foreground font-montserrat font-bold px-6 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-full inline-flex justify-center items-center transition shadow-lg hover:shadow-xl cta-pulse max-w-[280px] sm:max-w-none mx-auto whitespace-nowrap"
        >
          Quero Comprar Agora
        </a>

        <div className="mt-6 flex items-center justify-center flex-wrap gap-4">
          <div className="flex items-center">
            <Lock className="text-accent mr-2 h-4 w-4" />
            <span className="text-sm">Pagamento 100% seguro</span>
          </div>
          <div className="flex items-center">
            <CreditCard className="text-accent mr-2 h-4 w-4" />
            <span className="text-sm">Cartão de crédito ou PIX</span>
          </div>
          <div className="flex items-center">
            <ShieldCheck className="text-accent mr-2 h-4 w-4" />
            <span className="text-sm">Transação protegida</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
