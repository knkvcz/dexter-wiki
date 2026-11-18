# Dexter Wiki

Página sobre a série Dexter, com os principais personagens e as séries da franquia (Dexter, New Blood, Original Sin e Resurrection). Feito com React e TypeScript para o Trabalho de Conclusão da Disciplina.

## Como executar

Rode os comandos abaixo no terminal, dentro da pasta do projeto:

    npm install
    npm run dev

Depois abra o endereço mostrado no terminal (normalmente http://localhost:5173).

## Fonte dos dados

- **Personagens (listagem principal):** carregados com `fetch` a partir do arquivo JSON `public/personagens.json`, que fica servido em `/personagens.json`.
- **Séries (listagem secundária):** vetor de objetos local em `src/data/series.ts`.