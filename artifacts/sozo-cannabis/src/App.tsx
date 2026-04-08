import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AgeGate } from "@/components/AgeGate";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import Home from "@/pages/Home";
import Locations from "@/pages/Locations";
import HighMiles from "@/pages/HighMiles";
import Products from "@/pages/Products";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

function AppContent() {
  const [ageVerified, setAgeVerified] = useState(() => {
    return localStorage.getItem("sozo-age-verified") === "true";
  });

  useEffect(() => {
    if (ageVerified) {
      localStorage.setItem("sozo-age-verified", "true");
    }
  }, [ageVerified]);

  if (!ageVerified) {
    return <AgeGate onVerify={() => setAgeVerified(true)} />;
  }

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/locations" component={Locations} />
          <Route path="/highmiles" component={HighMiles} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <AppContent />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
