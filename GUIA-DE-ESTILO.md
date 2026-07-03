# 🎨 Guia de Estilo — Site Pessoal

Guia de identidade visual e padrões de código do site pessoal do Silvio.

---

## 🎯 Princípios de Design

- **Limpo e moderno** — minimalismo com propósito, sem excessos visuais
- **Profissional** — transmite credibilidade e seriedade
- **Pessoal** — toque humano sem perder o profissionalismo
- **Responsivo** — experiência consistente em qualquer dispositivo

---

## 🎨 Paleta de Cores

### Cores Principais

| Cor | Amostra | Código Hex | RGB | Uso |
|---|---|---|---|---|
| **Azul Escuro (Primária)** | ████ | `#1a365d` | `rgb(26, 54, 93)` | Navbar, headings, botões primários, links |
| **Azul Médio (Secundária)** | ████ | `#2b6cb0` | `rgb(43, 108, 176)` | Hovers, links, destaques |
| **Azul Claro (Acento)** | ████ | `#4299e1` | `rgb(66, 153, 225)` | Elementos interativos, bordas focadas |

### Cores Neutras

| Cor | Amostra | Código Hex | RGB | Uso |
|---|---|---|---|---|
| **Quase Preto** | ████ | `#1a202c` | `rgb(26, 32, 44)` | Texto principal |
| **Cinza Escuro** | ████ | `#4a5568` | `rgb(74, 85, 104)` | Texto secundário, parágrafos |
| **Cinza Médio** | ████ | `#a0aec0` | `rgb(160, 174, 192)` | Bordas, placeholders, texto desabilitado |
| **Cinza Claro** | ████ | `#e2e8f0` | `rgb(226, 232, 240)` | Fundo de cards, seções alternadas |
| **Quase Branco** | ████ | `#f7fafc` | `rgb(247, 250, 252)` | Fundo principal |

### Cores de Apoio

| Cor | Amostra | Código Hex | RGB | Uso |
|---|---|---|---|---|
| **Verde (Sucesso)** | ████ | `#38a169` | `rgb(56, 161, 105)` | Mensagens de sucesso, status online |
| **Vermelho (Erro)** | ████ | `#e53e3e` | `rgb(229, 62, 62)` | Erros de formulário, validação |
| **Amarelo (Aviso)** | ████ | `#d69e2e` | `rgb(214, 158, 46)` | Alertas e avisos |

### Gradiente

```css
background: linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%);
/* Usado no hero e no footer */
```

### Contraste WCAG

| Combinação | Taxa | Nível |
|---|---|---|
| `#1a202c` sobre `#f7fafc` | 16.2:1 | ✅ AAA |
| `#4a5568` sobre `#f7fafc` | 9.1:1 | ✅ AAA |
| `#1a365d` sobre `#f7fafc` | 11.4:1 | ✅ AAA |
| `#ffffff` sobre `#1a365d` | 9.3:1 | ✅ AAA |

---

## 📝 Tipografia

### Fontes

| Elemento | Fonte | Peso | Fallback |
|---|---|---|---|
| **Body / Textos** | `Inter` | 300, 400, 500, 600, 700 | `system-ui, -apple-system, sans-serif` |
| **Código / Técnico** | `Fira Code` | 400, 600 | `monospace` |

### Tamanhos (escala fluida com `clamp`)

```css
/* Escala tipográfica */
:root {
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);     /* 12–14px */
  --text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);         /* 14–16px */
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);        /* 16–18px */
  --text-lg: clamp(1.125rem, 1rem + 0.6vw, 1.25rem);         /* 18–20px */
  --text-xl: clamp(1.25rem, 1.1rem + 0.8vw, 1.5rem);         /* 20–24px */
  --text-2xl: clamp(1.5rem, 1.3rem + 1vw, 1.875rem);         /* 24–30px */
  --text-3xl: clamp(1.875rem, 1.5rem + 1.5vw, 2.25rem);      /* 30–36px */
  --text-4xl: clamp(2.25rem, 1.8rem + 2vw, 3rem);            /* 36–48px */
}
```

### Altura de Linha

| Elemento | Line-height |
|---|---|
| Headings (h1-h3) | 1.2 |
| Headings (h4-h6) | 1.3 |
| Parágrafos | 1.7 |
| Listas | 1.6 |

### Exemplos de Uso

```css
h1 {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: var(--text-4xl);
  font-weight: 700;
  line-height: 1.2;
  color: #1a202c;
}

p {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: var(--text-base);
  font-weight: 400;
  line-height: 1.7;
  color: #4a5568;
}

code {
  font-family: 'Fira Code', monospace;
  font-size: 0.9em;
}
```

---

## 🧩 Componentes

### Navbar

```css
/* Navbar fixa no topo, fundo escuro, links em branco */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: #1a365d;
  padding: 1rem 2rem;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar a {
  color: #f7fafc;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.navbar a:hover {
  color: #4299e1;
}
```

- Altura: `64px` (incluindo padding)
- Mobile: menu hamburguer com toggle JS
- Link ativo: sublinhado ou cor `#4299e1`
- Logo/brand à esquerda, links à direita
- Sombra: `0 2px 10px rgba(0,0,0,0.1)`

### Footer

```css
.footer {
  background: linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%);
  color: #f7fafc;
  padding: 2rem 1rem;
  text-align: center;
}

.footer a {
  color: #4299e1;
  text-decoration: none;
}
```

