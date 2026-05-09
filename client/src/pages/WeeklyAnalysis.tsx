import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle2, Zap } from 'lucide-react';

interface Campaign {
  name: string;
  investment: number;
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  status: 'excellent' | 'good' | 'warning' | 'critical';
  recommendation: string;
}

const campaignsData: Campaign[] = [
  {
    name: 'VDS-ADSTRIGENTE —-05',
    investment: 46.37,
    impressions: 1926,
    clicks: 69,
    ctr: 3.58,
    cpc: 0.67,
    status: 'excellent',
    recommendation: 'Escale essa campanha! Aumente o orçamento para R$ 70-80/dia. Melhor CTR (3,58%) e bom CPC.',
  },
  {
    name: 'ENGAJ-VIBRO',
    investment: 48.53,
    impressions: 2537,
    clicks: 88,
    ctr: 3.47,
    cpc: 0.55,
    status: 'excellent',
    recommendation: 'Melhor CPC (R$ 0,55)! Mantenha essa campanha rodando. Produto está gerando bom retorno.',
  },
  {
    name: 'teste story',
    investment: 14.88,
    impressions: 542,
    clicks: 17,
    ctr: 3.14,
    cpc: 0.88,
    status: 'good',
    recommendation: 'Performance boa (CTR 3,14%). Renomeie para um nome definitivo e considere escalar após validação.',
  },
  {
    name: 'TESTE TRAFEGO',
    investment: 15.35,
    impressions: 610,
    clicks: 19,
    ctr: 3.11,
    cpc: 0.81,
    status: 'good',
    recommendation: 'CTR consistente (3,11%). Mantenha rodando e teste novos públicos para expandir alcance.',
  },
  {
    name: 'ENGAJ-PICO PULSE',
    investment: 20.54,
    impressions: 698,
    clicks: 14,
    ctr: 2.01,
    cpc: 1.47,
    status: 'warning',
    recommendation: 'CTR abaixo da média (2,01%). Teste novos criativos ou públicos. Se não melhorar em 3 dias, pause.',
  },
  {
    name: 'EGJ-Bubble Vibes',
    investment: 12.56,
    impressions: 389,
    clicks: 7,
    ctr: 1.80,
    cpc: 1.79,
    status: 'critical',
    recommendation: 'Pior performance (CTR 1,80%, CPC R$ 1,79). Pause imediatamente e reformule criativos antes de reiniciar.',
  },
];

const statusConfig = {
  excellent: {
    label: 'Excelente',
    color: 'bg-green-100 text-green-700',
    icon: TrendingUp,
    bgCard: 'bg-green-50 border-green-200',
  },
  good: {
    label: 'Bom',
    color: 'bg-blue-100 text-blue-700',
    icon: CheckCircle2,
    bgCard: 'bg-blue-50 border-blue-200',
  },
  warning: {
    label: 'Atenção',
    color: 'bg-orange-100 text-orange-700',
    icon: AlertCircle,
    bgCard: 'bg-orange-50 border-orange-200',
  },
  critical: {
    label: 'Crítico',
    color: 'bg-red-100 text-red-700',
    icon: TrendingDown,
    bgCard: 'bg-red-50 border-red-200',
  },
};

