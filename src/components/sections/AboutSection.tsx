import { Fish, Truck, Shield, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-fishing.jpg";

const features = [
  {
    icon: Fish,
    title: "Peixes Frescos",
    description: "Selecionados diariamente",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Em toda região de Ananindeua",
  },
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Produtos certificados",
  },
  {
    icon: Heart,
    title: "Atendimento",
    description: "Personalizado via WhatsApp",
  },
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-2xl" />

              {/* Main image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-ocean)]">
                <img
                  src={heroImage}
                  alt="Pesca Pará - Nossa História"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Floating stat card */}
              <Card className="absolute -bottom-6 -right-6 p-6 bg-card shadow-[var(--shadow-ocean)] border-border/50">
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  2025
                </p>
                <p className="text-sm text-muted-foreground">Fundação</p>
              </Card>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 order-1 lg:order-2">
            <Badge variant="outline">Sobre Nós</Badge>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Tradição e Qualidade
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                em Cada Pescado
              </span>
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              O Farol do Mar Pescados nasceu da paixão pelo mar e pelo desejo de levar os melhores pescados
              da região amazônica até a sua mesa. Localizada em Icui-Laranjeira, Ananindeua,
              selecionamos cada peixe com cuidado e dedicação.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Nossa missão é oferecer produtos de qualidade superior, respeitando a natureza
              e valorizando os pescadores locais. Trabalhamos diariamente para garantir que
              você receba sempre o melhor.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{feature.title}</p>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="mt-6">
              Conheça Nossa História <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
