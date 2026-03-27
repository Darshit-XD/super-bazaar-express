import { motion } from "framer-motion";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <motion.div
      className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-xs font-bold bg-accent text-accent-foreground">
          {product.badge}
        </span>
      )}
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 space-y-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{product.category}</p>
        <h3 className="font-semibold text-foreground leading-tight line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">AED {product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">AED {product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <button
          onClick={handleAdd}
          className={`w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ripple-effect ${
            added
              ? "bg-primary text-primary-foreground"
              : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          {added ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
          {added ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
