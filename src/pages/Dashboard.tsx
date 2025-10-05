import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Activity } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const carbonData = [
  { month: "Jan", emissions: 450, offset: 320 },
  { month: "Feb", emissions: 420, offset: 350 },
  { month: "Mar", emissions: 480, offset: 340 },
  { month: "Apr", emissions: 440, offset: 380 },
  { month: "May", emissions: 400, offset: 400 },
  { month: "Jun", emissions: 380, offset: 420 },
];

const lcaStages = [
  { name: "Extraction", value: 35, color: "hsl(var(--destructive))" },
  { name: "Processing", value: 28, color: "hsl(var(--copper))" },
  { name: "Transport", value: 15, color: "hsl(var(--primary))" },
  { name: "Usage", value: 12, color: "hsl(var(--accent))" },
  { name: "Recycling", value: 10, color: "hsl(var(--eco-green))" },
];

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-primary border-primary/20 shadow-glow hover:shadow-[0_0_60px_hsla(215,60%,45%,0.5)] transition-all duration-500">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-primary-foreground/70">Carbon Footprint</p>
              <h3 className="text-3xl font-bold text-primary-foreground mt-2">380 tCO₂</h3>
              <p className="text-xs text-primary-foreground/60 mt-2 flex items-center gap-1">
                <TrendingDown className="h-3 w-3" />
                12% reduction vs last month
              </p>
            </div>
            <div className="p-3 rounded-lg bg-primary-foreground/10">
              <Activity className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-copper border-copper/20 shadow-copper hover:shadow-[0_0_50px_hsla(25,60%,45%,0.4)] transition-all duration-500">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-foreground/70">Circularity Index</p>
              <h3 className="text-3xl font-bold text-secondary-foreground mt-2">78/100</h3>
              <p className="text-xs text-secondary-foreground/60 mt-2 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +5 points improvement
              </p>
            </div>
            <div className="p-3 rounded-lg bg-secondary-foreground/10">
              <BarChart3 className="h-6 w-6 text-secondary-foreground" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-eco border-accent/20 shadow-eco hover:shadow-[0_0_50px_hsla(160,84%,39%,0.45)] transition-all duration-500">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-accent-foreground/70">Carbon Credits</p>
              <h3 className="text-3xl font-bold text-accent-foreground mt-2">₹2.4 Cr</h3>
              <p className="text-xs text-accent-foreground/60 mt-2">Potential via Land X optimization</p>
            </div>
            <div className="p-3 rounded-lg bg-accent-foreground/10">
              <CheckCircle className="h-6 w-6 text-accent-foreground" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-card/80 border-border backdrop-blur-sm hover:shadow-glow transition-all duration-500">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Contamination Risk</p>
              <h3 className="text-3xl font-bold mt-2">Moderate</h3>
              <p className="text-xs text-muted-foreground mt-2">15km radius analysis</p>
            </div>
            <div className="p-3 rounded-lg bg-destructive/10">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>
          </div>
        </Card>
      </div>

      {/* AI Insight Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
          <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">AI Prediction</Badge>
          <h4 className="font-semibold text-lg mb-2">Predicted Contamination Risk</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Based on current mining operations and geological analysis, contamination spread is predicted within a 15km radius affecting 3 major water bodies.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
            </div>
            <span className="text-xs text-muted-foreground">65% Confidence</span>
          </div>
        </Card>

        <Card className="p-6 bg-card/60 backdrop-blur-sm border-copper/20 hover:border-copper/40 transition-all duration-300">
          <Badge className="mb-3 bg-copper/20 text-copper border-copper/30">Circularity Score</Badge>
          <h4 className="font-semibold text-lg mb-2">Material Flow Optimization</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Current circularity index of 78/100 can be improved by reusing slag in cement production and lithium brine residue in ceramic manufacturing.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-copper h-2 rounded-full" style={{ width: "78%" }}></div>
            </div>
            <span className="text-xs text-muted-foreground">78/100</span>
          </div>
        </Card>

        <Card className="p-6 bg-card/60 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300">
          <Badge className="mb-3 bg-accent/20 text-accent border-accent/30">Recommendation</Badge>
          <h4 className="font-semibold text-lg mb-2">Carbon Credit Potential</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Buy/Reforest 12 hectares near XYZ region. Estimated cost: ₹45L with 30-year credit period. High vegetation density and optimal soil carbon retention.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-accent h-2 rounded-full" style={{ width: "92%" }}></div>
            </div>
            <span className="text-xs text-muted-foreground">92% Viability</span>
          </div>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Carbon Emissions vs Offset Tracking
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={carbonData}>
              <defs>
                <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorOffset" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
              <Area type="monotone" dataKey="emissions" stroke="hsl(var(--destructive))" fillOpacity={1} fill="url(#colorEmissions)" name="Emissions (tCO₂)" />
              <Area type="monotone" dataKey="offset" stroke="hsl(var(--accent))" fillOpacity={1} fill="url(#colorOffset)" name="Carbon Offset (tCO₂)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-copper" />
            LCA Stage Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={lcaStages}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {lcaStages.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {lcaStages.map((stage) => (
              <div key={stage.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stage.color }}></div>
                <span className="text-xs text-muted-foreground">{stage.name}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Lifecycle Flow Visualization */}
      <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
        <h3 className="text-lg font-semibold mb-6">Metal Lifecycle Flow</h3>
        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-4">
          {["Extraction", "Refinement", "Transport", "Usage", "Recycling", "Disposal"].map((stage, idx) => (
            <div key={stage} className="flex items-center gap-4 min-w-[120px]">
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full bg-gradient-primary border-2 border-primary flex items-center justify-center shadow-glow">
                  <span className="text-sm font-medium text-primary-foreground">{idx + 1}</span>
                </div>
                <p className="text-xs font-medium text-center">{stage}</p>
              </div>
              {idx < 5 && (
                <div className="flex-1 h-0.5 bg-gradient-to-r from-primary to-copper min-w-[40px]"></div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
