import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, TrendingUp, AlertCircle, CheckCircle, Sparkles } from "lucide-react";

const recommendations = [
  {
    id: "R-001",
    category: "Process Optimization",
    priority: "high",
    title: "Reduce Smelting Energy Consumption by 18%",
    description: "AI analysis suggests implementing heat recovery systems in primary smelting operations. This can reduce energy consumption by 18% and lower carbon emissions by 42 tCO₂/month.",
    impact: {
      energy: "-18%",
      cost: "₹12L/year saved",
      carbon: "-42 tCO₂/month",
      roi: "14 months"
    },
    confidence: 94,
    implementation: "Medium complexity - requires equipment upgrade and process retuning"
  },
  {
    id: "R-002",
    category: "Resource Redistribution",
    priority: "high",
    title: "Redirect Slag By-products to Cement Industry",
    description: "Current slag disposal can be transformed into revenue stream. Partner with cement manufacturers within 50km radius to supply 85% of slag production.",
    impact: {
      waste: "-85%",
      revenue: "₹45L/year",
      carbon: "-28 tCO₂/month",
      partners: "3 manufacturers"
    },
    confidence: 89,
    implementation: "Low complexity - partnership agreements and logistics setup"
  },
  {
    id: "R-003",
    category: "Circular Economy",
    priority: "medium",
    title: "Implement Closed-Loop Water Recycling",
    description: "Install water treatment and recycling system to reduce freshwater consumption by 72%. System pays for itself through reduced water costs and regulatory benefits.",
    impact: {
      water: "-72%",
      cost: "₹8.5L/year saved",
      compliance: "+100%",
      roi: "22 months"
    },
    confidence: 91,
    implementation: "Medium complexity - requires infrastructure investment"
  },
  {
    id: "R-004",
    category: "Process Optimization",
    priority: "medium",
    title: "Optimize Transport Routes for Raw Materials",
    description: "AI route optimization can reduce transportation emissions by 23% through intelligent scheduling and route planning. Reduces fuel costs and improves delivery times.",
    impact: {
      emissions: "-23%",
      fuel: "₹6.2L/year saved",
      efficiency: "+15%",
      carbon: "-18 tCO₂/month"
    },
    confidence: 87,
    implementation: "Low complexity - software integration and driver training"
  },
  {
    id: "R-005",
    category: "Circular Economy Incentive",
    priority: "low",
    title: "Carbon Credit Trading Opportunity",
    description: "Based on current operations and planned optimizations, qualify for carbon credit trading. Estimated additional revenue of ₹2.4 Cr over 5-year period.",
    impact: {
      credits: "₹2.4 Cr",
      period: "5 years",
      roi: "Immediate",
      compliance: "Govt. approved"
    },
    confidence: 82,
    implementation: "Low complexity - documentation and certification process"
  }
];

const AIRecommendations = () => {
  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case "high": return "bg-destructive/20 text-destructive border-destructive/30";
      case "medium": return "bg-copper/20 text-copper border-copper/30";
      case "low": return "bg-primary/20 text-primary border-primary/30";
      default: return "bg-muted";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-glow via-copper to-accent bg-clip-text text-transparent">
            AI Recommendation Engine
          </h1>
          <p className="text-muted-foreground mt-1">
            Machine learning-driven insights for process optimization & sustainability
          </p>
        </div>
        <Badge className="bg-primary/20 text-primary border-primary/30 text-sm px-4 py-2 flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          AI-Powered Analytics
        </Badge>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-primary border-primary/20 shadow-glow">
          <div className="text-center">
            <Brain className="h-8 w-8 text-primary-foreground mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-primary-foreground">5</h3>
            <p className="text-sm text-primary-foreground/70">Active Recommendations</p>
          </div>
        </Card>

        <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
          <div className="text-center">
            <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
            <h3 className="text-3xl font-bold">₹71.7L</h3>
            <p className="text-sm text-muted-foreground">Annual Savings Potential</p>
          </div>
        </Card>

        <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
          <div className="text-center">
            <Zap className="h-8 w-8 text-copper mx-auto mb-2" />
            <h3 className="text-3xl font-bold">-130</h3>
            <p className="text-sm text-muted-foreground">tCO₂/month Reduction</p>
          </div>
        </Card>

        <Card className="p-6 bg-card/60 backdrop-blur-sm border-border">
          <div className="text-center">
            <CheckCircle className="h-8 w-8 text-accent mx-auto mb-2" />
            <h3 className="text-3xl font-bold">89%</h3>
            <p className="text-sm text-muted-foreground">Avg. Confidence Score</p>
          </div>
        </Card>
      </div>

      {/* Recommendations List */}
      <div className="space-y-4">
        {recommendations.map((rec) => (
          <Card key={rec.id} className="p-6 bg-card/60 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {rec.id}
                    </Badge>
                    <Badge className={getPriorityColor(rec.priority)}>
                      {rec.priority.toUpperCase()} PRIORITY
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {rec.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{rec.title}</h3>
                  <p className="text-sm text-muted-foreground">{rec.description}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Confidence:</span>
                    <div className="flex items-center gap-1">
                      <div className="w-16 h-2 bg-muted rounded-full">
                        <div 
                          className="h-2 bg-accent rounded-full" 
                          style={{ width: `${rec.confidence}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{rec.confidence}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-lg bg-gradient-glass border border-border/50">
                {Object.entries(rec.impact).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-xs text-muted-foreground capitalize mb-1">{key.replace('_', ' ')}</p>
                    <p className="text-sm font-semibold">{value}</p>
                  </div>
                ))}
              </div>

              {/* Implementation Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{rec.implementation}</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-primary/20">
                    View Details
                  </Button>
                  <Button size="sm" className="bg-gradient-primary border-0 hover:shadow-glow transition-all">
                    Implement
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* ML Model Info */}
      <Card className="p-6 bg-gradient-glass border-border">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Brain className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-2">AI Model Information</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recommendations are generated using ensemble machine learning models including XGBoost, Random Forest, and Neural Networks. 
              Models are trained on 10+ years of metallurgical process data, environmental regulations, and circular economy best practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 rounded-lg bg-card/60 border border-border">
                <p className="text-xs text-muted-foreground mb-1">Model Accuracy</p>
                <p className="text-lg font-semibold">94.2%</p>
              </div>
              <div className="p-3 rounded-lg bg-card/60 border border-border">
                <p className="text-xs text-muted-foreground mb-1">Training Data</p>
                <p className="text-lg font-semibold">10+ Years</p>
              </div>
              <div className="p-3 rounded-lg bg-card/60 border border-border">
                <p className="text-xs text-muted-foreground mb-1">Last Updated</p>
                <p className="text-lg font-semibold">Real-time</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AIRecommendations;
