import { Fish, Shell, Package, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    id: "peixes",
    name: "Peixes",
    icon: Fish,
    count: 12,
    description: "Variedade de peixes frescos",
  },
  {
    id: "frutos-do-mar",
    name: "Frutos do Mar",
    icon: Shell,
    count: 8,
    description: "Camarões, caranguejos e mais",
  },
  {
    id: "kits",
    name: "Kits Especiais",
    icon: Package,
    count: 4,
    description: "Combinações prontas para você",
  },
  {
    id: "promocoes",
    name: "Promoções",
    icon: Tag,
    count: 6,
    description: "Ofertas imperdíveis",
  },
];

export const CategoriesSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Categorias
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Nossa{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Seleção
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre os melhores produtos frescos organizados por categoria
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#produtos"
              className="block group"
            >
              <Card className="h-full cursor-pointer border-border/50 hover:shadow-[var(--shadow-ocean)] transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                    <category.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3 hidden md:block">
                    {category.description}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {category.count} produtos
                  </Badge>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
