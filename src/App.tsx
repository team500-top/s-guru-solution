import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Uslugi from "./pages/Uslugi";
import Vnedrenie1SBuhgalteriya from "./pages/Vnedrenie1SBuhgalteriya";
import AbonentskoeSoprovozhdenie1S from "./pages/AbonentskoeSoprovozhdenie1S";
import Vnedrenie1SUpravljenieTorgovlej from "./pages/Vnedrenie1SUpravljenieTorgovlej";
import Vnedrenie1SZUP from "./pages/Vnedrenie1SZUP";
import Vnedrenie1SERP from "./pages/Vnedrenie1SERP";
import Dorabotka1S from "./pages/Dorabotka1S";
import Blog from "./pages/Blog";
import Blog1SDlyaIP from "./pages/Blog1SDlyaIP";
import AvtomatizaciyaNalogovVBuh from "./pages/blog/AvtomatizaciyaNalogovVBuh";
import NastrojkaUchetnojPolitikiVBuh from "./pages/blog/NastrojkaUchetnojPolitikiVBuh";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import RobotsTxt from "./components/RobotsTxt";
import SitemapRedirect from "./components/SitemapRedirect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
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
              <Route path="uslugi/vnedrenie-1s-upravlenie-torgovley" element={<Vnedrenie1SUpravljenieTorgovlej />} />
              <Route path="uslugi/vnedrenie-1s-zup" element={<Vnedrenie1SZUP />} />
              <Route path="uslugi/vnedrenie-1s-erp" element={<Vnedrenie1SERP />} />
              <Route path="uslugi/dorabotka-1s" element={<Dorabotka1S />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/1s-dlya-ip" element={<Blog1SDlyaIP />} />
              <Route path="blog/avtomatizaciya-nalogov-v-buh" element={<AvtomatizaciyaNalogovVBuh />} />
              <Route path="blog/nastrojka-uchetnoj-politiki-v-buh" element={<NastrojkaUchetnojPolitikiVBuh />} />
              <Route path="legal" element={<Legal />} />
            </Route>
            <Route path="robots.txt" element={<RobotsTxt />} />
            <Route path="sitemap.xml" element={<SitemapRedirect />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
