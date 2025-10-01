import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import GeneralSafety from "@/pages/general-safety";
import ProductionSafety from "@/pages/production-safety";
import TransportationSafety from "@/pages/transportation-safety";
import StorageSafety from "@/pages/storage-safety";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/safety/general" component={GeneralSafety} />
      <Route path="/safety/production" component={ProductionSafety} />
      <Route path="/safety/transportation" component={TransportationSafety} />
      <Route path="/safety/storage" component={StorageSafety} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
