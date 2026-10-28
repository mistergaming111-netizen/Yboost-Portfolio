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

let experiences = [
    {
        titre: "Stage d'observation en réseau et sécurité",
        annee: "2025",
        entreprise: "OC-Solutions",
        description: `Au cours de mon stage d'observation, j'ai découvert le quotidien d'une équipe IT,
            réseau et cybersécurité. J'ai pu observer la gestion et la supervision d'un parc informatique,
            participer à la configuration d'équipements réseau (switchs, routeurs, pare-feu)
            et comprendre la mise en place des politiques de sécurité et de filtrage.`
    },
    {
        titre: "Stage d'observation en entreprise",
        annee: "2025",
        entreprise: "NSH",
        description: `Lors de mon stage d'observation, j'ai exploré l'organisation globale d'une entreprise
            en découvrant ses différents services (informatique, communication, comptabilité,
            finance, direction et design). Cette immersion polyvalente
            m'a permis de comprendre le rôle de chaque pôle, leurs synergies au quotidien
            et la façon dont ils collaborent pour faire tourner l'activité.`
    }
];

let listeStages = document.getElementById("mesStages");

for (let i = 0; i < experiences.length; i++) {

    let currentExp = experiences[i];

    let html = `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#stage${i}">
                    <span>
                        <strong>${currentExp.titre}</strong>
                        <span class="badge bg-secondary ms-2">${currentExp.annee}</span><br>
                        <small class="text-body-secondary">${currentExp.entreprise}</small>
                    </span>
                </button>
            </h2>
            <div id="stage${i}" class="accordion-collapse collapse" data-bs-parent="#mesStages">
                <div class="accordion-body">
                    ${currentExp.description}
                </div>
            </div>
        </div>
    `;

    listeStages.innerHTML += html;
}
