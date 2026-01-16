import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Truck, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-fishing.jpg";

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium">
                Fresco do Mar
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-in-up animation-delay-100">
              Qualidade que
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                vem do mar
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up animation-delay-200">
              Farol do Mar Pescados - Pescados frescos selecionados diariamente direto dos melhores pescadores da região amazônica para a sua mesa.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up animation-delay-300">
              <a href="#produtos">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-[var(--shadow-ocean)] text-base"
                >
                  Ver Produtos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#sobre">
                <Button size="lg" variant="outline" className="border-2 text-base">
                  Nossa História
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="p-2 rounded-full bg-primary/10">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <span>+500 clientes</span>
              </div>
              <Separator orientation="vertical" className="h-8 hidden sm:block" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="p-2 rounded-full bg-primary/10">
                  <Truck className="h-4 w-4 text-primary" />
                </div>
                <span>Entrega rápida</span>
              </div>
              <Separator orientation="vertical" className="h-8 hidden sm:block" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="p-2 rounded-full bg-primary/10">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <span>100% fresco</span>
              </div>
            </div>
          </div>

          {/* Right: Decorative space for hero image effect */}
          <div className="hidden lg:block" />
        </div>
      </div>

    </section>
  );
};
