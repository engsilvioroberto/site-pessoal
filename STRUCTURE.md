# Site Pessoal — Silvio Roberto Filho

## Estrutura do Projeto

```
site-pessoal/
├── index.html          # Home — Hero section, bio resumida, CTA
├── sobre.html          # Sobre — Bio completa, skills, interesses
├── projetos.html       # Projetos — Portfólio com cards
├── contato.html        # Contato — Formulário + redes sociais
├── css/
│   └── style.css       # Design responsivo, paleta de cores, tipografia
├── js/
│   └── script.js       # Navegação, formulário, smooth scroll, animações
└── assets/             # Imagens e recursos estáticos
```

## Sitemap

| # | Página     | Rota           | Descrição                                      |
|---|------------|----------------|------------------------------------------------|
| 1 | Home       | index.html     | Hero section, bio curta, chamada para ação     |
| 2 | Sobre      | sobre.html     | Bio detalhada, skills técnicas, interesses     |
| 3 | Projetos   | projetos.html  | Grid de cards com projetos fictícios           |
| 4 | Contato    | contato.html   | Formulário de contato, e-mail, redes sociais   |

## Wireframe Textual

### Home (index.html)
```
┌─────────────────────────────────────────┐
│  [Logo]  Home  Sobre  Projetos  Contato │ ← Navbar fixa
├─────────────────────────────────────────┤
│                                         │
│      🚀 Olá, eu sou                     │
│      Silvio Roberto Filho               │ ← Hero title
│      Desenvolvedor · IA · Inovação      │ ← Subtítulo
│      [ver projetos] [contato]           │ ← CTAs
│                                         │
├─────────────────────────────────────────┤
│  Seção: Destaque                        │
│  Breve introdução profissional          │
├─────────────────────────────────────────┤
│  Footer: © 2025 — Silvio Roberto Filho  │
└─────────────────────────────────────────┘
```

### Sobre (sobre.html)
```
┌─────────────────────────────────────────┐
│  Navbar                                 │
├─────────────────────────────────────────┤
│  Sobre                                   │
│  ─────────────────────────────────────  │
│  Bio completa...                         │
│                                         │
│  Skills Técnicas                        │
│  [ HTML ] [ CSS ] [ JS ] [ Python ]     │ ← Tags
│  [ React ] [ Node ] [ Docker ]          │
│                                         │
│  Interesses                             │
│  · Inteligência Artificial              │
│  · Automação & DevTools                 │
│  · Open Source                          │
└─────────────────────────────────────────┘
```

### Projetos (projetos.html)
```
┌─────────────────────────────────────────┐
│  Navbar                                 │
├─────────────────────────────────────────┤
│  Projetos                               │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐│
│  │Hermes    │ │DataViz   │ │API       ││
│  │Automation│ │Dashboard │ │Gateway   ││
│  │ → ver    │ │ → ver    │ │ → ver    ││
│  └──────────┘ └──────────┘ └──────────┘│
│  ┌──────────┐ ┌──────────┐ ┌──────────┐│
│  │DevOps    │ │Bot       │ │Bio       ││
│  │Pipeline  │ │Assistant │ │Analytics ││
│  │ → ver    │ │ → ver    │ │ → ver    ││
│  └──────────┘ └──────────┘ └──────────┘│
└─────────────────────────────────────────┘
```

### Contato (contato.html)
```
┌─────────────────────────────────────────┐
│  Navbar                                 │
├─────────────────────────────────────────┤
│  Contato                                │
│  ┌─────────────────────────────────┐    │
│  │ Nome: [______________]         │    │
│  │ Email: [______________]        │    │
│  │ Mensagem: [______________]     │    │
│  │ [Enviar]                       │    │
│  └─────────────────────────────────┘    │
│                                         │
│  Ou me encontre em:                     │
│  [GitHub] [LinkedIn] [Email]            │
└─────────────────────────────────────────┘
```

## Paleta de Cores

- **Primary:** `#6C63FF` (roxo) — elementos principais, links, botões
- **Secondary:** `#FF6584` (rosa) — destaques, hover, badges
- **Dark:** `#2D2D44` — fundo do navbar, footer, headings
- **Dark Alt:** `#1E1E2F` — fundo de seções alternadas
- **Light:** `#F5F5FA` — fundo principal
- **Text:** `#333333` — corpo do texto

## Tipografia

- **Headings:** `'Inter', sans-serif` — pesos 600, 700, 800
- **Body:** `'Inter', sans-serif` — peso 400, 500
- **Mono:** `'Fira Code', monospace` — código técnico

## Responsividade

- **Desktop:** ≥ 1024px — layout completo, grid de 3 colunas
- **Tablet:** 768px – 1023px — grid de 2 colunas, ajustes de padding
- **Mobile:** < 768px — layout empilhado, menu hamburguer, padding reduzido
