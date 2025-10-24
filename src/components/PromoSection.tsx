'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PromoSectionProps {
  title: string;
  subtitle: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  variant?: "primary" | "secondary";
  products: Array<{
    id: string;
    image: string;
  }>;
}

export const PromoSection = ({
  title,
  subtitle,
  features,
  buttonText,
  buttonLink,
  variant = "primary",
  products,
}: PromoSectionProps) => {
  const bgClass = variant === "primary" 
    ? "bg-gradient-to-br from-red-900 to-red-800 dark:from-red-950 dark:to-red-900" 
    : "bg-gradient-to-br from-purple-900 to-purple-800 dark:from-purple-950 dark:to-purple-900";

  return (
    <div className={`rounded-lg overflow-hidden ${bgClass} text-white p-8`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              {feature}
            </div>
          ))}
        </div>
      </div>

      <Link href={buttonLink}>
        <Button 
          variant="secondary" 
          className="mb-6 bg-white/10 backdrop-blur hover:bg-white/20 text-white border-white/20"
        >
          {buttonText}
        </Button>
      </Link>

      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="bg-white/10 backdrop-blur rounded-lg overflow-hidden hover:bg-white/20 transition-colors"
          >
            <img
              src={product.image}
              alt=""
              className="w-full aspect-square object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
