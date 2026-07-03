# site-pessoal

[![Deploy to GitHub Pages](https://github.com/engsilvioroberto/site-pessoal/actions/workflows/deploy.yml/badge.svg)](https://github.com/engsilvioroberto/site-pessoal/actions/workflows/deploy.yml)

Site pessoal — Projeto piloto de gestão com Hermes (Notion + subagentes + GitHub)

🔗 **Site publicado:** https://engsilvioroberto.github.io/site-pessoal/

## Deploy

Este site é publicado automaticamente via **GitHub Pages** usando **GitHub Actions**.

- O workflow `.github/workflows/deploy.yml` é disparado a cada push na branch `main`.
- Os arquivos estáticos (HTML, CSS, JS) são empacotados e publicados pelo `actions/deploy-pages@v4`.
- Não há etapa de build — o conteúdo do repositório é servido diretamente.

Para publicar alterações: abra um PR com destino a `develop`, merge em `develop` e depois em `main`. O deploy acontece automaticamente após o merge em `main`.
