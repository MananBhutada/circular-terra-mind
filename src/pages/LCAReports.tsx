import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Share2, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from "recharts";

const impactCategories = [
  { category: "Global Warming", score: 72, unit: "kg CO₂ eq", status: "moderate" },
  { category: "Acidification", score: 45, unit: "kg SO₂ eq", status: "good" },
  { category: "Eutrophication", score: 58, unit: "kg PO₄ eq", status: "moderate" },
  { category: "Ozone Depletion", score: 28, unit: "kg CFC-11 eq", status: "good" },
  { category: "Human Toxicity", score: 82, unit: "CTUh", status: "attention" },
  { category: "Ecotoxicity", score: 67, unit: "CTUe", status: "moderate" },
];

const stageImpacts = [
  { stage: "Extraction", impact: 285, baseline: 320 },
  { stage: "Processing", impact: 420, baseline: 480 },
  { stage: "Transport", impact: 145, baseline: 160 },
  { stage: "Usage", impact: 95, baseline: 110 },
  { stage: "Disposal", impact: 78, baseline: 95 },
];

const LCAReports = () => {
  const getStatusColor = (status: string) => {
    switch(status) {
      case "good": return "bg-accent/20 text-accent border-accent/30";
      case "moderate": return "bg-copper/20 text-copper border-copper/30";
      case "attention": return "bg-destructive/20 text-destructive border-destructive/30";
      default: return "bg-muted";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-glow to-copper bg-clip-text text-transparent">
            LCA Report Generator
          </h1>
          <p className="text-muted-foreground mt-1">
            ISO 14040/44 compliant lifecycle assessment reports with environmental impact analysis
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-primary/20">
            <Share2 className="h-4 w-4 mr-2" />
            Share Report
          </Button>
          <Button className="bg-gradient-primary border-0 hover:shadow-glow transition-all">
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Report Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-primary border-primary/20 shadow-glow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-primary-foreground/70">Overall LCA Score</p>
              <h3 className="text-3xl font-bold text-primary-foreground mt-2">62/100</h3>
              <p className="text-xs text-primary-foreground/60 mt-2">Moderate impact level</p>
            </div>
            <FileText className="h-8 w-8 text-primary-foreground" />
          </div>
        </Card>

        <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Carbon Footprint</p>
              <h3 className="text-3xl font-bold mt-2">1,023</h3>
              <p className="text-xs text-muted-foreground mt-2">tCO₂ equivalent</p>
            </div>
            <TrendingUp className="h-8 w-8 text-accent" />
          </div>
        </Card>

        <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Impact Categories</p>
              <h3 className="text-3xl font-bold mt-2">6</h3>
              <p className="text-xs text-muted-foreground mt-2">Analyzed (TRACI)</p>
            </div>
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
        </Card>

        <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Compliance</p>
              <h3 className="text-3xl font-bold mt-2">100%</h3>
              <p className="text-xs text-muted-foreground mt-2">ISO 14040/44</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-copper" />
          </div>
        </Card>
      </div>

      {/* Impact Assessment Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Lifecycle Stage Impacts
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={stageImpacts}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="stage" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 12 }} />
              <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'Impact Score', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
              <Legend />
              <Bar dataKey="baseline" fill="hsl(var(--muted))" name="Industry Baseline" />
              <Bar dataKey="impact" fill="hsl(var(--primary))" name="Current Operations" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            Environmental Impact Categories
          </h3>
          <div className="space-y-4">
            {impactCategories.map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{item.category}</span>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.score} {item.unit}</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full">
                  <div 
                    className={`h-2 rounded-full ${
                      item.status === 'good' ? 'bg-accent' :
                      item.status === 'moderate' ? 'bg-copper' : 'bg-destructive'
                    }`}
                    style={{ width: `${item.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Detailed Report Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-glass border-border">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-accent" />
            Key Findings
          </h3>
          <ul className="space-y-3">
            <li className="text-sm flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span className="text-muted-foreground">
                Processing stage accounts for 41% of total environmental impact
              </span>
            </li>
            <li className="text-sm flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span className="text-muted-foreground">
                Human toxicity category requires immediate attention (82 CTUh)
              </span>
            </li>
            <li className="text-sm flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span className="text-muted-foreground">
                Current operations 15% better than industry baseline
              </span>
            </li>
            <li className="text-sm flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span className="text-muted-foreground">
                Ozone depletion impact well below regulatory thresholds
              </span>
            </li>
          </ul>
        </Card>

        <Card className="p-6 bg-gradient-glass border-border">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-copper" />
            Improvement Areas
          </h3>
          <ul className="space-y-3">
            <li className="text-sm flex items-start gap-2">
              <span className="text-copper mt-1">•</span>
              <span className="text-muted-foreground">
                Implement advanced filtration to reduce human toxicity by 35%
              </span>
            </li>
            <li className="text-sm flex items-start gap-2">
              <span className="text-copper mt-1">•</span>
              <span className="text-muted-foreground">
                Optimize energy mix to reduce global warming potential by 18%
              </span>
            </li>
            <li className="text-sm flex items-start gap-2">
              <span className="text-copper mt-1">•</span>
              <span className="text-muted-foreground">
                Enhance water treatment to lower eutrophication impact
              </span>
            </li>
            <li className="text-sm flex items-start gap-2">
              <span className="text-copper mt-1">•</span>
              <span className="text-muted-foreground">
                Switch to cleaner transport fuels for 12% emission reduction
              </span>
            </li>
          </ul>
        </Card>

        <Card className="p-6 bg-gradient-primary border-primary/20 shadow-glow">
          <h3 className="font-semibold mb-4 text-primary-foreground flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Report Standards
          </h3>
          <div className="space-y-3 text-primary-foreground/90">
            <div className="flex justify-between text-sm">
              <span>ISO 14040</span>
              <Badge className="bg-primary-foreground/20 text-primary-foreground">✓ Compliant</Badge>
            </div>
            <div className="flex justify-between text-sm">
              <span>ISO 14044</span>
              <Badge className="bg-primary-foreground/20 text-primary-foreground">✓ Compliant</Badge>
            </div>
            <div className="flex justify-between text-sm">
              <span>TRACI Method</span>
              <Badge className="bg-primary-foreground/20 text-primary-foreground">✓ Applied</Badge>
            </div>
            <div className="flex justify-between text-sm">
              <span>ReCiPe 2016</span>
              <Badge className="bg-primary-foreground/20 text-primary-foreground">✓ Applied</Badge>
            </div>
            <div className="flex justify-between text-sm">
              <span>USEtox</span>
              <Badge className="bg-primary-foreground/20 text-primary-foreground">✓ Applied</Badge>
            </div>
          </div>
        </Card>
      </div>

      {/* Recommendations Section */}
      <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
        <h3 className="text-lg font-semibold mb-6">Sustainability Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gradient-eco border border-accent/20">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm text-accent-foreground mb-1">
                    Implement Circular Economy Practices
                  </h4>
                  <p className="text-xs text-accent-foreground/80">
                    Redirect slag and metal tailings to secondary industries. Expected impact reduction: 22% in waste categories.
                  </p>
                  <div className="mt-2 flex gap-2">
                    <Badge className="bg-accent-foreground/20 text-accent-foreground text-xs">
                      Cost: ₹8.5L
                    </Badge>
                    <Badge className="bg-accent-foreground/20 text-accent-foreground text-xs">
                      ROI: 16 months
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-card border border-border">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm mb-1">Energy Efficiency Upgrades</h4>
                  <p className="text-xs text-muted-foreground">
                    Install heat recovery systems and optimize smelting processes. Target: 18% energy reduction.
                  </p>
                  <div className="mt-2 flex gap-2">
                    <Badge variant="outline" className="text-xs">Cost: ₹12L</Badge>
                    <Badge variant="outline" className="text-xs">ROI: 14 months</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-copper mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm mb-1">Advanced Toxicity Controls</h4>
                  <p className="text-xs text-muted-foreground">
                    Upgrade filtration and emission control systems to address high human toxicity scores.
                  </p>
                  <div className="mt-2 flex gap-2">
                    <Badge variant="outline" className="text-xs">Cost: ₹15L</Badge>
                    <Badge variant="outline" className="text-xs">Priority: High</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-card border border-border">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm mb-1">Water Management System</h4>
                  <p className="text-xs text-muted-foreground">
                    Implement closed-loop water recycling to reduce freshwater consumption by 72%.
                  </p>
                  <div className="mt-2 flex gap-2">
                    <Badge variant="outline" className="text-xs">Cost: ₹8.5L</Badge>
                    <Badge variant="outline" className="text-xs">ROI: 22 months</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Export Options */}
      <Card className="p-6 bg-gradient-glass border-border">
        <h3 className="font-semibold mb-4">Export Report Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="border-primary/20 h-auto py-4">
            <div className="text-center">
              <Download className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="font-medium">PDF Report</p>
              <p className="text-xs text-muted-foreground mt-1">Full detailed analysis</p>
            </div>
          </Button>
          <Button variant="outline" className="border-primary/20 h-auto py-4">
            <div className="text-center">
              <FileText className="h-6 w-6 mx-auto mb-2 text-copper" />
              <p className="font-medium">Excel Data</p>
              <p className="text-xs text-muted-foreground mt-1">Raw data & calculations</p>
            </div>
          </Button>
          <Button variant="outline" className="border-primary/20 h-auto py-4">
            <div className="text-center">
              <Share2 className="h-6 w-6 mx-auto mb-2 text-accent" />
              <p className="font-medium">JSON Export</p>
              <p className="text-xs text-muted-foreground mt-1">API integration data</p>
            </div>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LCAReports;
