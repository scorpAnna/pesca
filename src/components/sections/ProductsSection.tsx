import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <Badge variant="outline" className="mb-4">
              Nossos Produtos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Peixes em{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Destaque
              </span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Os melhores pescados frescos, selecionados com qualidade superior
            </p>
          </div>
          <Button variant="link" className="text-primary self-start md:self-auto">
            Ver todos os produtos <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Tabs for filtering */}
        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="bg-muted/50 backdrop-blur p-1 mb-8 w-full md:w-auto flex flex-wrap">
            <TabsTrigger value="todos" className="flex-1 md:flex-none">
              Todos
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex-1 md:flex-none">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="todos" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products
                  .filter((product) => product.category === category.id)
                  .map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                {products.filter((product) => product.category === category.id).length === 0 && (
                  <div className="col-span-full text-center py-12 text-muted-foreground">
                    <p>Em breve novos produtos nesta categoria!</p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
