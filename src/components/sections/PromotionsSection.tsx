import { ArrowRight, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import fishGo from "@/assets/fish-go.jpg";

export const PromotionsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <Badge className="bg-white/20 text-white hover:bg-white/30 border-0">
              <Percent className="mr-1 h-3 w-3" />
              Oferta da Semana
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              15% OFF no Gó
              <br />
              <span className="text-white/90">Aproveite!</span>
            </h2>
            <p className="text-white/80 max-w-md text-lg">
              O peixe Gó do Farol do Mar está com preço especial! Carne saborosa e versátil, perfeito para diversas receitas. Oferta por tempo limitado.
            </p>
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold">R$ 38,90</span>
              <span className="text-xl text-white/60 line-through">R$ 45,90/kg</span>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 shadow-lg"
            >
              Aproveitar Oferta <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-white/10 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-white/5 rounded-3xl transform -rotate-3" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={fishGo}
                  alt="Gó em promoção"
                  className="w-full h-80 object-cover"
                />
              </div>
              {/* Price badge */}
              <div className="absolute -top-4 -right-4 bg-white text-primary rounded-full p-4 shadow-xl">
                <div className="text-center">
                  <span className="text-xs font-medium block">até</span>
                  <span className="text-2xl font-bold">15%</span>
                  <span className="text-xs font-medium block">OFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
