import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import GISMapper from "./pages/GISMapper";
import Circularity from "./pages/Circularity";
import CarbonCredits from "./pages/CarbonCredits";
import AIRecommendations from "./pages/AIRecommendations";
import TreatmentLocator from "./pages/TreatmentLocator";
import LCAReports from "./pages/LCAReports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/gis-mapper" element={<GISMapper />} />
            <Route path="/circularity" element={<Circularity />} />
            <Route path="/carbon-credits" element={<CarbonCredits />} />
            <Route path="/ai-recommendations" element={<AIRecommendations />} />
            <Route path="/treatment-locator" element={<TreatmentLocator />} />
            <Route path="/lca-reports" element={<LCAReports />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
