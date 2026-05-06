import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const budgetData = [
  { stage: 'Etapa 1', budget: 10, percentage: 20 },
  { stage: 'Etapa 2', budget: 15, percentage: 30 },
  { stage: 'Etapa 3', budget: 20, percentage: 40 },
  { stage: 'Etapa 4', budget: 5, percentage: 10 },
];

const COLORS = ['#10B981', '#1E40AF', '#F97316', '#06B6D4'];

const projectedResults = [
  { stage: 'Etapa 1', leads: 2500, cost: 10, cpl: 0.40 },
  { stage: 'Etapa 2', leads: 350, cost: 15, cpl: 1.50 },
  { stage: 'Etapa 3', leads: 100, cost: 20, cpl: 20.00 },
  { stage: 'Etapa 4', leads: 150, cost: 5, cpl: 3.33 },
];

export default function BudgetManager() {
  const totalBudget = budgetData.reduce((sum, item) => sum + item.budget, 0);
  const totalLeads = projectedResults.reduce((sum, item) => sum + item.leads, 0);
  const totalCost = projectedResults.reduce((sum, item) => sum + item.cost, 0);
  const averageCPL = totalCost / totalLeads;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Gerenciador de Orçamento</h1>
        <p className="text-muted-foreground">
          Distribuição de verba, projeções de resultados e ROI esperado
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-1">Orçamento Total Diário</p>
          <p className="text-2xl font-bold text-foreground">R$ {totalBudget.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground mt-2">R$ {(totalBudget * 30).toFixed(2)}/mês</p>
        </Card>

        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-1">Leads Esperados/Dia</p>
          <p className="text-2xl font-bold text-foreground">{totalLeads.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground mt-2">{(totalLeads * 30).toLocaleString()}/mês</p>
        </Card>

        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-1">Custo por Lead Médio</p>
          <p className="text-2xl font-bold text-foreground">R$ {averageCPL.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground mt-2">Calculado automaticamente</p>
        </Card>

        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-1">ROAS Esperado</p>
          <p className="text-2xl font-bold text-primary">9.59x</p>
          <p className="text-xs text-muted-foreground mt-2">Baseado em análise anterior</p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget Distribution */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Distribuição de Orçamento</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={budgetData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="stage" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="budget" fill="#10B981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Budget Percentage */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Percentual por Etapa</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={budgetData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ stage, percentage }) => `${stage}: ${percentage}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="budget"
              >
                {COLORS.map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Detailed Breakdown */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Projeção Detalhada por Etapa</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Etapa</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Orçamento/Dia</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Leads Esperados</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Custo por Lead</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Objetivo</th>
              </tr>
            </thead>
            <tbody>
              {projectedResults.map((row, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-secondary/50">
                  <td className="py-3 px-4 text-foreground">{row.stage}</td>
                  <td className="text-right py-3 px-4 text-foreground">R$ {row.cost.toFixed(2)}</td>
                  <td className="text-right py-3 px-4 text-foreground">{row.leads.toLocaleString()}</td>
                  <td className="text-right py-3 px-4 text-foreground">R$ {row.cpl.toFixed(2)}</td>
                  <td className="text-right py-3 px-4">
                    {idx === 0 && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">CPL &lt; R$ 0,50</span>}
                    {idx === 1 && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">CPL &lt; R$ 2,00</span>}
                    {idx === 2 && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Conversão</span>}
                    {idx === 3 && <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Prova Social</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* ROI Calculation */}
      <Card className="p-6 bg-green-50 border-green-200">
        <h3 className="text-lg font-semibold text-green-900 mb-4">Cálculo de ROI Esperado</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-green-800 mb-1">Investimento Mensal</p>
            <p className="text-2xl font-bold text-green-900">R$ {(totalBudget * 30).toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-green-800 mb-1">Faturamento Esperado (ROAS 9.59x)</p>
            <p className="text-2xl font-bold text-green-900">R$ {(totalBudget * 30 * 9.59).toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-green-800 mb-1">Lucro Bruto Mensal</p>
            <p className="text-2xl font-bold text-green-900">R$ {(totalBudget * 30 * 8.59).toFixed(2)}</p>
          </div>
        </div>
      </Card>

      {/* Recommendations */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">📊 Recomendações de Orçamento</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>• <strong>Etapa 1 (Seguidores):</strong> Deixe sempre ativa. É o topo do funil e alimenta as próximas etapas.</li>
          <li>• <strong>Etapa 2 (Público Frio):</strong> Aumentar para R$ 20-25 se o CPL ficar abaixo de R$ 1,50.</li>
          <li>• <strong>Etapa 3 (Público Quente):</strong> É onde o lucro acontece. Escale agressivamente se ROAS &gt; 5x.</li>
          <li>• <strong>Etapa 4 (Prova Social):</strong> Mantenha ativa como suporte. Aumenta conversão da Etapa 3 em 20-30%.</li>
          <li>• <strong>Teste A/B:</strong> Reserve 10% do orçamento para testar novos criativos e públicos.</li>
        </ul>
      </Card>
    </div>
  );
}
