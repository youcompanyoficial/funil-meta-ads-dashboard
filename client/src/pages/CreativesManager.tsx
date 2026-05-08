import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, AlertCircle, CheckCircle2 } from 'lucide-react';

const creativesData = [
  {
    stage: 1,
    stageName: 'Seguidores',
    creatives: [
      {
        id: 'c1-1',
        name: 'Convite para Seguir',
        type: 'Reel (15-30s)',
        status: 'ready',
        description: 'Você convida o público a seguir seu perfil, destacando que você compartilha dicas sobre sexualidade e autocuidado.',
        cta: 'Siga para não perder nada!',
        notes: 'Use reels curtos e comece com uma pergunta',
      },
    ],
  },
  {
    stage: 2,
    stageName: 'Público Frio',
    creatives: [
      {
        id: 'c2-1',
        name: 'Dona com Caixinha',
        type: 'Vídeo (30-45s)',
        status: 'ready',
        description: 'Dona segurando uma caixinha discreta mostrando o produto novo que chegou.',
        cta: 'Clique para saber mais no WhatsApp',
        notes: 'Mostre discretamente, crie curiosidade',
      },
      {
        id: 'c2-2',
        name: 'Reação de Produto Existente',
        type: 'Reel (30-45s)',
        status: 'existing',
        description: 'Use posts já existentes no Instagram que geraram bom engajamento (ex: Suculenta, Pico Pulse).',
        cta: 'Clique para comprar',
        notes: 'Adapte o CTA para direcionar ao WhatsApp',
      },
    ],
  },
  {
    stage: 3,
    stageName: 'Público Quente',
    creatives: [
      {
        id: 'c3-1',
        name: 'Produto + Preço',
        type: 'Imagem ou Carrossel',
        status: 'ready',
        description: 'Imagem limpa do produto com preço, benefício principal e CTA claro.',
        cta: 'Peça agora no WhatsApp',
        notes: 'Destaque o preço e o benefício principal',
      },
      {
        id: 'c3-2',
        name: 'Depoimento de Cliente',
        type: 'Vídeo (15-30s)',
        status: 'pending',
        description: 'Cliente falando sobre sua experiência com o produto (se autorizado).',
        cta: 'Você também pode ter isso!',
        notes: 'Priorize clientes do DDD 62 (Goiás)',
      },
    ],
  },
  {
    stage: 4,
    stageName: 'Prova Social',
    creatives: [
      {
        id: 'c4-1',
        name: 'Dona Lendo Feedbacks',
        type: 'Vídeo (45-60s)',
        status: 'pending',
        description: 'Você lendo prints de feedbacks de clientes satisfeitos, mostrando emoção genuína.',
        cta: 'Junte-se a nossos clientes felizes!',
        notes: 'Mostre emoção genuína, use depoimentos reais',
      },
      {
        id: 'c4-2',
        name: 'Depoimento em Vídeo',
        type: 'Vídeo (30-45s)',
        status: 'pending',
        description: 'Cliente falando sobre como o produto mudou sua vida.',
        cta: 'Conheça nossa história',
        notes: 'Busque permissão dos clientes antes de usar',
      },
    ],
  },
];

const statusConfig = {
  ready: { label: 'Pronto', color: 'bg-green-100 text-green-700', icon: CheckCircle2 },
  existing: { label: 'Existente', color: 'bg-blue-100 text-blue-700', icon: CheckCircle2 },
  pending: { label: 'Pendente', color: 'bg-orange-100 text-orange-700', icon: AlertCircle },
};

export default function CreativesManager() {
  const [usedCreatives, setUsedCreatives] = useState<string[]>([]);
  const [inProduction, setInProduction] = useState<string[]>([]);

  const handleUseCreative = (creativeId: string) => {
    setUsedCreatives([...usedCreatives, creativeId]);
  };

  const handleStartProduction = (creativeId: string) => {
    setInProduction([...inProduction, creativeId]);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Gerenciador de Criativos</h1>
        <p className="text-muted-foreground">
          Criativos por etapa do funil com roteiros e status de produção
        </p>
      </div>

      <Tabs defaultValue="stage-1" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          {creativesData.map((stage) => (
            <TabsTrigger key={stage.stage} value={`stage-${stage.stage}`}>
              Etapa {stage.stage}
            </TabsTrigger>
          ))}
        </TabsList>

        {creativesData.map((stage) => (
          <TabsContent key={stage.stage} value={`stage-${stage.stage}`} className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-1">{stage.stageName}</h2>
              <p className="text-sm text-muted-foreground">
                {stage.creatives.length} criativo(s) para esta etapa
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {stage.creatives.map((creative) => {
                const statusInfo = statusConfig[creative.status as keyof typeof statusConfig];
                const StatusIcon = statusInfo.icon;

                return (
                  <Card key={creative.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{creative.name}</h3>
                          <Badge className={statusInfo.color}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {statusInfo.label}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{creative.type}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Descrição</p>
                        <p className="text-sm text-muted-foreground">{creative.description}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-1">Call-to-Action</p>
                          <div className="bg-secondary/50 p-3 rounded text-sm text-foreground italic">
                            "{creative.cta}"
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-foreground mb-1">Notas</p>
                          <div className="bg-secondary/50 p-3 rounded text-sm text-muted-foreground">
                            {creative.notes}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4 border-t border-border">
                      {creative.status === 'pending' && (
                        <button 
                          onClick={() => handleStartProduction(creative.id)}
                          disabled={inProduction.includes(creative.id)}
                          className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Play className="w-4 h-4" />
                          {inProduction.includes(creative.id) ? 'Em Produção' : 'Começar Produção'}
                        </button>
                      )}
                      {creative.status === 'ready' && (
                        <button 
                          onClick={() => handleUseCreative(creative.id)}
                          disabled={usedCreatives.includes(creative.id)}
                          className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Play className="w-4 h-4" />
                          {usedCreatives.includes(creative.id) ? 'Criativo Ativo' : 'Usar este Criativo'}
                        </button>
                      )}
                      {creative.status === 'existing' && (
                        <button 
                          onClick={() => handleUseCreative(creative.id)}
                          disabled={usedCreatives.includes(creative.id)}
                          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {usedCreatives.includes(creative.id) ? 'Criativo Ativo' : 'Adaptar para Anúncio'}
                        </button>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Dicas Gerais */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-3">💡 Dicas Gerais para Criativos</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>• <strong>Duração:</strong> Mantenha vídeos entre 15-60 segundos para máximo engajamento</li>
          <li>• <strong>Texto:</strong> Use subtítulos em todos os vídeos (muitos assistem sem som)</li>
          <li>• <strong>Hook:</strong> Os primeiros 3 segundos são críticos - capture atenção imediatamente</li>
          <li>• <strong>CTA Claro:</strong> Sempre termine com uma ação clara (Seguir, Clicar, Comprar)</li>
          <li>• <strong>Qualidade:</strong> Use boa iluminação e áudio claro - profissionalismo vende</li>
        </ul>
      </Card>
    </div>
  );
}
