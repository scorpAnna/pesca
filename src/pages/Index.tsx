import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/contexts/CartContext";
import { Fish, ShoppingBag, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fishing.jpg";
import fishPescadaBranca from "@/assets/fish-pescada-branca.jpg";
import fishPescadaAmarela from "@/assets/fish-pescada-amarela.jpg";
import fishGo from "@/assets/fish-go.jpg";
import fishDourada from "@/assets/fish-dourada.jpg";

const Index = () => {
  const { getTotalItems } = useCart();
  
  const products = [
    {
      id: "pescada-branca",
      name: "Pescada Branca",
      price: "R$ 42,90/kg",
      image: fishPescadaBranca,
      description: "Peixe de carne branca e suave, ideal para assados e grelhados. Pescado fresco."
    },
    {
      id: "pescada-amarela",
      name: "Pescada Amarela",
      price: "R$ 48,90/kg",
      image: fishPescadaAmarela,
      description: "Peixe nobre de sabor marcante e textura firme. Excelente para diversas preparações."
    },
    {
      id: "go",
      name: "Gó",
      price: "R$ 38,90/kg",
      image: fishGo,
      description: "Peixe de água salgada com carne saborosa e versátil. Ótimo custo-benefício."
    },
    {
      id: "dourada",
      name: "Dourada",
      price: "R$ 65,90/kg",
      image: fishDourada,
      description: "Peixe premium de águas profundas, carne firme e sabor refinado. Ideal para ocasiões especiais."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50 shadow-[var(--shadow-soft)]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Fish className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pesca Pará
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#produtos" className="text-foreground hover:text-primary transition-colors">
                Produtos
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">
                Contato
              </a>
              <Link to="/carrinho">
                <Button variant="default" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 relative">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Carrinho
                  {getTotalItems() > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    >
                      {getTotalItems()}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground drop-shadow-lg">
            Peixes Frescos
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Direto do Mar
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-2xl mx-auto drop-shadow">
            Pescados frescos e de qualidade superior para sua mesa
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg shadow-[var(--shadow-ocean)]"
            >
              Ver Produtos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary/50 hover:bg-primary/10 text-lg backdrop-blur-sm"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Peixes em <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Destaque</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os melhores pescados frescos, selecionados com qualidade superior
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Fish className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pesca Pará
            </span>
          </div>
          <p className="text-muted-foreground mb-4">
            Peixes frescos e de qualidade superior
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 Pesca Pará. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
