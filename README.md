# Médiathèque Jules-Verne – Exo.8, code de départ

Projet Vite + React 19 + TypeScript strict, ESLint à plat, Prettier. Backend attendu sur `http://localhost:8080` (Swagger : `/docs`).

- Lancer : `npm install` puis `npm run dev` (http://localhost:5173). Vérifier : `npm run typecheck`, `npm run lint`, `npm run build`.
- Comptes de test : `nora.benali@exemple.fr` / `adherent`, `lucas.martin@exemple.fr` / `adherent`, `biblio@mediatheque-montvert.fr` / `biblio`.
- Contenu : `src/types/mediatheque.ts` (types métier), `src/api/` (client API typé de l'Exo.7 : `requete`, `ErreurApi`, `listerLivres`, `obtenirLivre`, `listerEmprunts`, `emprunter`, `rendre`, `connecter`, `inscrire`, `moi`), `src/data/livres-mock.ts` (6 livres) et `src/data/genres.ts`, `src/index.css` (variables de l'identité visuelle, boutons, champs, messages), `src/App.tsx` qui affiche seulement le titre, `src/composants/*.css` (les feuilles de style des composants du corrigé, fournies parce que le style n'est pas évalué : importez-les dans vos composants, par exemple `import './CarteLivre.css';`).
- À faire (Exo.8) : découper la maquette `Mediatheque-Catalogue` en composants et composer l'écran avec les 6 livres mockés, sans état ni effet.
