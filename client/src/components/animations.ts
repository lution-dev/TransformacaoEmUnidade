import { Variants } from "framer-motion";

// Animação de fade-in suave (de baixo para cima)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      delay: 0.1
    }
  }
};

// Animação de fade-in lateral (da esquerda para a direita)
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      delay: 0.1
    }
  }
};

// Animação de fade-in lateral (da direita para a esquerda)
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      delay: 0.1
    }
  }
};

// Animação para cards com escala
export const cardAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      delay: 0.1
    }
  }
};

// Animação para títulos com ênfase
export const titleAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      delay: 0.05
    }
  }
};

// Configuração para animações em sequência (staggered animation)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Animação para botões com escala
export const buttonAnimation: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.3, 
      ease: "easeOut",
      delay: 0.4
    }
  },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.2, 
      ease: "easeInOut"
    }
  },
  tap: { 
    scale: 0.98,
    transition: { 
      duration: 0.1
    }
  }
};

// Animação para imagens
export const imageAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -2 },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      delay: 0.2
    }
  }
};