export default function WeeklyAnalysis() {
  const totalInvestment = campaignsData.reduce((sum, c) => sum + c.investment, 0);
  const totalClicks = campaignsData.reduce((sum, c) => sum + c.clicks, 0);
  const totalImpressions = campaignsData.reduce((sum, c) => sum + c.impressions, 0);
  const averageCTR = (totalClicks / totalImpressions) * 100;
  const averageCPC = totalInvestment / totalClicks;

  const excellentCampaigns = campaignsData.filter(c => c.status === 'excellent').length;
  const criticalCampaigns = campaignsData.filter(c => c.status === 'critical').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Análise Semanal de Campanhas</h1>
        <p className="text-muted-foreground">
          Semana de 01/05 a 08/05/2026 - Insights e recomendações para otimizar suas campanhas
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <p className="text-sm text-muted-foreground mb-1">Investimento Total</p>
          <p className="text-2xl font-bold text-foreground">R$ {totalInvestment.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground mt-1">6 campanhas ativas</p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <p className="text-sm text-muted-foreground mb-1">CTR Médio</p>
          <p className="text-2xl font-bold text-blue-700">{averageCTR.toFixed(2)}%</p>
          <p className="text-xs text-muted-foreground mt-1">Excelente performance</p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <p className="text-sm text-muted-foreground mb-1">CPC Médio</p>
          <p className="text-2xl font-bold text-green-700">R$ {averageCPC.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground mt-1">{totalClicks} cliques gerados</p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <p className="text-sm text-muted-foreground mb-1">Campanhas Críticas</p>
          <p className="text-2xl font-bold text-orange-700">{criticalCampaigns}</p>
          <p className="text-xs text-muted-foreground mt-1">Requerem ação imediata</p>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="excellent">⭐ Excelentes</TabsTrigger>
          <TabsTrigger value="critical">🔴 Críticas</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <div className="space-y-3">
            {campaignsData.map((campaign) => {
              const config = statusConfig[campaign.status];
              const StatusIcon = config.icon;

              return (
                <Card key={campaign.name} className={`p-5 border-l-4 ${config.bgCard}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3 flex-1">
                      <StatusIcon className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">{campaign.name}</h3>
                        <Badge className={config.color}>{config.label}</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Investimento</p>
                      <p className="font-semibold text-foreground">R$ {campaign.investment.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Impressões</p>
                      <p className="font-semibold text-foreground">{campaign.impressions.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Cliques (all)</p>
                      <p className="font-semibold text-foreground">{campaign.clicks}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">CTR</p>
                      <p className="font-semibold text-foreground">{campaign.ctr.toFixed(2)}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">CPC</p>
                      <p className="font-semibold text-foreground">R$ {campaign.cpc.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="bg-white/50 p-3 rounded-lg border border-white/80">
                    <p className="text-sm font-semibold text-foreground mb-1">💡 Recomendação:</p>
                    <p className="text-sm text-muted-foreground">{campaign.recommendation}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Excellent Tab */}
        <TabsContent value="excellent" className="space-y-4">
          <div className="space-y-3">
            {campaignsData
              .filter(c => c.status === 'excellent')
              .map((campaign) => {
                const config = statusConfig[campaign.status];
                const StatusIcon = config.icon;

                return (
                  <Card key={campaign.name} className={`p-5 border-l-4 ${config.bgCard}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3 flex-1">
                        <StatusIcon className="w-5 h-5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground">{campaign.name}</h3>
                          <Badge className={config.color}>{config.label}</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Investimento</p>
                        <p className="font-semibold text-foreground">R$ {campaign.investment.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Impressões</p>
                        <p className="font-semibold text-foreground">{campaign.impressions.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Cliques (all)</p>
                        <p className="font-semibold text-foreground">{campaign.clicks}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">CTR</p>
                        <p className="font-semibold text-foreground">{campaign.ctr.toFixed(2)}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">CPC</p>
                        <p className="font-semibold text-foreground">R$ {campaign.cpc.toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="bg-green-100/50 p-3 rounded-lg border border-green-200">
                      <p className="text-sm font-semibold text-green-900 mb-1">✅ Ação Recomendada:</p>
                      <p className="text-sm text-green-800">{campaign.recommendation}</p>
                    </div>
                  </Card>
                );
              })}
          </div>
        </TabsContent>

        {/* Critical Tab */}
        <TabsContent value="critical" className="space-y-4">
          <div className="space-y-3">
            {campaignsData
              .filter(c => c.status === 'critical' || c.status === 'warning')
              .map((campaign) => {
                const config = statusConfig[campaign.status];
                const StatusIcon = config.icon;

                return (
                  <Card key={campaign.name} className={`p-5 border-l-4 ${config.bgCard}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3 flex-1">
                        <StatusIcon className="w-5 h-5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground">{campaign.name}</h3>
                          <Badge className={config.color}>{config.label}</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Investimento</p>
                        <p className="font-semibold text-foreground">R$ {campaign.investment.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Impressões</p>
                        <p className="font-semibold text-foreground">{campaign.impressions.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Cliques (all)</p>
                        <p className="font-semibold text-foreground">{campaign.clicks}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">CTR</p>
                        <p className="font-semibold text-foreground">{campaign.ctr.toFixed(2)}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">CPC</p>
                        <p className="font-semibold text-foreground">R$ {campaign.cpc.toFixed(2)}</p>
                      </div>
                    </div>

                    <div className={`${campaign.status === 'critical' ? 'bg-red-100/50 border-red-200' : 'bg-orange-100/50 border-orange-200'} p-3 rounded-lg border`}>
                      <p className={`text-sm font-semibold ${campaign.status === 'critical' ? 'text-red-900' : 'text-orange-900'} mb-1`}>
                        {campaign.status === 'critical' ? '🔴 Ação Urgente:' : '⚠️ Ação Necessária:'}
                      </p>
                      <p className={`text-sm ${campaign.status === 'critical' ? 'text-red-800' : 'text-orange-800'}`}>{campaign.recommendation}</p>
                    </div>
                  </Card>
                );
              })}
          </div>
        </TabsContent>
      </Tabs>

      {/* Tips */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <div className="flex gap-3">
          <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">⚡ Dicas para Próxima Semana</h4>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>• Escale as campanhas excelentes (VDS-ADSTRIGENTE e ENGAJ-VIBRO) aumentando orçamento em 30-50%</li>
              <li>• Pause EGJ-Bubble Vibes e reformule criativos antes de reiniciar</li>
              <li>• Teste novos públicos para ENGAJ-PICO PULSE (CTR baixo pode ser público inadequado)</li>
              <li>• Renomeie campanhas de teste e valide performance antes de escalar</li>
              <li>• Monitore diariamente nos primeiros 3 dias após mudanças</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
