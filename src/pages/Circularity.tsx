import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Recycle, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from "recharts";

const circularityData = [
  { subject: "Material Reuse", A: 78, fullMark: 100 },
  { subject: "Recycling Rate", A: 85, fullMark: 100 },
  { subject: "Recovery Efficiency", A: 72, fullMark: 100 },
  { subject: "Waste Reduction", A: 80, fullMark: 100 },
  { subject: "Resource Efficiency", A: 75, fullMark: 100 },
  { subject: "Design for Circularity", A: 68, fullMark: 100 },
];

const materialFlows = [
  { material: "Slag", current: "Waste", suggested: "Cement Production", potential: "₹45L/year", impact: 85 },
  { material: "Lithium Brine Residue", current: "Disposal", suggested: "Ceramic Manufacturing", potential: "₹32L/year", impact: 78 },
  { material: "Metal Tailings", current: "Stockpile", suggested: "Construction Aggregate", potential: "₹28L/year", impact: 72 },
  { material: "Process Water", current: "Discharge", suggested: "Closed-loop Recycling", potential: "₹18L/year", impact: 90 },
];

const Circularity = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-accent to-eco-teal bg-clip-text text-transparent">
            Circularity Analyzer
          </h1>
          <p className="text-muted-foreground mt-1">
            Material flow optimization & circular economy intelligence
          </p>
        </div>
        <Card className="p-4 bg-gradient-eco border-accent/20 shadow-eco">
          <div className="text-center">
            <p className="text-sm text-accent-foreground/70">Circularity Index</p>
            <h2 className="text-4xl font-bold text-accent-foreground">78</h2>
            <p className="text-xs text-accent-foreground/70">/100</p>
          </div>
        </Card>
      </div>

      {/* Circularity Score Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Recycle className="h-5 w-5 text-accent" />
            Circularity Performance Radar
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={circularityData}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <Radar name="Current Score" dataKey="A" stroke="hsl(var(--accent))" fill="hsl(var(--accent))" fillOpacity={0.6} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
            </RadarChart>
          </ResponsiveContainer>
        </Card>

        <div className="space-y-4">
          <Card className="p-6 bg-gradient-eco border-accent/20 shadow-eco">
            <h3 className="text-lg font-semibold mb-4 text-accent-foreground">Key Insights</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-accent-foreground">High Recycling Rate</p>
                  <p className="text-xs text-accent-foreground/80">85% of materials are being recycled effectively</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-accent-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-accent-foreground">Improvement Potential</p>
                  <p className="text-xs text-accent-foreground/80">Design for circularity can be enhanced by 22 points</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Recycle className="h-5 w-5 text-accent-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-accent-foreground">Material Flow Optimization</p>
                  <p className="text-xs text-accent-foreground/80">4 major waste streams identified for circular reuse</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
            <h3 className="text-lg font-semibold mb-4">Circular Economy Impact</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Waste Reduction</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-muted rounded-full">
                    <div className="h-2 bg-accent rounded-full" style={{ width: "80%" }}></div>
                  </div>
                  <span className="text-sm font-medium">80%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Resource Efficiency</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-muted rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <span className="text-sm font-medium">75%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Economic Value Created</span>
                <Badge className="bg-accent/20 text-accent">₹1.23 Cr/year</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Material Flow Recommendations */}
      <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <ArrowRight className="h-5 w-5 text-copper" />
            Circular Design Modifications
          </h3>
          <Badge className="bg-copper/20 text-copper border-copper/30">
            AI-Powered Recommendations
          </Badge>
        </div>

        <div className="space-y-4">
          {materialFlows.map((flow, idx) => (
            <Card key={idx} className="p-5 bg-gradient-glass border-border hover:border-primary/40 transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold">{flow.material}</h4>
                    <Badge variant="outline" className="text-xs">{flow.potential}</Badge>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Current:</span>
                      <Badge variant="outline" className="text-xs bg-destructive/10 text-destructive border-destructive/30">
                        {flow.current}
                      </Badge>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Suggested:</span>
                      <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/30">
                        {flow.suggested}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Environmental Impact:</span>
                    <div className="flex-1 max-w-[200px] h-1.5 bg-muted rounded-full">
                      <div 
                        className="h-1.5 bg-accent rounded-full" 
                        style={{ width: `${flow.impact}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium">{flow.impact}% Positive</span>
                  </div>
                </div>
                <Button size="sm" className="bg-gradient-eco border-0 hover:shadow-eco transition-all">
                  Implement
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Material Circularity Indicator */}
      <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
        <h3 className="text-lg font-semibold mb-6">Material Circularity Indicator (MCI)</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary flex items-center justify-center shadow-glow mb-3">
              <span className="text-2xl font-bold text-primary-foreground">0.78</span>
            </div>
            <p className="text-sm font-medium">MCI Score</p>
            <p className="text-xs text-muted-foreground">Target: 0.85</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-copper flex items-center justify-center shadow-copper mb-3">
              <span className="text-2xl font-bold text-secondary-foreground">92%</span>
            </div>
            <p className="text-sm font-medium">Virgin Input</p>
            <p className="text-xs text-muted-foreground">Recycled content</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-eco flex items-center justify-center shadow-eco mb-3">
              <span className="text-2xl font-bold text-accent-foreground">15%</span>
            </div>
            <p className="text-sm font-medium">Linear Flow</p>
            <p className="text-xs text-muted-foreground">Waste leakage</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-card border-2 border-border flex items-center justify-center mb-3">
              <span className="text-2xl font-bold">3.2x</span>
            </div>
            <p className="text-sm font-medium">Utility Factor</p>
            <p className="text-xs text-muted-foreground">Product lifetime</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Circularity;
