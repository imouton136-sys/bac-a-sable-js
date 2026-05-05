let mot = "bonjour";
lettre = mot.length -1;


//role : afficher la derniere lettre
//parametre: connaitre le mot
//retour:
function dernierelettre(mot){
    let pos =mot.length -1;

}
console.log(dernierelettre("Irvin"))

// role : afficher la noubelle offre apres avoir remplacer le produit bubble tera par un autre
// parametre : le nouveau produit et la liste initial "the, cafe, tisane, buubble tea"
// return : rien

function nouvelleoffre(nouveauproduit, listeinitial){
    console.log( listeinitial.replace("bubble tea", nouveauproduit))
}
nouvelleoffre("matcha", "cafe, bubble tea, tisane")

// role : afficher des balises a ma page html
// parametre : les balise a ajouter
// return : rien

function ajouterbalise(balise){
    document.querySelector("body").innerHTML+= balise
}
ajouterbalise("<h1>coucou</h1>")
ajouterbalise("<p> on est trop fort en js </p>")

function afficheraddition(afficher, b){
    ajouterbalise(`<p> ${a+b} </p>`)
}
afficheraddition(7,5)
// role : afficher le prenom dans le body
// parametre : prenom
// return : rien

function afficherprenom(prenom){
    ajouterbalise(`<p>${prenom}</p>`)
}
afficherprenom("david")

// role : poser une question
// parametre : la question a poser
// return : la reponse 

function poseQuestion(question){

    return prompt(question)
}

let rep = poseQuestion("le ciel est il bleu ?")

console.log(rep)
function convertion(prix, taux){
    return prix * taux
}
let resultat = convertion(3, 1.17)
console.log(`le prix convertir est de ${resultat} dollars`)

//role demander un prix et un taux de change a l'utulisateur et convertir le prix
// parametre prix et taux de change
// return prix convertir

function convertisseur(){
    //demander le prix a convertir
    let prix = parseFloat(prompt("quel prix veux tu convertir"))

    //demander le taux
    let taux = parseFloat(prompt("a quel taux"))

    //convertit
    return prix * taux

    //resultat
}
let prixconvertit=convertisseur()
alert(`le prix convertit est de ${prixconvertit} dollars`)

function moyenne(){
    let moyennefrancais = parseFloat(prompt("quel est la moyenne de francais"))
    let moyennemath = parseFloat(prompt("quel est la moyenne de math"))
    let moyennehistoire = parseFloat(prompt("quel est la moyenne de histoire"))
    let moyennesvt = parseFloat(prompt("quel est la moyenne de svt"))
    return (moyennefrancais+moyennemath+moyennehistoire+moyennesvt)/4
}
let tmoyenne = moyenne()
alert(`la moyenne est ${tmoyenne}`)