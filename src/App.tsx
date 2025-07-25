import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Uslugi from "./pages/Uslugi";
import Vnedrenie1SBuhgalteriya from "./pages/Vnedrenie1SBuhgalteriya";
import AbonentskoeSoprovozhdenie1S from "./pages/AbonentskoeSoprovozhdenie1S";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="uslugi" element={<Uslugi />} />
            <Route path="uslugi/vnedrenie-1s-buhgalteriya" element={<Vnedrenie1SBuhgalteriya />} />
            <Route path="uslugi/abonentskoe-soprovozhdenie-1s" element={<AbonentskoeSoprovozhdenie1S />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
