import { useState } from 'react';
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
    name: 'ENGAJ-VIBRO',
    investment: 72.11,
    impressions: 3828,
    clicks: 139,
    ctr: 3.63,
    cpc: 0.52,
    status: 'excellent',
    recommendation: 'Melhor performance! CTR 3.63% e CPC R$ 0.52. Escale para R$ 100/dia. Produto está gerando excelente retorno.',
  },
  {
    name: 'VDS-ADSTRIGENTE —-05',
    investment: 75.79,
    impressions: 2879,
    clicks: 104,
    ctr: 3.61,
    cpc: 0.73,
    status: 'excellent',
    recommendation: 'Excelente CTR (3.61%)! Aumente o orçamento para R$ 90-100/dia. Mantém consistência de performance.',
  },
  {
    name: 'ENGAJ-PICO PULSE',
    investment: 20.54,
    impressions: 698,
    clicks: 14,
    ctr: 2.01,
    cpc: 1.47,
    status: 'warning',
    recommendation: 'CTR abaixo da média (2.01%). Teste novos criativos ou pausar em 3 dias se não melhorar.',
  },
  {
    name: 'EGJ-Bubble Vibes',
    investment: 12.56,
    impressions: 389,
    clicks: 7,
    ctr: 1.80,
    cpc: 1.79,
    status: 'critical',
    recommendation: 'Pior performance (CTR 1.80%, CPC R$ 1.79). Pause imediatamente e teste novos criativos.',
  },
];

export default function WeeklyAnalysis() {
  const [activeTab, setActiveTab] = useState('overview');

  const totalInvestment = campaignsData.reduce((sum, c) => sum + c.investment, 0);
  const totalImpressions = campaignsData.reduce((sum, c) => sum + c.impressions, 0);
  const totalClicks = campaignsData.reduce((sum, c) => sum + c.clicks, 0);
  const avgCTR = (totalClicks / totalImpressions * 100).toFixed(2);
  const avgCPC = (totalInvestment / totalClicks).toFixed(2);

  const excellentCampaigns = campaignsData.filter(c => c.status === 'excellent');
  const criticalCampaigns = campaignsData.filter(c => c.status === 'critical' || c.status === 'warning');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'good':
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'critical':
        return <TrendingDown className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'bg-green-50 border-green-200';
      case 'good':
        return 'bg-blue-50 border-blue-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'critical':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Análise Semanal de Campanhas
        </h1>
        <p className="text-muted-foreground">
          Período: 29 de Abril a 09 de Maio de 2026 (Últimos 10 dias)
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Investimento Total</p>
              <p className="text-2xl font-bold text-foreground">R$ {totalInvestment.toFixed(2)}</p>
            </div>
            <Zap className="w-6 h-6 text-primary" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Impressões</p>
              <p className="text-2xl font-bold text-foreground">{totalImpressions.toLocaleString()}</p>
            </div>
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">CTR Médio</p>
              <p className="text-2xl font-bold text-foreground">{avgCTR}%</p>
            </div>
            <CheckCircle2 className="w-6 h-6 text-purple-600" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">CPC Médio</p>
              <p className="text-2xl font-bold text-foreground">R$ {avgCPC}</p>
            </div>
            <TrendingDown className="w-6 h-6 text-orange-600" />
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="excellent">Excelentes ({excellentCampaigns.length})</TabsTrigger>
          <TabsTrigger value="critical">Críticas ({criticalCampaigns.length})</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <div className="space-y-4">
            {campaignsData.map((campaign) => (
              <Card key={campaign.name} className={`p-6 border-2 ${getStatusColor(campaign.status)}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(campaign.status)}
                    <div>
                      <h3 className="font-semibold text-foreground">{campaign.name}</h3>
                      <Badge variant="outline" className="mt-1">
                        {campaign.status === 'excellent' ? '⭐ Excelente' : campaign.status === 'good' ? '✅ Bom' : campaign.status === 'warning' ? '⚠️ Atenção' : '❌ Crítico'}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">CTR</p>
                    <p className="text-2xl font-bold text-foreground">{campaign.ctr.toFixed(2)}%</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Investimento</p>
                    <p className="font-semibold text-foreground">R$ {campaign.investment.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Impressões</p>
                    <p className="font-semibold text-foreground">{campaign.impressions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Cliques</p>
                    <p className="font-semibold text-foreground">{campaign.clicks}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">CPC</p>
                    <p className="font-semibold text-foreground">R$ {campaign.cpc.toFixed(2)}</p>
                  </div>
                </div>

                <div className="bg-white/50 p-3 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>💡 Recomendação:</strong> {campaign.recommendation}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Excellent Tab */}
        <TabsContent value="excellent" className="space-y-4">
          {excellentCampaigns.length > 0 ? (
            excellentCampaigns.map((campaign) => (
              <Card key={campaign.name} className="p-6 border-2 bg-green-50 border-green-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-foreground">{campaign.name}</h3>
                      <p className="text-sm text-green-700 mt-1">⭐ Excelente Performance</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">CTR</p>
                    <p className="text-2xl font-bold text-green-600">{campaign.ctr.toFixed(2)}%</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Investimento</p>
                    <p className="font-semibold text-foreground">R$ {campaign.investment.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Impressões</p>
                    <p className="font-semibold text-foreground">{campaign.impressions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Cliques</p>
                    <p className="font-semibold text-foreground">{campaign.clicks}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">CPC</p>
                    <p className="font-semibold text-foreground">R$ {campaign.cpc.toFixed(2)}</p>
                  </div>
                </div>

                <div className="bg-white/50 p-3 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>💡 Recomendação:</strong> {campaign.recommendation}
                  </p>
                </div>
              </Card>
            ))
          ) : (
            <Card className="p-6 text-center">
              <p className="text-muted-foreground">Nenhuma campanha excelente no momento</p>
            </Card>
          )}
        </TabsContent>

        {/* Critical Tab */}
        <TabsContent value="critical" className="space-y-4">
          {criticalCampaigns.length > 0 ? (
            criticalCampaigns.map((campaign) => (
              <Card key={campaign.name} className={`p-6 border-2 ${getStatusColor(campaign.status)}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(campaign.status)}
                    <div>
                      <h3 className="font-semibold text-foreground">{campaign.name}</h3>
                      <p className={`text-sm mt-1 ${campaign.status === 'warning' ? 'text-yellow-700' : 'text-red-700'}`}>
                        {campaign.status === 'warning' ? '⚠️ Requer Atenção' : '❌ Crítico'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">CTR</p>
                    <p className={`text-2xl font-bold ${campaign.status === 'warning' ? 'text-yellow-600' : 'text-red-600'}`}>
                      {campaign.ctr.toFixed(2)}%
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Investimento</p>
                    <p className="font-semibold text-foreground">R$ {campaign.investment.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Impressões</p>
                    <p className="font-semibold text-foreground">{campaign.impressions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Cliques</p>
                    <p className="font-semibold text-foreground">{campaign.clicks}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">CPC</p>
                    <p className="font-semibold text-foreground">R$ {campaign.cpc.toFixed(2)}</p>
                  </div>
                </div>

                <div className="bg-white/50 p-3 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>💡 Recomendação:</strong> {campaign.recommendation}
                  </p>
                </div>
              </Card>
            ))
          ) : (
            <Card className="p-6 text-center">
              <p className="text-muted-foreground">Nenhuma campanha crítica no momento</p>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
