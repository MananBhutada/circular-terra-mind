import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Layers, Droplets, TreePine, MapPin, AlertCircle, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GISMapper = () => {
  const [activeLayers, setActiveLayers] = useState({
    mines: true,
    rivers: true,
    vegetation: false,
    cities: true,
    industrial: false,
  });

  const toggleLayer = (layer: keyof typeof activeLayers) => {
    setActiveLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-glow to-copper bg-clip-text text-transparent">
            GIS Impact Mapper
          </h1>
          <p className="text-muted-foreground mt-1">
            High-resolution contamination spread & environmental impact analysis
          </p>
        </div>
        <Badge className="bg-primary/20 text-primary border-primary/30 text-sm px-4 py-2">
          Real-time Environmental Data
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map Display */}
        <Card className="lg:col-span-3 p-6 bg-card/60 backdrop-blur-sm border-border">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Interactive Contamination Map
            </h3>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="border-primary/20">
                2D View
              </Button>
              <Button size="sm" variant="default" className="bg-gradient-primary border-0">
                3D Terrain
              </Button>
            </div>
          </div>

          {/* Map Placeholder - In production, integrate Mapbox here */}
          <div className="relative w-full h-[600px] rounded-lg bg-gradient-to-br from-card to-muted border-2 border-border overflow-hidden">
            {/* Simulated Map Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-20 left-20 w-32 h-32 bg-destructive/40 rounded-full blur-3xl animate-pulse-glow"></div>
              <div className="absolute top-40 right-40 w-40 h-40 bg-primary/40 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-40 w-36 h-36 bg-accent/40 rounded-full blur-3xl"></div>
            </div>

            {/* Mine Location Markers */}
            <div className="absolute top-1/4 left-1/3 group cursor-pointer">
              <div className="w-4 h-4 bg-destructive rounded-full shadow-[0_0_20px_rgba(239,68,68,0.6)] animate-pulse-glow"></div>
              <div className="absolute bottom-full mb-2 hidden group-hover:block">
                <Card className="p-3 min-w-[200px] bg-card/95 backdrop-blur-sm">
                  <p className="font-semibold text-sm">Primary Mine Site</p>
                  <p className="text-xs text-muted-foreground mt-1">Risk Level: High</p>
                  <p className="text-xs text-muted-foreground">Contamination Radius: 15km</p>
                </Card>
              </div>
            </div>

            {/* River Path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path
                d="M 100 300 Q 250 250, 400 300 T 700 350"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
                className="opacity-60"
              />
            </svg>

            {/* Contamination Radius Circles */}
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2">
              <div className="w-48 h-48 border-2 border-destructive/30 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-64 h-64 border border-destructive/20 rounded-full"></div>
              <div className="absolute inset-0 w-80 h-80 border border-destructive/10 rounded-full"></div>
            </div>

            {/* Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <Card className="p-3 bg-card/95 backdrop-blur-sm flex-1">
                <div className="flex items-center gap-2 text-sm">
                  <AlertCircle className="h-4 w-4 text-destructive" />
                  <span className="font-medium">3 Water Bodies</span>
                  <span className="text-muted-foreground">potentially affected</span>
                </div>
              </Card>
              <Card className="p-3 bg-card/95 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm">
                  <Info className="h-4 w-4 text-primary" />
                  <span className="font-medium">15km Radius Analysis</span>
                </div>
              </Card>
            </div>
          </div>
        </Card>

        {/* Layer Controls & Info */}
        <div className="space-y-6">
          <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              Map Layers
            </h3>
            <div className="space-y-3">
              {Object.entries(activeLayers).map(([key, value]) => {
                const icons = {
                  mines: MapPin,
                  rivers: Droplets,
                  vegetation: TreePine,
                  cities: Layers,
                  industrial: AlertCircle,
                };
                const Icon = icons[key as keyof typeof icons];
                return (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${value ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className="text-sm capitalize">{key}</span>
                    </div>
                    <Button
                      size="sm"
                      variant={value ? "default" : "outline"}
                      onClick={() => toggleLayer(key as keyof typeof activeLayers)}
                      className={value ? "bg-primary" : ""}
                    >
                      {value ? "ON" : "OFF"}
                    </Button>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-primary border-primary/20 shadow-glow">
            <h3 className="text-lg font-semibold mb-3 text-primary-foreground">Contamination Analysis</h3>
            <div className="space-y-3 text-primary-foreground/90">
              <div className="flex justify-between text-sm">
                <span>Spread Radius</span>
                <span className="font-semibold">15.2 km</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Affected Area</span>
                <span className="font-semibold">725 km²</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Water Bodies</span>
                <span className="font-semibold">3 Major</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Risk Level</span>
                <Badge className="bg-destructive text-destructive-foreground">Moderate</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
            <h3 className="text-lg font-semibold mb-3">Environmental Data</h3>
            <Tabs defaultValue="rainfall" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="rainfall">Rainfall</TabsTrigger>
                <TabsTrigger value="wind">Wind</TabsTrigger>
              </TabsList>
              <TabsContent value="rainfall" className="space-y-2 mt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Current</span>
                  <span className="font-medium">125 mm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Average</span>
                  <span className="font-medium">98 mm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Trend</span>
                  <Badge className="bg-accent/20 text-accent">+27% Above Avg</Badge>
                </div>
              </TabsContent>
              <TabsContent value="wind" className="space-y-2 mt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Speed</span>
                  <span className="font-medium">12 km/h</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Direction</span>
                  <span className="font-medium">NE</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Impact</span>
                  <Badge className="bg-primary/20 text-primary">Low</Badge>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GISMapper;
