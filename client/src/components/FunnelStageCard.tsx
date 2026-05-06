import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';

interface FunnelStageCardProps {
  stage: number;
  title: string;
  description: string;
  budget: number;
  objective: string;
  status: 'planned' | 'active' | 'paused' | 'completed';
  onClick?: () => void;
}

const statusColors: Record<string, { bg: string; text: string }> = {
  planned: { bg: 'bg-blue-100', text: 'text-blue-700' },
  active: { bg: 'bg-green-100', text: 'text-green-700' },
  paused: { bg: 'bg-orange-100', text: 'text-orange-700' },
  completed: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
};

const statusLabels: Record<string, string> = {
  planned: 'Planejado',
  active: 'Ativo',
  paused: 'Pausado',
  completed: 'Concluído',
};

export default function FunnelStageCard({
  stage,
  title,
  description,
  budget,
  objective,
  status,
  onClick,
}: FunnelStageCardProps) {
  const statusColor = statusColors[status];

  return (
    <Card
      className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] border-l-4 border-l-primary"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="text-lg font-bold text-primary">{stage}</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Orçamento Diário</span>
          <span className="text-sm font-semibold text-foreground">R$ {budget.toFixed(2)}</span>
        </div>
        <div className="text-sm text-muted-foreground">
          <strong>Objetivo:</strong> {objective}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <Badge className={`${statusColor.bg} ${statusColor.text}`}>
          {statusLabels[status]}
        </Badge>
        <span className="text-xs text-muted-foreground">Clique para detalhes</span>
      </div>
    </Card>
  );
}
