
let promo11 = [

    {
        prenom: "alexis",
        age: 19,
        ville: "St Etienne",
        job: "gagner de l'argent"
    },
    {
        prenom: "Romain",
        age: 27,
        ville: "St Etienne",
        job: "data scientist"
    },
    {
        prenom: "Ludivine",
        age: 29,
        ville: "St Etienne",
        job: "formatrice"
    },
    {
        prenom: "Nico",
        age: 42,
        ville: "St Etienne",
        job: "eleveur de poulet"
    },
]

/**
 * role : afficher des fiche eleve dans le dom
 * @param {*} tableauPromo11 
 * return : rien car elle affiche
 */
function ficheEleveDansDOM(tableauPromo11) {

    //prendre les eleves un par un 
    tableauPromo11.forEach(eleve => {
        // ecrtire leur prenom, leur age et leur ville en console 

        //apeller ma fonction dont le rôle est d'envoyer dans le DOM
        ajouterAuBody(`
        l'age de l'éléve est : ${eleve.age} ans
        son prénom est ${eleve.prenom}
        et il habite a ${eleve.ville}
        `)

    });

}


function ajouterAuBody(trucAafficher) {

    document.querySelector("body").innerHTML += trucAafficher

}
let recette={
  nom:"poulet rôti au thym et à l'ail",
  difficulte: "Facile",
  tempPreparation: "15 min",
  tempCuisson: "1h 15 min",
  nbrPortions: 6,
  ingredients : ["huile d'olive","beurre fondu","feuilles de thym","sel","poivre","ail"]
}
console.log(`La recette du ${recette.nom}
    Difficulté : ${recette.difficulté}
    Temps de preparation : ${recette.tempPreaparation}
    Temps de cuisson : ${tempCuisson}`)
let recettes = [
  {
    nom: "poulet rôti au thym et à l'ail",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "1h 15 min",
    nbrPortions: 6,
    ingredients: ["huile d'olive","beurre fondu","feuilles de thym","sel","poivre","ail"]
  },
  {
    nom: "spaghetti à la bolognaise",
    difficulte: "Moyenne",
    tempPreparation: "20 min",
    tempCuisson: "40 min",
    nbrPortions: 4,
    ingredients: ["spaghetti","viande hachée","oignon","carotte","tomate concassée","ail","huile d'olive","sel","poivre"]
  },
  {
    nom: "salade César",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "0 min",
    nbrPortions: 2,
    ingredients: ["laitue romaine","croûtons","parmesan râpé","filet de poulet","sauce César","sel","poivre"]
  }
];
function ficherecette(){
    forEach(recette => {
        console.log(``)
    })
}
let ingredientsListe = "";
recette?ingredients.forEach(ingredient =>{
    ingredientsListe += `<li> ${ingredient} </li>`
    console.log()
});
let bouton = document.querySelector("btn")
bouton.addEventListener("clic")