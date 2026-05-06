import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Circle, AlertCircle, Calendar } from 'lucide-react';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  stage: number;
  dueDate: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

const initialChecklist: ChecklistItem[] = [
  {
    id: 'prep-1',
    title: 'Gravar vídeo - Convite para Seguir (Etapa 1)',
    description: 'Você convida o público a seguir, destacando dicas sobre sexualidade e autocuidado.',
    stage: 1,
    dueDate: '2026-05-10',
    completed: false,
    priority: 'high',
  },
  {
    id: 'prep-2',
    title: 'Gravar vídeo - Dona com Caixinha (Etapa 2)',
    description: 'Dona segurando caixinha discreta mostrando novo produto.',
    stage: 2,
    dueDate: '2026-05-10',
    completed: false,
    priority: 'high',
  },
  {
    id: 'prep-3',
    title: 'Preparar imagens de produtos (Etapa 3)',
    description: 'Fotos limpas dos produtos mais vendidos com preço e benefício.',
    stage: 3,
    dueDate: '2026-05-12',
    completed: false,
    priority: 'medium',
  },
  {
    id: 'prep-4',
    title: 'Coletar depoimentos de clientes (Etapa 4)',
    description: 'Buscar permissão e coletar prints de feedbacks de clientes satisfeitos.',
    stage: 4,
    dueDate: '2026-05-12',
    completed: false,
    priority: 'medium',
  },
  {
    id: 'setup-1',
    title: 'Criar Campanhas no Meta Ads (Etapa 1)',
    description: 'Configurar campanha de Seguidores com orçamento de R$ 10/dia.',
    stage: 1,
    dueDate: '2026-05-13',
    completed: false,
    priority: 'high',
  },
  {
    id: 'setup-2',
    title: 'Criar Campanhas no Meta Ads (Etapa 2)',
    description: 'Configurar campanha de Público Frio com orçamento de R$ 15/dia.',
    stage: 2,
    dueDate: '2026-05-13',
    completed: false,
    priority: 'high',
  },
  {
    id: 'setup-3',
    title: 'Configurar Links de Rastreamento',
    description: 'Adicionar UTMs aos links para rastrear origem de cada venda.',
    stage: 1,
    dueDate: '2026-05-13',
    completed: false,
    priority: 'medium',
  },
  {
    id: 'monitor-1',
    title: 'Monitorar Etapa 1 por 7 dias',
    description: 'Acompanhar CPL, alcance e engajamento. Fazer ajustes se necessário.',
    stage: 1,
    dueDate: '2026-05-20',
    completed: false,
    priority: 'high',
  },
  {
    id: 'monitor-2',
    title: 'Ativar Etapa 3 (Público Quente)',
    description: 'Após 7 dias da Etapa 2, iniciar campanhas de remarketing.',
    stage: 3,
    dueDate: '2026-05-20',
    completed: false,
    priority: 'high',
  },
  {
    id: 'optimize-1',
    title: 'Pausar criativos com baixo CTR',
    description: 'Identificar e pausar anúncios que não estão performando.',
    stage: 1,
    dueDate: '2026-05-27',
    completed: false,
    priority: 'medium',
  },
];

export default function ImplementationChecklist() {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(initialChecklist);
  const [filterStage, setFilterStage] = useState<number | null>(null);

  const toggleItem = (id: string) => {
    setChecklist(checklist.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const filteredChecklist = filterStage
    ? checklist.filter(item => item.stage === filterStage)
    : checklist;

  const completedCount = checklist.filter(item => item.completed).length;
  const progressPercentage = Math.round((completedCount / checklist.length) * 100);

  const priorityColors = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-orange-100 text-orange-700',
    low: 'bg-blue-100 text-blue-700',
  };

  const priorityLabels = {
    high: 'Alta Prioridade',
    medium: 'Média Prioridade',
    low: 'Baixa Prioridade',
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Checklist de Implementação</h1>
        <p className="text-muted-foreground">
          Acompanhe todas as tarefas necessárias para lançar seu funil
        </p>
      </div>

      {/* Progress */}
      <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Progresso Geral</h3>
          <span className="text-2xl font-bold text-primary">{progressPercentage}%</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
          <div
            className="bg-primary h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          {completedCount} de {checklist.length} tarefas concluídas
        </p>
      </Card>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        <Button
          variant={filterStage === null ? 'default' : 'outline'}
          onClick={() => setFilterStage(null)}
        >
          Todas as Tarefas
        </Button>
        {[1, 2, 3, 4].map(stage => (
          <Button
            key={stage}
            variant={filterStage === stage ? 'default' : 'outline'}
            onClick={() => setFilterStage(stage)}
          >
            Etapa {stage}
          </Button>
        ))}
      </div>

      {/* Checklist Items */}
      <div className="space-y-3">
        {filteredChecklist.map(item => (
          <Card
            key={item.id}
            className={`p-4 cursor-pointer transition-all ${
              item.completed ? 'bg-secondary/50 opacity-75' : ''
            }`}
            onClick={() => toggleItem(item.id)}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                {item.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                ) : (
                  <Circle className="w-6 h-6 text-muted-foreground" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className={`font-semibold ${item.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                    {item.title}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded whitespace-nowrap ${priorityColors[item.priority]}`}>
                    {priorityLabels[item.priority]}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                    Etapa {item.stage}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(item.dueDate).toLocaleDateString('pt-BR')}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Timeline */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">📅 Cronograma Sugerido</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-40 flex-shrink-0">
              <p className="text-sm font-semibold text-primary">Hoje até 10/05</p>
            </div>
            <div className="flex-1">
              <p className="text-sm text-foreground">
                Gravar todos os vídeos (Etapas 1, 2 e 4). Preparar imagens de produtos.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-40 flex-shrink-0">
              <p className="text-sm font-semibold text-primary">11/05 até 13/05</p>
            </div>
            <div className="flex-1">
              <p className="text-sm text-foreground">
                Criar campanhas no Meta Ads. Configurar links com UTMs. Iniciar Etapas 1 e 2.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-40 flex-shrink-0">
              <p className="text-sm font-semibold text-primary">14/05 até 20/05</p>
            </div>
            <div className="flex-1">
              <p className="text-sm text-foreground">
                Monitorar Etapas 1 e 2. Fazer ajustes. Ativar Etapas 3 e 4 no final da semana.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-40 flex-shrink-0">
              <p className="text-sm font-semibold text-primary">21/05 em diante</p>
            </div>
            <div className="flex-1">
              <p className="text-sm text-foreground">
                Otimização contínua. Pausar criativos com baixo CTR. Escalar os que vendem.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Tips */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">💡 Dicas Importantes</h4>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>• Não tente fazer tudo de uma vez. Siga o cronograma sugerido.</li>
              <li>• Qualidade de vídeo é importante. Use boa iluminação e áudio claro.</li>
              <li>• Teste com orçamento pequeno antes de escalar.</li>
              <li>• Acompanhe os resultados diariamente nos primeiros 7 dias.</li>
              <li>• Não desista se o CPL ficar alto nos primeiros dias. O algoritmo precisa de tempo.</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
