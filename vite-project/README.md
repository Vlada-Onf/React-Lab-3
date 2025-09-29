# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Діаграма дерева компонентів
graph TD
    App --> TodoList
    TodoList --> AddTodoForm
    TodoList --> TodoItem
    AddTodoForm -->|props: onAddTodo| TodoList
    TodoItem -->|props: task, onDelete| TodoList
    https://mermaid.live/edit#pako:eNptkM1qwzAQhF9F7NkxjWRbjg6FUBMo9JhT8UVU29gk-kGWIa3jd6_kJm0O2dN-Mzu7QhN8WIUg4OCl68i-aQ2JtXWOrFbPZG-VfeuH8KveaLG2SiXeWa8fuAleA16tu9nkXpy3bhDEmqtxeXAope-HgxyOWYw0eMKA_wnI4tt7BSL4ETPQ6LVMCFPa1ULoUGMLIrZK-mMLrZljxknzbq2-xbwdDx2IT3kaIo1OyYBNL-Ov6D_Vo1HoX-xoAgi6XnaAmOAMgq2rvKS8przitGSMZ_AV1SIvGC9qSssNqzaczxl8L0ef8pqX8w_OU3gL