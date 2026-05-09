import { useState } from 'react';
import { Menu, X, Target, Zap, DollarSign, CheckCircle2, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function DashboardLayout({
  children,
  activeSection,
  onSectionChange,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sections = [
    { id: 'overview', label: 'Visão Geral', icon: Target },
    { id: 'stages', label: 'Etapas do Funil', icon: Zap },
    { id: 'creatives', label: 'Criativos', icon: Zap },
    { id: 'budget', label: 'Orçamento', icon: DollarSign },
    { id: 'analysis', label: 'Análise Semanal', icon: BarChart3 },
    { id: 'checklist', label: 'Checklist', icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-sidebar border-r border-border transition-all duration-300 flex flex-col`}
      >
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-sidebar-foreground">
              Funil Meta Ads
            </h1>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="ml-auto"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground hover:bg-secondary'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium">{section.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          {sidebarOpen && (
            <p className="text-xs text-muted-foreground text-center">
              Império DM Sexy © 2026
            </p>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
