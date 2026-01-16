import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { PromotionsSection } from "@/components/sections/PromotionsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AboutSection } from "@/components/sections/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />
        <CategoriesSection />
        <ProductsSection />
        <PromotionsSection />
        <TestimonialsSection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
