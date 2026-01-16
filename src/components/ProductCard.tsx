import { ShoppingCart, Eye } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/data/products";

interface ProductCardProps extends Product {}

export const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  description,
  category,
  isNew,
  discount,
}: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, description });
  };

  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, string> = {
      peixes: "Peixes",
      "frutos-do-mar": "Frutos do Mar",
      kits: "Kits",
    };
    return labels[cat] || cat;
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-ocean)] border-border/50 bg-card">
      {/* Badges overlay */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {isNew && (
          <Badge className="bg-green-500 hover:bg-green-600 text-white border-0">
            Novo
          </Badge>
        )}
        {discount && (
          <Badge variant="destructive" className="border-0">
            -{discount}%
          </Badge>
        )}
      </div>

      {/* Quick view button on hover */}
      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Button
          size="icon"
          variant="secondary"
          className="h-8 w-8 rounded-full shadow-md bg-background/90 backdrop-blur-sm"
        >
          <Eye className="h-4 w-4" />
        </Button>
      </div>

      {/* Image with zoom effect */}
      <CardHeader className="p-0">
        <AspectRatio ratio={1}>
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>
      </CardHeader>

      {/* Content */}
      <CardContent className="p-5 space-y-3">
        {/* Category */}
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
          {getCategoryLabel(category)}
        </p>

        {/* Title */}
        <h3 className="font-semibold text-lg text-foreground leading-tight">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))] bg-clip-text text-transparent">
            {price}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-[var(--shadow-soft)]"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  );
};
