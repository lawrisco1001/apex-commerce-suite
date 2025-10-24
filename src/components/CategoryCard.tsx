'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  count?: number;
}

export const CategoryCard = ({ title, image, link, count }: CategoryCardProps) => {
  return (
    <Link href={link} className="group">
      <div className="relative overflow-hidden rounded-xl bg-card border transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          {count && (
            <p className="text-sm text-muted-foreground mb-3">{count.toLocaleString()} products</p>
          )}
          <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
            Shop Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};
