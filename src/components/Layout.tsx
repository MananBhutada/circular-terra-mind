import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Map, 
  Recycle, 
  Leaf, 
  Brain, 
  MapPin, 
  FileText,
  Activity
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "GIS Mapper", href: "/gis-mapper", icon: Map },
  { name: "Circularity", href: "/circularity", icon: Recycle },
  { name: "Carbon Credits", href: "/carbon-credits", icon: Leaf },
  { name: "AI Recommendations", href: "/ai-recommendations", icon: Brain },
  { name: "Treatment Locator", href: "/treatment-locator", icon: MapPin },
  { name: "LCA Reports", href: "/lca-reports", icon: FileText },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-xl bg-card/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary shadow-glow">
                <Activity className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary-glow to-copper bg-clip-text text-transparent">
                  Metallurgy LCA Platform
                </h1>
                <p className="text-xs text-muted-foreground">Circular Economy & Sustainability Intelligence</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
                <p className="text-sm font-medium text-accent">Smart India Hackathon 2025</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-xl bg-card/40">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-1 overflow-x-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-300 border-b-2 whitespace-nowrap",
                    isActive
                      ? "border-primary text-primary shadow-glow bg-primary/5"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/40 backdrop-blur-xl mt-20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© 2025 Metallurgy LCA Platform • Powered by AI & GIS Intelligence</p>
            <p>Industry-Grade Sustainability Analytics</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
