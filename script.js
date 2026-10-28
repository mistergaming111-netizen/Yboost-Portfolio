const supabaseUrl = "https://vzhnxexygxlnyomheqss.supabase.co/rest/v1";
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6aG54ZXh5Z3hsbnlvbWhlcXNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxODU4MzgsImV4cCI6MjEwODc2MTgzOH0.3CxLBFJVH5UZfYLeK5eTTA363AVq5qs92HBEGmiRhVk";

let listeProjets = document.getElementById("liste-projets");
let listeStages = document.getElementById("mesStages");

fetch(supabaseUrl + "/projets?order=id.asc", { headers: { apiKey: apikey } })
    .then((res) => res.json())
    .then((data) => {

        for (let i = 0; i < data.length; i++) {

            let currentProject = data[i];

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
    });

fetch(supabaseUrl + "/experiences?order=id.asc", { headers: { apiKey: apikey } })
    .then((res) => res.json())
    .then((data) => {

        for (let i = 0; i < data.length; i++) {

            let currentExp = data[i];

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
    });
