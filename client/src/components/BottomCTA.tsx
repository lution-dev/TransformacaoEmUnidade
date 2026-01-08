import React from 'react';
import { PAYMENT_LINK } from '@/lib/constants';

const BottomCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-center items-center md:hidden z-40">
      <a
        href={PAYMENT_LINK}
        className="bg-accent hover:bg-opacity-90 text-accent-foreground font-montserrat font-bold px-4 py-3 rounded-full inline-flex justify-center items-center w-full text-center shadow-md transition whitespace-nowrap text-base"
      >
        Comprar por R$59,90
      </a>
    </div>
  );
};

export default BottomCTA;
