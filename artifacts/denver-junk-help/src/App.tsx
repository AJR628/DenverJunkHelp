import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Home from "@/pages/Home";
import FurnitureRemoval from "@/pages/FurnitureRemoval";
import ApplianceRemoval from "@/pages/ApplianceRemoval";
import Cleanouts from "@/pages/Cleanouts";
import Pricing from "@/pages/Pricing";
import CityGuide from "@/pages/CityGuide";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/furniture-removal" component={FurnitureRemoval} />
      <Route path="/appliance-removal" component={ApplianceRemoval} />
      <Route path="/cleanouts" component={Cleanouts} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/city-guide" component={CityGuide} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") || ""}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;