fetch("user.json")
    .then(rep => {
        return rep.json()
    })
    .then(data => {
        console.log(data)
        afficheutilisateur(data.users)
    })
//role recuperer kes utilisateurs 1 par 1 et de les afficher dans le dom
//parametre du tableau d'utilisateur
//return 
function afficheutilisateur(tableauutilisateur) {
    tableauutilisateur.forEach(utilisateur => {
        let utilisateurcard = `
               <div class="card large">
        <div class="flex space-between">
            <img class="large" src="bass/${utilisateur.image}" alt="">
            <div class="large-">
                <h3>${utilisateur.nom}</h3>
                <h3>${utilisateur.prenom}</h3>
                <p>${utilisateur.age}</p>
                <p>${utilisateur.poste}</p>
            </div>
        </div>
        <p class="mt-20"><i></>aa</p>
    </div>`
    document.querySelector("#user-container").innerHTML += utilisateurcard
    });
}