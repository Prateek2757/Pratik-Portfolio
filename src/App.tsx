import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
<<<<<<< HEAD
import { CustomCursor } from "./components/CustomCursor";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
=======
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
<<<<<<< HEAD
          <CustomCursor />
=======
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
<<<<<<< HEAD
              <Route path="/projects/:slug" element={<ProjectDetail />} />
=======
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
