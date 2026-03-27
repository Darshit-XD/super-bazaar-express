import { useState } from "react";
import { BarChart3, Package, ShoppingCart, Users, Truck, Plus, Pencil, Trash2, DollarSign } from "lucide-react";

const stats = [
  { label: "Total Revenue", value: "AED 45,230", icon: DollarSign, color: "text-primary" },
  { label: "Total Orders", value: "312", icon: ShoppingCart, color: "text-accent" },
  { label: "Total Products", value: "156", icon: Package, color: "text-primary" },
  { label: "Customers", value: "89", icon: Users, color: "text-accent" },
];

const AdminPage = () => {
  const [tab, setTab] = useState<"dashboard" | "products" | "orders" | "delivery">("dashboard");

  return (
    <main className="container py-8">
      <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
      <p className="text-sm text-muted-foreground mb-8">Manage your store, products, and orders.</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {[
          { key: "dashboard", label: "Dashboard", icon: BarChart3 },
          { key: "products", label: "Products", icon: Package },
          { key: "orders", label: "Orders", icon: ShoppingCart },
          { key: "delivery", label: "Delivery", icon: Truck },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key as any)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              tab === t.key ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-primary/10"
            }`}
          >
            <t.icon className="w-4 h-4" />
            {t.label}
          </button>
        ))}
      </div>

      {/* Dashboard */}
      {tab === "dashboard" && (
        <div className="space-y-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card rounded-xl border border-border shadow-card p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-lg bg-secondary flex items-center justify-center ${s.color}`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-card rounded-xl border border-border shadow-card p-6">
            <h3 className="font-bold text-foreground mb-4">Weekly Sales Overview</h3>
            <div className="flex items-end gap-2 h-40">
              {[40, 65, 55, 80, 70, 90, 60].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full rounded-t-lg bg-primary/80 transition-all hover:bg-primary" style={{ height: `${h}%` }} />
                  <span className="text-xs text-muted-foreground">{["M", "T", "W", "T", "F", "S", "S"][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Products */}
      {tab === "products" && (
        <div className="space-y-4">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
            <Plus className="w-4 h-4" /> Add Product
          </button>
          <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left p-4 font-semibold text-foreground">Product</th>
                  <th className="text-left p-4 font-semibold text-foreground">Category</th>
                  <th className="text-left p-4 font-semibold text-foreground">Price</th>
                  <th className="text-right p-4 font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Fresh Tomatoes", category: "Groceries", price: "8.99" },
                  { name: "Laundry Detergent", category: "Household", price: "34.99" },
                  { name: "Hand Sanitizer", category: "Essentials", price: "9.99" },
                ].map((p, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="p-4 text-foreground font-medium">{p.name}</td>
                    <td className="p-4 text-muted-foreground">{p.category}</td>
                    <td className="p-4 text-primary font-semibold">AED {p.price}</td>
                    <td className="p-4 text-right">
                      <button className="p-1.5 hover:bg-primary/10 rounded-lg text-muted-foreground hover:text-primary mr-1"><Pencil className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-destructive/10 rounded-lg text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Orders */}
      {tab === "orders" && (
        <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="text-left p-4 font-semibold text-foreground">Order ID</th>
                <th className="text-left p-4 font-semibold text-foreground">Customer</th>
                <th className="text-left p-4 font-semibold text-foreground">Total</th>
                <th className="text-left p-4 font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "ORD-001", customer: "Ahmed K.", total: "67.48", status: "Packed" },
                { id: "ORD-002", customer: "Sara M.", total: "124.97", status: "Delivered" },
                { id: "ORD-003", customer: "John D.", total: "45.00", status: "Processing" },
              ].map((o) => (
                <tr key={o.id} className="border-t border-border">
                  <td className="p-4 font-medium text-foreground">{o.id}</td>
                  <td className="p-4 text-muted-foreground">{o.customer}</td>
                  <td className="p-4 text-primary font-semibold">AED {o.total}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      o.status === "Delivered" ? "bg-primary/10 text-primary" :
                      o.status === "Packed" ? "bg-accent/10 text-accent" :
                      "bg-secondary text-muted-foreground"
                    }`}>{o.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Delivery */}
      {tab === "delivery" && (
        <div className="space-y-4">
          {[
            { id: "ORD-001", customer: "Ahmed K.", address: "Jebel Ali, Dubai", status: "Out for Delivery" },
            { id: "ORD-003", customer: "John D.", address: "Marina, Dubai", status: "Processing" },
          ].map((d) => (
            <div key={d.id} className="bg-card rounded-xl border border-border shadow-card p-5 flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-foreground">{d.id} — {d.customer}</p>
                <p className="text-sm text-muted-foreground">{d.address}</p>
              </div>
              <select defaultValue={d.status} className="px-3 py-2 rounded-xl bg-secondary border border-border text-sm text-foreground focus:outline-none">
                <option>Processing</option>
                <option>Packed</option>
                <option>Out for Delivery</option>
                <option>Delivered</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default AdminPage;
