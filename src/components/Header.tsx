'use client';

import { ShoppingCart, Search, User, Camera, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

interface HeaderProps {
  cartCount?: number;
}

export const Header = ({ cartCount = 0 }: HeaderProps) => {
  const [deepSearch, setDeepSearch] = useState(false);
  
  const frequentSearches = [
    "iphones 15 pro max",
    "labubu",
    "watch",
    "electric bike",
    "women's intimates",
    "electric scooter",
    "cars"
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="border-b">
        <div className="container flex h-16 items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg gradient-primary" />
            <span className="text-xl font-bold">MarketHub</span>
          </Link>

          <div className="flex-1 max-w-3xl mx-auto">
            <div className="relative rounded-full bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 p-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-600" />
                  <span className="text-sm font-medium text-orange-600 dark:text-orange-400">Deep Search</span>
                  <Switch 
                    checked={deepSearch} 
                    onCheckedChange={setDeepSearch}
                    className="data-[state=checked]:bg-orange-500"
                  />
                </div>
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-32 border-0 bg-background"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8">
                      <Camera className="h-4 w-4 mr-1" />
                      Image Search
                    </Button>
                    <Button size="sm" className="h-8 gradient-orange text-white border-0">
                      <Search className="h-4 w-4 mr-1" />
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <Link href="/products">
              <Button variant="ghost">Products</Button>
            </Link>
            <Link href="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-accent">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </nav>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 py-2">
        <div className="container">
          <div className="flex items-center gap-4 text-sm text-white">
            <span className="font-medium">Frequently searched:</span>
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
              {frequentSearches.map((term) => (
                <Link
                  key={term}
                  href={`/products?search=${term}`}
                  className="whitespace-nowrap hover:underline"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
