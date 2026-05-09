import { useState } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import DashboardLayout from "@/components/DashboardLayout";
import FunnelOverview from "@/pages/FunnelOverview";
import FunnelStages from "@/pages/FunnelStages";
import CreativesManager from "@/pages/CreativesManager";
import BudgetManager from "@/pages/BudgetManager";
import ImplementationChecklist from "@/pages/ImplementationChecklist";
import WeeklyAnalysis from "@/pages/WeeklyAnalysis";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <FunnelOverview onStageClick={(stageId) => console.log('Clicked:', stageId)} />;
      case 'stages':
        return <FunnelStages />;
      case 'creatives':
        return <CreativesManager />;
      case 'budget':
        return <BudgetManager />;
      case 'checklist':
        return <ImplementationChecklist />;
      case 'analysis':
        return <WeeklyAnalysis />;
      default:
        return <FunnelOverview />;
    }
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <DashboardLayout
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          >
            {renderContent()}
          </DashboardLayout>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
