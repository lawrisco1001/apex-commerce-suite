'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import heroBanner from "@/assets/hero-banner.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover Amazing Products at
            <span className="gradient-primary bg-clip-text text-transparent"> Unbeatable Prices</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Shop millions of products from trusted sellers worldwide. Fast shipping, secure payments, and satisfaction guaranteed.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products">
              <Button variant="hero" size="lg" className="group">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/products?category=deals">
              <Button variant="outline" size="lg">
                View Deals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
