# Frontend Livros (React + Vite)

Interface que consome a API Flask (`api-livros-flask`) e exibe os livros ao clicar em **Buscar Livros**.

## Executar
1. Inicie a API Flask (porta 5000): `python app.py`
2. Neste projeto:
```bash
npm install
npm run dev
```
3. Abra o endereço mostrado pelo Vite (normalmente http://localhost:5173).

O Vite encaminha `/api/*` para `http://127.0.0.1:5000/*` (ver `vite.config.js`).
