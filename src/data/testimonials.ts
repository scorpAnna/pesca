export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar?: string;
  rating: number;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Silva",
    location: "Ananindeua, PA",
    rating: 5,
    comment: "Peixes sempre frescos e de ótima qualidade. Entrega rápida e atendimento excelente! Recomendo muito.",
  },
  {
    id: "2",
    name: "João Santos",
    location: "Belém, PA",
    rating: 5,
    comment: "Melhor peixaria da região! A Dourada do Farol do Mar estava perfeita, carne firme e sabor incrível. Voltarei sempre!",
  },
  {
    id: "3",
    name: "Ana Costa",
    location: "Marituba, PA",
    rating: 5,
    comment: "Atendimento nota 10! Os peixes chegaram muito bem embalados e fresquíssimos. Super indico!",
  },
  {
    id: "4",
    name: "Carlos Oliveira",
    location: "Ananindeua, PA",
    rating: 4,
    comment: "Ótima variedade de peixes e preços justos. O Gó estava delicioso, fiz um caldeirada incrível!",
  },
  {
    id: "5",
    name: "Fernanda Lima",
    location: "Belém, PA",
    rating: 5,
    comment: "Compro toda semana aqui! A qualidade é sempre consistente e o atendimento via WhatsApp é muito prático.",
  },
];
