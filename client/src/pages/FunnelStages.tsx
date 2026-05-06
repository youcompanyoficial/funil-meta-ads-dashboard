import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Play, Pause } from 'lucide-react';

const stagesData = [
  {
    id: 1,
    name: 'Seguidores',
    subtitle: 'Atrair Público Qualificado',
    budget: 10,
    duration: 'Sempre ativo',
    objective: 'Custo por seguidor < R$ 0,50',
    targetAudience: 'Aberto (Interesses em Bem-estar/Moda)',
    roteiro: 'Você convida o público a seguir seu perfil, destacando que você compartilha dicas sobre sexualidade e autocuidado.',
    expectedMetrics: {
      'Custo por Seguidor': 'R$ 0,30 - R$ 0,50',
      'Alcance Esperado': '2.000 - 5.000 pessoas',
      'Engajamento': '3% - 5%',
    },
    tips: [
      'Use reels curtos (15-30 segundos)',
      'Comece com uma pergunta ou curiosidade',
      'Inclua call-to-action claro para seguir',
    ],
  },
  {
    id: 2,
    name: 'Público Frio',
    subtitle: 'Vender / Criar Públicos',
    budget: 15,
    duration: '7 dias antes de analisar',
    objective: 'Gerar tráfego para o WhatsApp',
    targetAudience: 'Aberto / Lookalike de Clientes',
    roteiro: 'Dona segurando uma caixinha discreta: "Deixa eu te mostrar o que acabou de chegar e que está mudando as noites por aqui... Não precisa de muito para sair da rotina."',
    expectedMetrics: {
      'Custo por Lead': 'R$ 1,00 - R$ 2,00',
      'Cliques para WhatsApp': '50 - 100 por dia',
      'Taxa de Conversão': '5% - 10%',
    },
    tips: [
      'Mostre o produto de forma discreta e elegante',
      'Crie curiosidade sem ser explícito',
      'Inclua link direto para WhatsApp',
    ],
  },
  {
    id: 3,
    name: 'Público Quente',
    subtitle: 'Remarketing / Venda Direta',
    budget: 20,
    duration: 'Iniciar após 7 dias da Etapa 2',
    objective: 'Conversão direta (Vendas)',
    targetAudience: 'Engajamento IG 90d / PageView 90d',
    roteiro: 'Imagem limpa do produto + Texto: "O queridinho voltou! Garanta o seu Adstringente com entrega discreta em Goiânia. Clique e peça no WhatsApp."',
    expectedMetrics: {
      'Custo por Venda': 'R$ 15,00 - R$ 30,00',
      'Vendas por Dia': '3 - 8 vendas',
      'ROAS': '5x - 15x',
    },
    tips: [
      'Mostre o preço claramente',
      'Destaque o benefício principal',
      'Use depoimentos de clientes',
    ],
  },
  {
    id: 4,
    name: 'Prova Social',
    subtitle: 'Autoridade e Desejo',
    budget: 5,
    duration: 'Rodar junto com Etapa 3',
    objective: 'Aumentar confiança e desejo',
    targetAudience: 'Público Quente (Remarketing)',
    roteiro: 'Vídeo da dona lendo feedbacks (prints) de clientes. "Olha o que a nossa cliente de ontem falou sobre o combo novo... Isso é o que nos move."',
    expectedMetrics: {
      'Engajamento': '8% - 15%',
      'Conversões Indiretas': '+20% - 30%',
      'Custo por Conversa': 'R$ 0,50 - R$ 1,00',
    },
    tips: [
      'Use depoimentos reais de clientes',
      'Mostre emoção genuína',
      'Destaque clientes da região (DDD 62)',
    ],
  },
];

export default function FunnelStages() {
  const [expandedStage, setExpandedStage] = useState<number | null>(1);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Etapas do Funil</h1>
        <p className="text-muted-foreground">
          Detalhes de cada etapa, roteiros de criativos e métricas esperadas
        </p>
      </div>

      <div className="space-y-4">
        {stagesData.map((stage) => (
          <Card key={stage.id} className="overflow-hidden">
            <button
              onClick={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
              className="w-full p-6 flex items-center justify-between hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-4 text-left flex-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">{stage.id}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{stage.name}</h3>
                  <p className="text-sm text-muted-foreground">{stage.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline">R$ {stage.budget.toFixed(2)}/dia</Badge>
                {expandedStage === stage.id ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
            </button>

            {expandedStage === stage.id && (
              <div className="px-6 pb-6 border-t border-border space-y-6">
                {/* Objetivo */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Objetivo Principal</h4>
                  <p className="text-sm text-muted-foreground">{stage.objective}</p>
                </div>

                {/* Público Alvo */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Público Alvo</h4>
                  <p className="text-sm text-muted-foreground">{stage.targetAudience}</p>
                </div>

                {/* Roteiro */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Roteiro do Criativo</h4>
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <p className="text-sm text-foreground italic">{stage.roteiro}</p>
                  </div>
                </div>

                {/* Métricas */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Métricas Esperadas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {Object.entries(stage.expectedMetrics).map(([key, value]) => (
                      <div key={key} className="bg-secondary/30 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">{key}</p>
                        <p className="text-sm font-semibold text-foreground">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dicas */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Dicas de Produção</h4>
                  <ul className="space-y-2">
                    {stage.tips.map((tip, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary font-bold">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duração */}
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <strong>Duração:</strong> {stage.duration}
                  </p>
                </div>

                {/* Ações */}
                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button className="bg-primary hover:bg-primary/90 flex-1">
                    <Play className="w-4 h-4 mr-2" />
                    Ativar Etapa
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Pause className="w-4 h-4 mr-2" />
                    Pausar
                  </Button>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
