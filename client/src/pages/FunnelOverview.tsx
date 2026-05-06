import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FunnelStageCard from '@/components/FunnelStageCard';
import { TrendingUp, AlertCircle } from 'lucide-react';

interface FunnelOverviewProps {
  onStageClick?: (stageId: string) => void;
}

const stages = [
  {
    id: 'stage1',
    number: 1,
    title: 'Seguidores',
    description: 'Atrair Público Qualificado',
    budget: 10,
    objective: 'Custo por seguidor < R$ 0,50',
    status: 'planned' as const,
  },
  {
    id: 'stage2',
    number: 2,
    title: 'Público Frio',
    description: 'Vender / Criar Públicos',
    budget: 15,
    objective: 'Gerar tráfego para WhatsApp',
    status: 'planned' as const,
  },
  {
    id: 'stage3',
    number: 3,
    title: 'Público Quente',
    description: 'Remarketing / Venda Direta',
    budget: 20,
    objective: 'Conversão direta (Vendas)',
    status: 'planned' as const,
  },
  {
    id: 'stage4',
    number: 4,
    title: 'Prova Social',
    description: 'Autoridade e Desejo',
    budget: 5,
    objective: 'Aumentar confiança e desejo',
    status: 'planned' as const,
  },
];

export default function FunnelOverview({ onStageClick }: FunnelOverviewProps) {
  const totalBudget = stages.reduce((sum, stage) => sum + stage.budget, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Dashboard do Funil Meta Ads
          </h1>
          <p className="text-muted-foreground">
            Gerencie sua estratégia de vendas em 4 etapas
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <TrendingUp className="w-4 h-4 mr-2" />
          Iniciar Implementação
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Orçamento Total Diário</p>
              <p className="text-2xl font-bold text-foreground">R$ {totalBudget.toFixed(2)}</p>
            </div>
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Etapas Planejadas</p>
              <p className="text-2xl font-bold text-foreground">4</p>
            </div>
            <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-blue-600">4</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">ROAS Esperado</p>
              <p className="text-2xl font-bold text-foreground">9.59x</p>
            </div>
            <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-orange-600">9.6x</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Alert */}
      <Card className="p-4 bg-blue-50 border-blue-200 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-blue-900">Próximo Passo</p>
          <p className="text-sm text-blue-800 mt-1">
            Grave os vídeos da Etapa 1 e 2 (você falando) para começar a implementação. Isso é fundamental para criar autoridade e confiança.
          </p>
        </div>
      </Card>

      {/* Funnel Stages */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Etapas do Funil</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {stages.map((stage) => (
            <FunnelStageCard
              key={stage.id}
              stage={stage.number}
              title={stage.title}
              description={stage.description}
              budget={stage.budget}
              objective={stage.objective}
              status={stage.status}
              onClick={() => onStageClick?.(stage.id)}
            />
          ))}
        </div>
      </div>

      {/* Timeline */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Cronograma de Implementação</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-32 flex-shrink-0">
              <p className="text-sm font-semibold text-primary">Semana 1</p>
            </div>
            <div>
              <p className="text-sm text-foreground">
                Iniciar Etapas 1 e 2. Foco em popular o público de engajamento.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-32 flex-shrink-0">
              <p className="text-sm font-semibold text-primary">Semana 2</p>
            </div>
            <div>
              <p className="text-sm text-foreground">
                Iniciar Etapas 3 e 4. Começar a colher as vendas do público impactado.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-32 flex-shrink-0">
              <p className="text-sm font-semibold text-primary">Semana 3+</p>
            </div>
            <div>
              <p className="text-sm text-foreground">
                Otimização. Pausar criativos com CTR baixo e escalar os que trazem vendas.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
