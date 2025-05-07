import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">Transformação em Unidade</h3>
            <p className="mb-4">Um livro de Renata Rodrigues</p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#beneficios" className="hover:text-secondary transition">Benefícios</a></li>
              <li><a href="#sobre" className="hover:text-secondary transition">Sobre o Livro</a></li>
              <li><a href="#autora" className="hover:text-secondary transition">Autora</a></li>
              <li><a href="#depoimentos" className="hover:text-secondary transition">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-secondary transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">Contato</h3>
            <p className="mb-2">Dúvidas ou suporte? Entre em contato:</p>
            <a href="mailto:re_renata@icloud.com" className="mb-4 block hover:text-secondary transition">re_renata@icloud.com</a>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/renatarodrigues_oficiall" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-secondary transition" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://www.tiktok.com/@renatarodriguesilva" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-secondary transition" aria-label="TikTok">
                <Youtube />
              </a>
              <a href="https://www.youtube.com/@RenataRodriguesOficiall" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-secondary transition" aria-label="YouTube">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Uma vez que você sai do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
          <p className="mt-2">Este produto é comercializado com apoio da Hotmart. A plataforma não faz controle editorial prévio dos produtos comercializados, nem avalia a tecnicidade e experiência daqueles que os produzem. A existência de um produto e sua aquisição, através da plataforma, não podem ser consideradas como garantia de qualidade de conteúdo e resultado, em qualquer hipótese. Ao adquiri-lo, o comprador declara estar ciente dessas informações. Os termos e políticas da Hotmart podem ser acessados aqui, antes mesmo da conclusão da compra.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
