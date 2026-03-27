export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: "groceries" | "household" | "essentials";
  image: string;
  badge?: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Fresh Organic Tomatoes",
    price: 8.99,
    originalPrice: 12.99,
    category: "groceries",
    image: "https://images.unsplash.com/photo-1546470427-0d4db154ceb8?w=400&h=400&fit=crop",
    badge: "30% OFF",
    description: "Farm-fresh organic tomatoes, perfect for salads and cooking.",
  },
  {
    id: "2",
    name: "Whole Wheat Bread",
    price: 4.50,
    category: "groceries",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
    description: "Freshly baked whole wheat bread, soft and nutritious.",
  },
  {
    id: "3",
    name: "Full Cream Milk 1L",
    price: 6.25,
    originalPrice: 7.50,
    category: "groceries",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop",
    badge: "SALE",
    description: "Rich and creamy full cream milk, 1 liter pack.",
  },
  {
    id: "4",
    name: "Fresh Bananas (1kg)",
    price: 5.99,
    category: "groceries",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
    description: "Sweet and ripe bananas, perfect for snacking.",
  },
  {
    id: "5",
    name: "Organic Eggs (12 pack)",
    price: 14.99,
    category: "groceries",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop",
    description: "Free-range organic eggs, rich in protein.",
  },
  {
    id: "6",
    name: "Basmati Rice 5kg",
    price: 24.99,
    originalPrice: 29.99,
    category: "groceries",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    badge: "BEST DEAL",
    description: "Premium long-grain basmati rice.",
  },
  {
    id: "7",
    name: "Multi-Surface Cleaner",
    price: 12.99,
    category: "household",
    image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=400&fit=crop",
    description: "All-purpose cleaning spray for every surface.",
  },
  {
    id: "8",
    name: "Dishwashing Liquid 1L",
    price: 9.50,
    originalPrice: 12.00,
    category: "household",
    image: "https://images.unsplash.com/photo-1622557850710-31f83ea39e24?w=400&h=400&fit=crop",
    badge: "20% OFF",
    description: "Powerful grease-cutting dishwashing liquid.",
  },
  {
    id: "9",
    name: "Laundry Detergent 3kg",
    price: 34.99,
    category: "household",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0eb7?w=400&h=400&fit=crop",
    description: "High-efficiency laundry detergent for all fabrics.",
  },
  {
    id: "10",
    name: "Paper Towel Rolls (6 pack)",
    price: 15.99,
    category: "household",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=400&fit=crop",
    description: "Super absorbent paper towels, 6-pack.",
  },
  {
    id: "11",
    name: "Toothpaste (Mint)",
    price: 7.99,
    category: "essentials",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
    description: "Refreshing mint toothpaste for healthy teeth.",
  },
  {
    id: "12",
    name: "Hand Soap (Antibacterial)",
    price: 5.99,
    originalPrice: 8.99,
    category: "essentials",
    image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=400&h=400&fit=crop",
    badge: "33% OFF",
    description: "Antibacterial hand soap, keeps hands clean.",
  },
  {
    id: "13",
    name: "Shampoo 500ml",
    price: 18.99,
    category: "essentials",
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop",
    description: "Nourishing shampoo for all hair types.",
  },
  {
    id: "14",
    name: "Facial Tissues (Box)",
    price: 6.50,
    category: "essentials",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop",
    description: "Soft facial tissues, 200-sheet box.",
  },
  {
    id: "15",
    name: "Hand Sanitizer 250ml",
    price: 9.99,
    category: "essentials",
    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400&h=400&fit=crop",
    badge: "NEW",
    description: "99.9% germ-killing hand sanitizer.",
  },
];
