import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Clientes Dizem
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira as experiências de quem já comprou conosco
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-card hover:shadow-[var(--shadow-soft)] transition-shadow duration-300 border-border/50">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Quote icon */}
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />

                    {/* Stars rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted"
                          )}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-foreground mb-6 leading-relaxed flex-grow">
                      "{testimonial.comment}"
                    </blockquote>

                    <Separator className="mb-4" />

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20 text-primary font-semibold">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 hidden lg:flex" />
          <CarouselNext className="-right-4 hidden lg:flex" />
        </Carousel>

        {/* Mobile dots indicator hint */}
        <p className="text-center text-xs text-muted-foreground mt-6 lg:hidden">
          Deslize para ver mais depoimentos
        </p>
      </div>
    </section>
  );
};
