import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import catGroceries from "@/assets/category-groceries.jpg";
import catHousehold from "@/assets/category-household.jpg";
import catEssentials from "@/assets/category-essentials.jpg";

const categories = [
  { name: "Groceries", slug: "groceries", image: catGroceries, color: "from-primary/80 to-primary" },
  { name: "Household Items", slug: "household", image: catHousehold, color: "from-accent/80 to-accent" },
  { name: "Daily Essentials", slug: "essentials", image: catEssentials, color: "from-primary/60 to-accent/60" },
];

const CategorySection = () => (
  <section className="container py-12">
    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Shop by Category</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
        >
          <Link
            to={`/products?category=${cat.slug}`}
            className="group relative block rounded-2xl overflow-hidden aspect-[4/3] shadow-card hover:shadow-card-hover transition-shadow"
          >
            <img src={cat.image} alt={cat.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-background">{cat.name}</h3>
              <p className="text-background/80 text-sm mt-1">Browse products →</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CategorySection;
