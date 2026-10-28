# Portfolio - Cal L

Mon CV en ligne, fait pendant le Yboost B1 à Ynov.

Site : https://mistergaming111-netizen.github.io/Yboost-Portfolio/

## Contenu

- Présentation
- Compétences (réseau, système, cyber)
- Expériences (mes stages)
- Projets
- Formulaire de contact (pas encore relié à la base)

Les projets et les expériences ne sont pas écrits dans le HTML : ils sont récupérés depuis Supabase à l'ouverture de la page. Pour en ajouter, il suffit d'ajouter une ligne dans la table correspondante.

## Technos

- HTML / CSS / JavaScript
- Bootstrap 5
- Supabase (tables `projets` et `experiences`, RLS en lecture seule)
- GitHub Actions + GitHub Pages pour le déploiement

## Lancer le projet

```
git clone https://github.com/mistergaming111-netizen/Yboost-Portfolio.git
cd Yboost-Portfolio
```

Créer un fichier `config.js` à la racine (il n'est pas sur le repo) :

```js
window.APP_CONFIG = {
    SUPABASE_URL: "url du projet supabase",
    SUPABASE_KEY: "clé anon"
};
```

Puis ouvrir `index.html` avec Live Server dans VS Code.

## Déploiement

Chaque push sur `main` lance le workflow `.github/workflows/deploy.yml`, qui crée `config.js` à partir des secrets GitHub (`SUPABASE_URL` et `SUPABASE_KEY`) puis publie le site sur GitHub Pages.
