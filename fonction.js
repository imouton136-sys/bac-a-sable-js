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

function afficher addition(afficher, b){
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

function question("quel temps fait t'il aujourd'hui"){
    prompt
}