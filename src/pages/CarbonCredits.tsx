import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, MapPin, TrendingUp, DollarSign, Trees } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const landParcels = [
  {
    id: "L-001",
    location: "XYZ Region, Maharashtra",
    area: "12 hectares",
    cost: "₹45 Lakhs",
    creditPeriod: "30 years",
    vegetation: "High",
    soilRetention: "Excellent",
    credits: "₹2.4 Cr",
    viability: 92,
    rainfall: "High",
    distance: "42 km from industrial zone"
  },
  {
    id: "L-002",
    location: "ABC Valley, Gujarat",
    area: "18 hectares",
    cost: "₹62 Lakhs",
    creditPeriod: "25 years",
    vegetation: "Medium",
    soilRetention: "Good",
    credits: "₹1.8 Cr",
    viability: 78,
    rainfall: "Medium",
    distance: "35 km from industrial zone"
  },
  {
    id: "L-003",
    location: "PQR Hills, Karnataka",
    area: "8 hectares",
    cost: "₹28 Lakhs",
    creditPeriod: "20 years",
    vegetation: "High",
    soilRetention: "Very Good",
    credits: "₹1.2 Cr",
    viability: 85,
    rainfall: "Very High",
    distance: "28 km from industrial zone"
  },
];

const creditProjections = [
  { year: "2025", earned: 45, projected: 45 },
  { year: "2026", earned: 0, projected: 62 },
  { year: "2027", earned: 0, projected: 85 },
  { year: "2028", earned: 0, projected: 110 },
  { year: "2029", earned: 0, projected: 142 },
  { year: "2030", earned: 0, projected: 175 },
];

const CarbonCredits = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-eco-green to-eco-teal bg-clip-text text-transparent">
            Carbon Credit Optimizer
          </h1>
          <p className="text-muted-foreground mt-1">
            AI-powered land optimization for maximum carbon offset credits
          </p>
        </div>
        <Badge className="bg-accent/20 text-accent border-accent/30 text-sm px-4 py-2">
          Indian Govt. Policy 2024 Compliant
        </Badge>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-eco border-accent/20 shadow-eco">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-accent-foreground/70">Total Credit Potential</p>
              <h3 className="text-3xl font-bold text-accent-foreground mt-2">₹5.4 Cr</h3>
              <p className="text-xs text-accent-foreground/60 mt-2">Over 30-year period</p>
            </div>
            <DollarSign className="h-8 w-8 text-accent-foreground" />
          </div>
        </Card>

        <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Recommended Land Area</p>
              <h3 className="text-3xl font-bold mt-2">38 ha</h3>
              <p className="text-xs text-muted-foreground mt-2">Across 3 parcels</p>
            </div>
            <MapPin className="h-8 w-8 text-primary" />
          </div>
        </Card>

        <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Initial Investment</p>
              <h3 className="text-3xl font-bold mt-2">₹1.35 Cr</h3>
              <p className="text-xs text-muted-foreground mt-2">Land acquisition cost</p>
            </div>
            <Trees className="h-8 w-8 text-copper" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-primary border-primary/20 shadow-glow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-primary-foreground/70">ROI Projection</p>
              <h3 className="text-3xl font-bold text-primary-foreground mt-2">400%</h3>
              <p className="text-xs text-primary-foreground/60 mt-2 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                Over credit period
              </p>
            </div>
            <Leaf className="h-8 w-8 text-primary-foreground" />
          </div>
        </Card>
      </div>

      {/* Carbon Credit Projections */}
      <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-accent" />
          Carbon Credit Revenue Projections
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={creditProjections}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'Lakhs ₹', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }} 
            />
            <Legend />
            <Bar dataKey="earned" fill="hsl(var(--accent))" name="Earned Credits" />
            <Bar dataKey="projected" fill="hsl(var(--primary))" name="Projected Credits" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Recommended Land Parcels */}
      <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            Recommended Land Parcels
          </h3>
          <Badge className="bg-accent/20 text-accent border-accent/30">
            GIS-Optimized Selection
          </Badge>
        </div>

        <div className="space-y-4">
          {landParcels.map((parcel) => (
            <Card key={parcel.id} className="p-5 bg-gradient-glass border-border hover:border-accent/40 transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-primary/20 text-primary border-primary/30">{parcel.id}</Badge>
                    <h4 className="font-semibold text-lg">{parcel.location}</h4>
                    <div className="ml-auto">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Viability Score:</span>
                        <Badge className={`${parcel.viability >= 90 ? 'bg-accent/20 text-accent' : 'bg-primary/20 text-primary'}`}>
                          {parcel.viability}%
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Area</p>
                      <p className="text-sm font-medium">{parcel.area}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Cost</p>
                      <p className="text-sm font-medium text-copper">{parcel.cost}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Credit Period</p>
                      <p className="text-sm font-medium">{parcel.creditPeriod}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Potential Credits</p>
                      <p className="text-sm font-medium text-accent">{parcel.credits}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <Trees className="h-4 w-4 text-accent" />
                      <div>
                        <p className="text-xs text-muted-foreground">Vegetation</p>
                        <p className="text-xs font-medium">{parcel.vegetation}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-eco-teal" />
                      <div>
                        <p className="text-xs text-muted-foreground">Soil Retention</p>
                        <p className="text-xs font-medium">{parcel.soilRetention}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Rainfall</p>
                        <p className="text-xs font-medium">{parcel.rainfall}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Distance</p>
                        <p className="text-xs font-medium">{parcel.distance}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button size="sm" className="bg-gradient-eco border-0 hover:shadow-eco transition-all">
                    Select Parcel
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary/20">
                    View on Map
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Calculation Methodology */}
      <Card className="p-6 bg-gradient-glass border-border">
        <h3 className="text-lg font-semibold mb-4">Carbon Credit Calculation Methodology</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-sm mb-2 text-accent">Vegetation Density Analysis</h4>
            <p className="text-xs text-muted-foreground">
              GIS-based assessment of existing and potential vegetation cover using satellite imagery and ground surveys. Higher density = more carbon sequestration potential.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-sm mb-2 text-primary">Soil Carbon Retention</h4>
            <p className="text-xs text-muted-foreground">
              Soil type, organic matter content, and moisture levels analyzed for long-term carbon storage capacity. Factors in rainfall patterns and drainage.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-sm mb-2 text-copper">Distance Optimization</h4>
            <p className="text-xs text-muted-foreground">
              Strategic placement away from industrial zones to maximize environmental impact while ensuring accessibility for monitoring and maintenance.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CarbonCredits;
