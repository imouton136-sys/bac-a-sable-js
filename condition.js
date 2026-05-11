/*console.log(9 === 10)
console.log("Hello" !== "hello")
console.log(8 < 12)
let b = 5
let c = 6
if(b === c){
    console.log("bien joue")
}else{
    console.log("dommage")
}

if (nombre % 2 === 0){
    console.log(pair)
}else{
    console.log(impair)
}

let meteo = "neige"
if (meteo == "solei"){
    console.log("met une casquette")
}else if(meteo == "pluie"){
    console.log("prend ton parapluie")
}else if(meteo == "neige"){
    console.log("met tes botte")
}
alert("quel temps fait il")

if(age < 12){
    console.log("enfant")
}
else if(age >= 12 && age<=18 ){
    console.log("adolescent")
}else {
    console.log("adulte")
}


let a =12
let b=12
let c=12
if(a===b && b===c && c===a){
    console.log("triangle equilateral")
}else if(a!=b && b!=c && c!=a){
    console.log("triangle quelquonque")
}else{
    console.log("triangle isosele")
}

let age = 22
let achat = 8
let membre=true



if (age >= 18){
    // est ce que elle est membre OU est ce que achate de plus e 100e
    if(membre === true || achat>100){
        //ok
        console.log("reduction accorde")
    }else{
        //not ok
    }
}else {
    console.log("Reduction refuse")
}


function feutricolor (){
    let reponseutilisateur = prompt("de quel couleur est le feu")
    if(reponseutilisateur == "rouge"){
        console.log("je m'arrete")
    }else if(reponseutilisateur == "vert"){
        console.log("je passe")
    }else if(reponseutilisateur == "orange"){
        console.log("je freine")
    }else
        console.log("danger, feu defectueux")
}

function moyennegeneral(francais, math, anglais, histoire) {
    return (francais + math + anglais + histoire) / 4
}
console.log(`la moyenne est de ${moyennegeneral(8, 12, 5, 20)}`)

function commentaire(moyennegeneral) {
    if (moyennegeneral < 10) {
        return("il faut travailler plus")
    } else if (moyennegeneral > 10 && moyennegeneral <13) {
        return("poursuivez vos efforts")
    } else if (moyennegeneral > 13 && moyennegeneral <15) {
        return("Bon tavail")
    } else if (moyennegeneral > 15 && moyennegeneral <17) {
        return("bravo")
    } else if (moyennegeneral > 17) {
        return("excellent")
    }
}
function multiplication(chiffreAmultiplier){
    for(let i=1; i<10 ; i++){

        chiffreAmultiplier*i

    }
}
function punition(){
    for(let i = 1; i<=50; i++){
        console.log("i will not waste chalk")
    }
}
function epele(mot){
    for(let i = 0; i=mot.length; i++){
        console.log(mot.charAt(i))
    }
}
let panier = ["banane", "pomme", "orange", "poire", "raisin", litchi]
console.log (`le premier fruit de panier est ${fruit[0]}`)
function moyenne(notes){
    let somme = 0; 
    notes.forEach(note => {
        somme = somme +note;
    });
    let moyenne = somme/notes.lenth
    return moyenne
}
*/
let calcul = [8, 12]
function additionner(nombre) {
    let addition = calcul
    return addition
}
let fruits = ["cerises", "pommes", "cerises", "pommes", "poires", "bananes",
    "pommes", "poires", "cerises"];
let pommes = 0
let cerises = 0
let poires = 0
//role calculer le nombre de pomme cerise et poire
//parametre panier de fruit
//return affiche
function compte(panierfruit) {
 
    panierfruit.forEach(fruit => {

        if(fruit === "pommes"){
            pommes++
        }else if (fruit === "poires"){
            poires++
        }else if (fruit === "cerises")
            cerises++
      
    });
    console.log(`il y a ${pommes} pommes, ${poires} poires, ${cerises} cerises`)
    
}
compte(fruits)
let lettre = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


//role: encoder le mot
//parametre: le mot
// retour le nouveau mot
function code(mot){
    for(let i = i=0, i<mot.length, i++){
        return(mot.length+1, lettre)
    }
}
console.log()
