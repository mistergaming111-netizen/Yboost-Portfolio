let projects = [
    {
        name: "Projet Red",
        body: "Projet d'un jeu jouable dans le terminal en Go.",
        lien: "https://github.com/ItsForTheVibes/Projet-Red-Mr-Ybot"
    },
    {
        name: "Projet Vecteur26",
        body: `Vecteur 26 est une agence web dédiée à la création de sites vitrines sur mesure,
               performants et ultra-rapides. Code sur mesure et optimisé, sans CMS lourd
               ni constructeur de pages (pas de WordPress ni Wix).`,
        lien: "https://vecteur26.fr"
    }
];

let listeProjets = document.getElementById("liste-projets");

for (let i = 0; i < projects.length; i++) {

    let currentProject = projects[i];

    let html = `
        <div class="col-md-6">
        <div class="card h-100 card-hover">
            <div class="card-body d-flex flex-column">
                <h5>${currentProject.name}</h5>
                <p>${currentProject.body}</p>
                <a href="${currentProject.lien}" target="_blank" class="btn btn-accent mt-auto">Voir le projet</a>
            </div>
        </div>
        </div>
    `;

    listeProjets.innerHTML += html;
}
