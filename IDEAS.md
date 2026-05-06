# Design Brainstorm - Dashboard Funil Meta Ads

## Conceito Visual Escolhido: "Performance Elegante"

Optei por um design **moderno e profissional** que transmite confiança e clareza. O dashboard segue uma abordagem de **data-driven storytelling**, onde cada elemento visual reforça a jornada do funil e o progresso da implementação.

### Design Philosophy

**Princípios Fundamentais:**
1. **Clareza Hierárquica:** As etapas do funil são o centro visual. Cada etapa tem peso visual proporcional à sua importância.
2. **Fluxo Visual:** O layout segue a progressão natural do funil (topo → base), reforçando a jornada do cliente.
3. **Interatividade Discreta:** Botões e controles aparecem quando necessários, sem poluir a interface.
4. **Cores Estratégicas:** Verde para ação/sucesso, Azul para informação, Laranja para atenção/melhorias.

### Paleta de Cores

| Cor | Uso | Hex |
| :--- | :--- | :--- |
| Verde Vibrante | Etapas ativas, CTAs principais | #10B981 |
| Azul Profundo | Informações, dados, backgrounds | #1E40AF |
| Laranja Quente | Alertas, melhorias necessárias | #F97316 |
| Cinza Neutro | Backgrounds, divisores | #F3F4F6 |
| Branco Limpo | Cartões, fundos claros | #FFFFFF |

### Tipografia

*   **Títulos:** Geist Bold (peso 700) - transmite força e confiança
*   **Subtítulos:** Geist SemiBold (peso 600) - hierarquia clara
*   **Corpo:** Geist Regular (peso 400) - leitura fluida
*   **Dados/Números:** Geist Mono (monoespacial) - precisão visual

### Layout Paradigm

O dashboard usa uma **estrutura em cards fluidos** com:
1. **Sidebar Colapsável:** Navegação entre seções (Funil, Criativos, Orçamento, Checklist)
2. **Grid Principal:** Cartões que se reorganizam responsivamente
3. **Seção Destacada:** A etapa atual/em foco ocupa mais espaço visual
4. **Rodapé Flutuante:** Botão de ação principal (Iniciar Implementação) sempre acessível

### Signature Elements

1. **Indicador de Progresso Circular:** Mostra o percentual de conclusão do funil
2. **Linhas de Fluxo:** Conectam visualmente as etapas do funil
3. **Cards com Sombra Suave:** Profundidade sem excesso
4. **Badges Coloridas:** Indicam status (Planejado, Ativo, Pausado, Concluído)

### Interaction Philosophy

*   **Hover Effects:** Cards ganham sombra aumentada e um leve deslocamento vertical
*   **Transições Suaves:** 300ms de duração para todas as animações
*   **Feedback Imediato:** Cliques em botões mostram confirmação visual instantânea
*   **Tooltips Contextuais:** Explicam métricas e termos técnicos ao passar o mouse

### Animation Guidelines

*   **Entrada de Página:** Fade-in suave (200ms) dos cards em cascata
*   **Transição entre Abas:** Deslizamento horizontal (250ms) com fade
*   **Hover em Cards:** Elevação com sombra aumentada (150ms)
*   **Progresso de Checklist:** Checkmark animado com bounce suave (400ms)

### Typography System

*   **H1 (Títulos Principais):** 32px, Bold, Geist
*   **H2 (Subtítulos):** 24px, SemiBold, Geist
*   **H3 (Títulos de Seção):** 18px, SemiBold, Geist
*   **Body (Texto Principal):** 16px, Regular, Geist
*   **Small (Legendas/Dados):** 14px, Regular, Geist
*   **Mono (Números/Código):** 14px, Regular, Geist Mono

---

## Estrutura de Páginas

### 1. Dashboard Principal
*   Visão geral do funil com cards das 4 etapas
*   Indicador de progresso geral
*   Links rápidos para cada seção

### 2. Página de Etapas Detalhadas
*   Cada etapa em um card expansível
*   Roteiros de criativos
*   Métricas esperadas
*   Botão para iniciar/editar

### 3. Página de Criativos
*   Galeria de criativos por etapa
*   Roteiros em formato de cards
*   Dicas de produção

### 4. Página de Orçamento
*   Gráfico de distribuição de verba
*   Tabela de gastos por etapa
*   Calculadora de ROI

### 5. Página de Checklist
*   Tarefas de implementação
*   Progresso visual
*   Datas de início/conclusão

---

## Decisões de Design

**Por que não usar um layout tradicional de tabelas?**
Tabelas são densas e difíceis de escanear. Cards com hierarquia visual clara permitem que o usuário entenda o funil em segundos.

**Por que cores vibrantes?**
O negócio é sobre confiança e ação. Cores vibrantes (verde, laranja) criam urgência e motivação sem ser agressivas.

**Por que Geist como tipografia?**
Geist é moderna, legível em telas pequenas e transmite profissionalismo. É a escolha de startups de alto crescimento.

**Por que sidebar colapsável?**
Maximiza o espaço para conteúdo em mobile, mantendo a navegação acessível em desktop.
