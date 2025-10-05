import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Truck, Clock, DollarSign, CheckCircle } from "lucide-react";

const recommendedLocations = [
  {
    id: "TL-001",
    name: "Central Recycling Hub - Proposed",
    coords: { lat: 19.0760, lng: 72.8777 },
    type: "Recycling Center",
    priority: "high",
    status: "Recommended",
    coverage: "250km radius",
    population: "2.4M people",
    terrain: "Flat, Industrial Zone",
    accessibility: "Excellent - 3 highways",
    cost: "₹8.5 Cr",
    capacity: "500 tonnes/day",
    distance: "42km from mining site",
    benefits: [
      "Optimal population coverage",
      "Excellent road network access",
      "Proximity to industrial clusters",
      "Suitable terrain for facility"
    ]
  },
  {
    id: "TL-002",
    name: "Eastern Treatment Facility - Proposed",
    coords: { lat: 18.5204, lng: 73.8567 },
    type: "Treatment Plant",
    priority: "medium",
    status: "Alternative",
    coverage: "180km radius",
    population: "1.8M people",
    terrain: "Hilly, Mixed Use",
    accessibility: "Good - 2 highways",
    cost: "₹6.2 Cr",
    capacity: "320 tonnes/day",
    distance: "68km from mining site",
    benefits: [
      "Lower establishment cost",
      "Good population coverage",
      "Strategic location for eastern region",
      "Moderate terrain challenges"
    ]
  },
  {
    id: "TL-003",
    name: "Northern Processing Center - Proposed",
    coords: { lat: 20.5937, lng: 78.9629 },
    type: "Processing Center",
    priority: "low",
    status: "Future Expansion",
    coverage: "320km radius",
    population: "3.2M people",
    terrain: "Flat, Agricultural Border",
    accessibility: "Fair - 1 highway, rural roads",
    cost: "₹5.8 Cr",
    capacity: "280 tonnes/day",
    distance: "95km from mining site",
    benefits: [
      "Largest coverage area",
      "Cost-effective location",
      "Serves underserved regions",
      "Expansion potential"
    ]
  }
];

