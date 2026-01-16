import { Fish, Instagram, Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Receba Nossas Ofertas</h3>
              <p className="text-muted-foreground">
                Cadastre-se e receba promoções exclusivas direto no seu e-mail
              </p>
            </div>
            <div className="flex gap-3">
              <Input placeholder="Seu melhor e-mail" className="max-w-sm bg-background" />
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <Fish className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Farol do Mar
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Farol do Mar Pescados - Pescados frescos e de qualidade superior para sua mesa.
            </p>
            {/* Social Links */}
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-9 w-9 hover:text-primary hover:border-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9 hover:text-primary hover:border-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9 hover:text-primary hover:border-primary">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Produtos</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#produtos" className="hover:text-primary transition-colors">
                  Peixes
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-primary transition-colors">
                  Frutos do Mar
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-primary transition-colors">
                  Kits Especiais
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-primary transition-colors">
                  Promoções
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Empresa</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Suporte</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Entregas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Trocas e Devoluções
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                (91) 98392-7767
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                faroldomarpescados@hotmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>
                  Rua Arco do Triunfo, 3a
                  <br />
                  Icui-Laranjeira
                  <br />
                  Ananindeua - PA
                  <br />
                  67.124-025
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>© {currentYear} Farol do Mar Pescados. Todos os direitos reservados.</p>
              <p className="text-xs mt-1">
                CNPJ: 62.269.773/0001-25 | Nathalia Pereira Santa Barbara Paiva
              </p>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
