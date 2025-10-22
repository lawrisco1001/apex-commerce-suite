import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  moq?: number;
  onAddToCart?: () => void;
}

export const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  badge,
  moq,
  onAddToCart,
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group relative bg-card border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      {badge && (
        <Badge className="absolute top-3 left-3 bg-accent">{badge}</Badge>
      )}
      
      {discount > 0 && (
        <Badge className="absolute top-3 right-3 bg-destructive">-{discount}%</Badge>
      )}

      <div className="p-4 space-y-3">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({reviews.toLocaleString()})</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {moq && (
          <div className="text-xs text-muted-foreground">MOQ: {moq}</div>
        )}

        <Button
          variant="cart"
          className="w-full"
          onClick={(e) => {
            e.preventDefault();
            onAddToCart?.();
          }}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
