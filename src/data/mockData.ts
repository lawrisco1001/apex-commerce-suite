export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  badge?: string;
  description: string;
  features: string[];
  inStock: boolean;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 1234,
    category: "electronics",
    badge: "Best Seller",
    description: "Experience superior sound quality with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.",
    features: ["Active Noise Cancellation", "30-hour battery", "Bluetooth 5.0", "Premium comfort"],
    inStock: true,
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    price: 399.99,
    originalPrice: 499.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 892,
    category: "electronics",
    badge: "New",
    description: "Stay connected and healthy with advanced health tracking, GPS, and a stunning AMOLED display.",
    features: ["Heart rate monitor", "GPS tracking", "Water resistant", "5-day battery"],
    inStock: true,
  },
  {
    id: "3",
    name: "Designer Leather Jacket",
    price: 249.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 456,
    category: "fashion",
    badge: "Trending",
    description: "Premium genuine leather jacket with modern design and exceptional craftsmanship.",
    features: ["Genuine leather", "Multiple pockets", "Comfortable fit", "Premium zippers"],
    inStock: true,
  },
  {
    id: "4",
    name: "Modern Coffee Table",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 234,
    category: "home",
    description: "Elegant modern coffee table with tempered glass top and solid wood frame.",
    features: ["Tempered glass", "Solid wood", "Easy assembly", "Scratch resistant"],
    inStock: true,
  },
  {
    id: "5",
    name: "4K Ultra HD Camera",
    price: 899.99,
    originalPrice: 1199.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 567,
    category: "electronics",
    badge: "Deal",
    description: "Professional-grade 4K camera with advanced features for stunning photography and videography.",
    features: ["4K video", "20MP sensor", "WiFi connectivity", "Weather sealed"],
    inStock: true,
  },
  {
    id: "6",
    name: "Running Shoes Elite",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 789,
    category: "fashion",
    description: "High-performance running shoes with responsive cushioning and breathable design.",
    features: ["Responsive cushioning", "Breathable mesh", "Durable outsole", "Lightweight"],
    inStock: true,
  },
  {
    id: "7",
    name: "Smart Home Speaker",
    price: 99.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 1123,
    category: "electronics",
    description: "Voice-controlled smart speaker with premium audio and smart home integration.",
    features: ["Voice control", "360° audio", "Smart home hub", "Multi-room audio"],
    inStock: true,
  },
  {
    id: "8",
    name: "Luxury Bedding Set",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 345,
    category: "home",
    badge: "Premium",
    description: "Ultra-soft luxury bedding set made from 100% Egyptian cotton for the perfect night's sleep.",
    features: ["Egyptian cotton", "Thread count 1000", "Hypoallergenic", "Machine washable"],
    inStock: true,
  },
];

export const categories = [
  { id: "electronics", name: "Electronics", count: 12543 },
  { id: "fashion", name: "Fashion", count: 8932 },
  { id: "home", name: "Home & Living", count: 6721 },
  { id: "sports", name: "Sports", count: 4567 },
  { id: "books", name: "Books", count: 3892 },
  { id: "toys", name: "Toys", count: 2341 },
];
