let promo11 = [

    {
        prenom : "alexis",
        age : 19,
        ville : "St Etienne",
        job : "gagner de l'argent"
    },
    {
        prenom : "Romain",
        age : 27,
        ville : "St Etienne", 
        job : "data scientist"
    },
    {
        prenom : "Ludivine",
        age : 29,
        ville : "St Etienne", 
        job : "formatrice"
    },
    {
        prenom : "Nico",
        age : 42,
        ville : "St Etienne", 
        job : "eleveur de poulet"
    },
]
tableaupromo11.forEach(eleve => {
    return`
        l'age de l'eleve est ${eleve.age} ans
        son prenom est ${eleve.prenom}
        et il habite a ${eleve.ville} `)
})