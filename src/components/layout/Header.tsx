import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fish, ShoppingBag, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";

export const Header = () => {
  const { getTotalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#produtos", label: "Produtos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-lg shadow-[var(--shadow-soft)] py-3"
          : "bg-card/80 backdrop-blur-lg py-4"
      } border-b border-border/30`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
              <Fish className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Farol do Mar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/carrinho">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity relative">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Carrinho
                {getTotalItems() > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs animate-in zoom-in-50"
                  >
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <Link to="/carrinho" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-xl">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center gap-2 pb-6 border-b border-border/50">
                    <Fish className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Farol do Mar
                    </span>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-1 py-6">
                    {navLinks.map((link) => (
                      <SheetClose key={link.href} asChild>
                        <a
                          href={link.href}
                          className="flex items-center py-3 px-4 text-lg font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="mt-auto pt-6 border-t border-border/50">
                    <SheetClose asChild>
                      <Link to="/carrinho" className="block">
                        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                          <ShoppingBag className="mr-2 h-4 w-4" />
                          Ver Carrinho
                          {getTotalItems() > 0 && (
                            <Badge variant="secondary" className="ml-2">
                              {getTotalItems()}
                            </Badge>
                          )}
                        </Button>
                      </Link>
                    </SheetClose>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      Icui-Laranjeira, Ananindeua - PA
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
