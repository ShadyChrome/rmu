# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

``` mermaid
graph TD 
    A[Hauptkomponente App] --> B[Router]
    A[Hauptkomponente App] --> C[Layout]
    C[Layout] --> B
    B --> HomePage
    B --> D[Wizard]
    B --> Characters
    D --> CharacterDetailsPage
    D --> E[StatsPage]
    D --> ProfessionBonusesPage
    D --> SkillsPage
    E --> BoostSection
    E --> StatTable
    E --> SwapSection
```