const TreatmentLocator = () => {
  const [selectedLocation, setSelectedLocation] = useState(recommendedLocations[0]);

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case "high": return "bg-accent/20 text-accent border-accent/30";
      case "medium": return "bg-copper/20 text-copper border-copper/30";
      case "low": return "bg-primary/20 text-primary border-primary/30";
      default: return "bg-muted";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
            Treatment & Recycling Locator
          </h1>
          <p className="text-muted-foreground mt-1">
            GIS-powered optimal location analysis for recycling and treatment facilities
          </p>
        </div>
        <Badge className="bg-primary/20 text-primary border-primary/30 text-sm px-4 py-2">
          Clustering Algorithm Optimized
        </Badge>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-primary border-primary/20 shadow-glow">
          <div className="text-center">
            <MapPin className="h-8 w-8 text-primary-foreground mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-primary-foreground">3</h3>
            <p className="text-sm text-primary-foreground/70">Recommended Locations</p>
          </div>
        </Card>

        <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
          <div className="text-center">
            <Truck className="h-8 w-8 text-copper mx-auto mb-2" />
            <h3 className="text-3xl font-bold">1,100</h3>
            <p className="text-sm text-muted-foreground">tonnes/day Total Capacity</p>
          </div>
        </Card>

        <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
          <div className="text-center">
            <DollarSign className="h-8 w-8 text-accent mx-auto mb-2" />
            <h3 className="text-3xl font-bold">₹20.5 Cr</h3>
            <p className="text-sm text-muted-foreground">Total Investment Required</p>
          </div>
        </Card>

        <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
          <div className="text-center">
            <CheckCircle className="h-8 w-8 text-accent mx-auto mb-2" />
            <h3 className="text-3xl font-bold">7.4M</h3>
            <p className="text-sm text-muted-foreground">People in Coverage Area</p>
          </div>
        </Card>
      </div>

      {/* Map and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Display */}
        <Card className="lg:col-span-2 p-6 bg-card/60 backdrop-blur-sm border-border">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Navigation className="h-5 w-5 text-primary" />
            Location Analysis Map
          </h3>

          {/* Map Placeholder */}
          <div className="relative w-full h-[600px] rounded-lg bg-gradient-to-br from-card to-muted border-2 border-border overflow-hidden">
            {/* Simulated Map */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 left-1/4 w-40 h-40 bg-accent/40 rounded-full blur-3xl animate-pulse-glow"></div>
              <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-copper/40 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-1/2 w-36 h-36 bg-primary/40 rounded-full blur-3xl"></div>
            </div>

            {/* Location Markers */}
            {recommendedLocations.map((loc, idx) => {
              const positions = [
                { top: "30%", left: "35%" },
                { top: "50%", left: "60%" },
                { top: "70%", left: "25%" }
              ];
              const pos = positions[idx];
              
              return (
                <div 
                  key={loc.id}
                  className={`absolute cursor-pointer group transition-all ${selectedLocation.id === loc.id ? 'z-10' : 'z-0'}`}
                  style={{ top: pos.top, left: pos.left }}
                  onClick={() => setSelectedLocation(loc)}
                >
                  <div className={`w-6 h-6 rounded-full shadow-lg animate-pulse-glow ${
                    loc.priority === 'high' ? 'bg-accent' :
                    loc.priority === 'medium' ? 'bg-copper' : 'bg-primary'
                  }`}></div>
                  
                  {/* Coverage Circle */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
                    loc.priority === 'high' ? 'border-accent/30' :
                    loc.priority === 'medium' ? 'border-copper/30' : 'border-primary/30'
                  }`} style={{ width: '200px', height: '200px' }}></div>

                  {/* Info Popup */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block">
                    <Card className="p-3 min-w-[220px] bg-card/95 backdrop-blur-sm">
                      <p className="font-semibold text-sm mb-1">{loc.name}</p>
                      <p className="text-xs text-muted-foreground">{loc.type}</p>
                      <p className="text-xs text-muted-foreground mt-1">Coverage: {loc.coverage}</p>
                      <Badge className={`mt-2 ${getPriorityColor(loc.priority)}`}>
                        {loc.priority.toUpperCase()}
                      </Badge>
                    </Card>
                  </div>
                </div>
              );
            })}

            {/* Route Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
              <line x1="35%" y1="30%" x2="60%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="35%" y1="30%" x2="25%" y2="70%" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="60%" y1="50%" x2="25%" y2="70%" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
            </svg>

            {/* Legend */}
            <Card className="absolute bottom-4 left-4 p-3 bg-card/95 backdrop-blur-sm">
              <p className="text-xs font-medium mb-2">Priority Levels</p>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span>High Priority</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 bg-copper rounded-full"></div>
                  <span>Medium Priority</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Low Priority</span>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        {/* Selected Location Details */}
        <div className="space-y-6">
          <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between mb-4">
              <Badge className={getPriorityColor(selectedLocation.priority)}>
                {selectedLocation.priority.toUpperCase()} PRIORITY
              </Badge>
              <Badge variant="outline">{selectedLocation.status}</Badge>
            </div>
            
            <h3 className="text-lg font-semibold mb-3">{selectedLocation.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{selectedLocation.type}</p>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Coverage Area</span>
                <span className="font-medium">{selectedLocation.coverage}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Population Served</span>
                <span className="font-medium">{selectedLocation.population}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Capacity</span>
                <span className="font-medium">{selectedLocation.capacity}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Estimated Cost</span>
                <span className="font-medium text-copper">{selectedLocation.cost}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Distance from Mine</span>
                <span className="font-medium">{selectedLocation.distance}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-primary border-primary/20 shadow-glow">
            <h4 className="font-semibold mb-3 text-primary-foreground">Location Factors</h4>
            <div className="space-y-2 text-primary-foreground/90">
              <div className="flex justify-between text-sm">
                <span>Terrain</span>
                <span className="font-medium">{selectedLocation.terrain}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Road Access</span>
                <span className="font-medium">{selectedLocation.accessibility}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              Key Benefits
            </h4>
            <ul className="space-y-2">
              {selectedLocation.benefits.map((benefit, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Button className="w-full bg-gradient-eco border-0 hover:shadow-eco transition-all">
            Generate Full Report
          </Button>
        </div>
      </div>

      {/* Location Comparison */}
      <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
        <h3 className="text-lg font-semibold mb-6">Location Comparison Matrix</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 text-sm font-medium">Location</th>
                <th className="text-left p-3 text-sm font-medium">Priority</th>
                <th className="text-left p-3 text-sm font-medium">Coverage</th>
                <th className="text-left p-3 text-sm font-medium">Population</th>
                <th className="text-left p-3 text-sm font-medium">Capacity</th>
                <th className="text-left p-3 text-sm font-medium">Cost</th>
                <th className="text-left p-3 text-sm font-medium">Distance</th>
              </tr>
            </thead>
            <tbody>
              {recommendedLocations.map((loc) => (
                <tr 
                  key={loc.id} 
                  className="border-b border-border/50 hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => setSelectedLocation(loc)}
                >
                  <td className="p-3 text-sm font-medium">{loc.name}</td>
                  <td className="p-3">
                    <Badge className={getPriorityColor(loc.priority)}>
                      {loc.priority}
                    </Badge>
                  </td>
                  <td className="p-3 text-sm">{loc.coverage}</td>
                  <td className="p-3 text-sm">{loc.population}</td>
                  <td className="p-3 text-sm">{loc.capacity}</td>
                  <td className="p-3 text-sm text-copper font-medium">{loc.cost}</td>
                  <td className="p-3 text-sm">{loc.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default TreatmentLocator;