- Fundo gradiente (mesmo do hero)
- Centralizado, com links para redes sociais e copyright
- Ícones das redes em branco, hover em `#4299e1`

### Cards (Projetos)

```css
.card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}
```

- Grid de 3 colunas (desktop), 2 (tablet), 1 (mobile)
- Imagem no topo, título, descrição curta, link "Ver projeto"
- Sombra suave, elevação no hover
- Borda sutil: `1px solid #e2e8f0`

### Botões

```css
/* Botão primário */
.btn-primary {
  background: #1a365d;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #2b6cb0;
}

/* Botão outline */
.btn-outline {
  background: transparent;
  color: #1a365d;
  border: 2px solid #1a365d;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-outline:hover {
  background: #1a365d;
  color: #ffffff;
}
```

| Variante | Fundo | Texto | Borda |
|---|---|---|---|
| `btn-primary` | `#1a365d` → `#2b6cb0` | `#ffffff` | — |
| `btn-outline` | Transparente → `#1a365d` | `#1a365d` → `#ffffff` | `2px solid #1a365d` |

### Formulário

```css
.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: var(--text-base);
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
}

.form-input--error {
  border-color: #e53e3e;
}
```

- Todos os inputs com `<label>` explícito
- Mensagem de erro abaixo do campo inválido
- Estado de sucesso (verde) após envio
- Espaçamento entre campos: `1.5rem`

### Hero

```css
.hero {
  background: linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%);
  color: #ffffff;
  padding: 8rem 2rem 4rem;
  text-align: center;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

- Gradiente escuro como fundo
- Foto do perfil (circular, 150x150px, borda 4px branca)
- Nome em `h1` branco, subtítulo abaixo
- CTA "Conheça meu trabalho" como botão outline branco

---

## 📐 Layout e Grid

### Breakpoints

| Dispositivo | Largura | Colunas | Padding |
|---|---|---|---|
| **Mobile** | < 480px | 1 | 1rem |
| **Tablet** | 480–768px | 2 | 2rem |
| **Desktop** | 768–1024px | 3 | 4rem |
| **Widescreen** | > 1024px | 3 (max 1200px container) | — |

### Container

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}
```

### Espaçamentos

```css
:root {
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  --space-2xl: 3rem;     /* 48px */
  --space-3xl: 4rem;     /* 64px */
}
```

---

## 💻 Padrões de Código

### HTML

- **Semântica**: usar tags apropriadas (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`)
- **Acessibilidade**: `alt` em todas imagens, `aria-label` em ícones
- **Responsividade**: meta viewport no `<head>`
- **Indentação**: 2 espaços
- **Encoding**: UTF-8

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Silvio — Site Pessoal</title>
</head>
```

### CSS

- **Mobile-first**: estilos base sem media query, depois breakpoints progressivos
- **Custom properties** no `:root` para cores, espaçamentos e tipografia
- **BEM** (Block Element Modifier) para nomenclatura de classes: `.card`, `.card__title`, `.card--featured`
- **Reset básico** via `reset.css` (box-sizing, margin/padding zero)
- **Variáveis CSS** em vez de pré-processadores

```css
/* Nomenclatura BEM */
.navbar { }
.navbar__logo { }
.navbar__menu { }
.navbar__link { }
.navbar__link--active { }
```

### JavaScript

- **ES6+**: arrow functions, template literals, const/let
- **DOMContentLoaded** para inicialização
- **Módulos**: cada funcionalidade em arquivo separado
- **Eventos**: event listeners em vez de `onclick` inline
- **Sem dependências externas** (além de Font Awesome)

```javascript
// Padrão de inicialização
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initForm();
  initScrollAnimation();
});
```

---

## 📱 Micro-interações

- **Navbar**: ao scroll, adicionar sombra mais pronunciada (classe `.scrolled`)
- **Links**: transição suave de cor (`transition: color 0.2s`)
- **Cards**: elevação sutil no hover (`translateY(-4px)`)
- **Botões**: feedback visual no hover e active (escala 0.98 no click)
- **Scroll suave**: `scroll-behavior: smooth` no HTML
- **Animações de entrada**: fade-in ao scroll via Intersection Observer

---

## 📄 Arquivos e Organização

```
css/
├── reset.css        # Normalize básico (box-sizing, margens)
├── style.css        # Variáveis, layout, tipografia, utilitários
└── components.css   # Estilos de componentes (navbar, cards, footer)

js/
├── main.js          # Navbar toggle, scroll, funcionalidades globais
├── form.js          # Validação e envio do formulário
└── animations.js    # Intersection Observer, fade-in, scroll effects
```

---

## 🔍 Checklist de Qualidade

- [ ] Validação HTML (W3C) sem erros
- [ ] Contraste WCAG AA mínimo em todos os elementos
- [ ] Navegável por teclado (Tab, Enter, Escape)
- [ ] Layout funcional em 320px, 480px, 768px, 1024px, 1440px
- [ ] Sem console errors no JavaScript
- [ ] Performance: Lighthouse ≥ 90 em todas as categorias
- [ ] Links externos abrem em nova aba (`target="_blank" rel="noopener"`)
- [ ] Formulário com validação client-side e feedback visual

---

> Este guia de estilo deve ser consultado antes de qualquer alteração visual no site. Mantenha-o atualizado conforme o projeto evolui.
