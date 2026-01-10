import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart, Product } from "@/contexts/CartContext";

interface ProductCardProps extends Product {}

export const ProductCard = ({ id, name, price, image, description }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, description });
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-ocean)] border-border/50">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-2 text-foreground">{name}</CardTitle>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <p className="text-2xl font-bold bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))] bg-clip-text text-transparent">
          {price}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-[var(--shadow-soft)]"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};
