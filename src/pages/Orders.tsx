import { Package, CheckCircle2, Truck, Clock } from "lucide-react";

const mockOrders = [
  {
    id: "ORD-2026-001",
    date: "2026-03-25",
    total: 67.48,
    items: 5,
    status: "out_for_delivery" as const,
  },
  {
    id: "ORD-2026-002",
    date: "2026-03-22",
    total: 124.97,
    items: 8,
    status: "delivered" as const,
  },
];

const statusSteps = ["processing", "packed", "out_for_delivery", "delivered"] as const;
const statusLabels: Record<string, string> = {
  processing: "Processing",
  packed: "Packed",
  out_for_delivery: "Out for Delivery",
  delivered: "Delivered",
};
const statusIcons: Record<string, any> = {
  processing: Clock,
  packed: Package,
  out_for_delivery: Truck,
  delivered: CheckCircle2,
};

const OrdersPage = () => (
  <main className="container py-8 max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold text-foreground mb-8">My Orders</h1>

    {mockOrders.length === 0 ? (
      <div className="text-center py-20 text-muted-foreground">
        <Package className="w-16 h-16 mx-auto mb-4" />
        <p className="text-lg">No orders yet</p>
      </div>
    ) : (
      <div className="space-y-6">
        {mockOrders.map((order) => {
          const currentIdx = statusSteps.indexOf(order.status);
          return (
            <div key={order.id} className="bg-card rounded-xl border border-border shadow-card p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-foreground">{order.id}</p>
                  <p className="text-xs text-muted-foreground">{order.date} · {order.items} items</p>
                </div>
                <p className="font-bold text-primary">AED {order.total.toFixed(2)}</p>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="absolute top-4 left-0 right-0 h-1 bg-secondary rounded-full" />
                <div
                  className="absolute top-4 left-0 h-1 bg-primary rounded-full transition-all duration-700"
                  style={{ width: `${(currentIdx / (statusSteps.length - 1)) * 100}%` }}
                />
                <div className="relative flex justify-between">
                  {statusSteps.map((step, i) => {
                    const Icon = statusIcons[step];
                    const isActive = i <= currentIdx;
                    return (
                      <div key={step} className="flex flex-col items-center gap-1.5">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"} transition-colors`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className={`text-xs font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                          {statusLabels[step]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )}
  </main>
);

export default OrdersPage;
