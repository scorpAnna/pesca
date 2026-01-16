import fishPescadaBranca from "@/assets/fish-pescada-branca.jpg";
import fishPescadaAmarela from "@/assets/fish-pescada-amarela.jpg";
import fishGo from "@/assets/fish-go.jpg";
import fishDourada from "@/assets/fish-dourada.jpg";

export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  description: string;
  category: "peixes" | "frutos-do-mar" | "kits";
  isNew?: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: "pescada-branca",
    name: "Pescada Branca",
    price: "R$ 42,90/kg",
    image: fishPescadaBranca,
    description: "Peixe de carne branca e suave, ideal para assados e grelhados. Pescado fresco.",
    category: "peixes",
  },
  {
    id: "pescada-amarela",
    name: "Pescada Amarela",
    price: "R$ 48,90/kg",
    image: fishPescadaAmarela,
    description: "Peixe nobre de sabor marcante e textura firme. Excelente para diversas preparações.",
    category: "peixes",
    isNew: true,
  },
  {
    id: "go",
    name: "Gó",
    price: "R$ 38,90/kg",
    originalPrice: "R$ 45,90/kg",
    image: fishGo,
    description: "Peixe de água salgada com carne saborosa e versátil. Ótimo custo-benefício.",
    category: "peixes",
    discount: 15,
  },
  {
    id: "dourada",
    name: "Dourada",
    price: "R$ 65,90/kg",
    image: fishDourada,
    description: "Peixe premium de águas profundas, carne firme e sabor refinado. Ideal para ocasiões especiais.",
    category: "peixes",
  },
];

export const categories = [
  { id: "peixes", name: "Peixes", count: 12 },
  { id: "frutos-do-mar", name: "Frutos do Mar", count: 8 },
  { id: "kits", name: "Kits Especiais", count: 4 },
];
