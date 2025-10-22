import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { TailoredSelections } from "@/components/TailoredSelections";
import { PromoSection } from "@/components/PromoSection";
import { mockProducts, generateMoreProducts } from "@/data/mockData";
import { useState, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import electronicsImg from "@/assets/category-electronics.jpg";
import fashionImg from "@/assets/category-fashion.jpg";
import homeImg from "@/assets/category-home.jpg";

const Index = () => {
  const [cartCount, setCartCount] = useState(0);
  const [displayedProducts, setDisplayedProducts] = useState(mockProducts);
  const [page, setPage] = useState(1);
  const { toast } = useToast();

  const handleAddToCart = (productName: string) => {
    setCartCount((prev) => prev + 1);
    toast({
      title: "Added to cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  const loadMore = useCallback(() => {
    const startId = mockProducts.length + (page - 1) * 8;
    const newProducts = generateMoreProducts(startId, 8);
    setDisplayedProducts((prev) => [...prev, ...newProducts]);
    setPage((prev) => prev + 1);
  }, [page]);

  const { targetRef } = useInfiniteScroll(loadMore);

  const trendingProducts = mockProducts.slice(0, 4);
  
  const tailoredSelections = [
    {
      title: "Premium Electronics & Gadgets",
      views: "27K+",
      items: mockProducts.slice(0, 6).map(p => ({
        id: p.id,
        image: p.image,
        price: `$${p.price.toFixed(2)}`,
        moq: p.moq ? `MOQ: ${p.moq}` : undefined,
      })),
    },
    {
      title: "Fashion Essentials",
      views: "18K+",
      items: mockProducts.slice(2, 8).map(p => ({
        id: p.id,
        image: p.image,
        price: `$${p.price.toFixed(2)}`,
        moq: p.moq ? `MOQ: ${p.moq}` : undefined,
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartCount} />
      
      <main>
        <Hero />

        {/* Categories Section */}
        <section className="container py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
            <p className="text-muted-foreground">Browse our wide selection of products</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard
              title="Electronics"
              image={electronicsImg}
              link="/products?category=electronics"
              count={12543}
            />
            <CategoryCard
              title="Fashion"
              image={fashionImg}
              link="/products?category=fashion"
              count={8932}
            />
            <CategoryCard
              title="Home & Living"
              image={homeImg}
              link="/products?category=home"
              count={6721}
            />
          </div>
        </section>

        {/* Tailored Selections */}
        <TailoredSelections selections={tailoredSelections} />

        {/* Promo Sections */}
        <section className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PromoSection
              title="MarketHub Guaranteed"
              subtitle="Your trusted platform"
              features={["Quick order and pay", "On-time delivery", "Money-back guarantee"]}
              buttonText="Explore now"
              buttonLink="/products?tag=guaranteed"
              variant="primary"
              products={mockProducts.slice(0, 4).map(p => ({ id: p.id, image: p.image }))}
            />
            <PromoSection
              title="Fast Customization"
              subtitle="Tailored to your needs"
              features={["Low MOQ", "14-day dispatch", "True to design"]}
              buttonText="Explore now"
              buttonLink="/products?tag=custom"
              variant="secondary"
              products={mockProducts.slice(4, 8).map(p => ({ id: p.id, image: p.image }))}
            />
          </div>
        </section>

        {/* Trending Products with Infinite Scroll */}
        <section className="container py-16 bg-muted/30">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">All Products</h2>
            <p className="text-muted-foreground">Browse our complete collection</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={() => handleAddToCart(product.name)}
              />
            ))}
          </div>
          
          <div ref={targetRef} className="h-20 flex items-center justify-center mt-8">
            <div className="text-muted-foreground">Loading more products...</div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full gradient-primary">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold">Fast Delivery</h3>
              <p className="text-muted-foreground">Get your orders delivered quickly and safely</p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full gradient-primary">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold">Secure Payment</h3>
              <p className="text-muted-foreground">100% secure payment with encrypted transactions</p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full gradient-primary">
                <span className="text-2xl">💯</span>
              </div>
              <h3 className="text-xl font-bold">Quality Guaranteed</h3>
              <p className="text-muted-foreground">All products verified for quality and authenticity</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">MarketHub</h3>
              <p className="text-sm text-muted-foreground">
                Your trusted marketplace for quality products at great prices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Electronics</li>
                <li>Fashion</li>
                <li>Home & Living</li>
                <li>Sports</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Track Order</li>
                <li>Returns</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 MarketHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
