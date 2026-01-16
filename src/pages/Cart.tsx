import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, ShoppingBag, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  
  // Número do WhatsApp da loja (formato: 5591XXXXXXXXX - código do país + DDD + número)
  const WHATSAPP_NUMBER = "5591983927767";

  const handleFinishOrder = () => {
    if (items.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione itens ao carrinho antes de finalizar o pedido.",
        variant: "destructive",
      });
      return;
    }

    // Construir mensagem do pedido
    let message = "*Pedido Farol do Mar Pescados*\n\n";
    message += "*Itens do Pedido:*\n";
    
    items.forEach((item, index) => {
      const itemTotal = parseFloat(item.price.replace("R$ ", "").replace(",", ".").replace("/kg", "")) * item.quantity;
      message += `${index + 1}. ${item.name}\n`;
      message += `   Quantidade: ${item.quantity}kg\n`;
      message += `   Preço: ${item.price}\n`;
      message += `   Subtotal: R$ ${itemTotal.toFixed(2).replace(".", ",")}\n\n`;
    });
    
    message += `*Total: R$ ${getTotalPrice().toFixed(2).replace(".", ",")}*\n\n`;
    message += "Gostaria de finalizar este pedido. Por favor, me informe sobre a disponibilidade e forma de entrega.";

    // Validar e codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message.trim().substring(0, 2000)); // Limite de segurança
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Abrir WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para finalizar seu pedido no WhatsApp.",
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
            <h1 className="text-3xl font-bold mb-4">Seu carrinho está vazio</h1>
            <p className="text-muted-foreground mb-8">
              Adicione alguns peixes frescos ao seu carrinho para continuar
            </p>
            <Link to="/">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar às Compras
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continuar Comprando
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-2">
            Seu <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Carrinho</span>
          </h1>
          <p className="text-muted-foreground">
            {items.length} {items.length === 1 ? "item" : "itens"} no carrinho
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <p className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {item.price}
                          </p>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Resumo do Pedido</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>R$ {getTotalPrice().toFixed(2).replace(".", ",")}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Entrega</span>
                    <span>A calcular</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between items-center">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      R$ {getTotalPrice().toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                </div>

                <Button 
                  onClick={handleFinishOrder}
                  className="w-full mb-3 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  Finalizar Pedido no WhatsApp
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={clearCart}
                >
                  Limpar Carrinho
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
