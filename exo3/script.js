"use strict";
// Slide 51 : Mode strict pour éviter les erreurs silencieuses

const students = [
    {num: 1000, prenom: "JOHN", nom: "DOE", note1: 14, note2: 5},
    {num: 2000, prenom: "BOB", nom: "CARLTON", note1: 7, note2: 1},
    {num: 3000, prenom: "RAYANE", nom: "SMITH", note1: 13, note2: 3},
];
// Slide 40 : Tableau d'objets
// Slide 38 : Déclaration d'un tableau avec const
// Slide 39 : Objets avec propriétés (num, prenom, nom, note1, note2)

function admis(note){
    // Slide 45 : Définition d'une fonction avec paramètre
    
    return note >= 10;
    // Slide 45 : return pour retourner une valeur booléenne
    // Slide 41 : Opérateur de comparaison (>=)
    // Slide 37 : Type primitif boolean
}

function deliberation(){
    // Slide 45 : Définition d'une fonction sans paramètres
    
    students.forEach(student => {
        // Slide 44 : Méthode forEach pour parcourir un tableau
        // Slide 46 : Fonction fléchée (arrow function)
        
        const num = student.num;
        const note1 = student.note1;
        const note2 = student.note2;
        // Slide 37 : Déclaration de variables avec const
        // Slide 39 : Accès aux propriétés d'un objet
        
        const moy = (note1 + note2) / 2 + 5;
        // Slide 37 : Déclaration de variable avec const
        // Slide 41 : Opérations arithmétiques (+, /)
        
        if(admis(moy))
            // Slide 42 : Condition if
            // Slide 45 : Appel de fonction avec paramètre
            
            console.log(num + ": ADMIS");
            // Slide 33 : console.log() pour afficher dans la console
            // Slide 41 : Opérateur de concaténation (+)
        else 
            // Slide 42 : Clause else
            
            console.log(num + ": AJOURNÉ");
            // Slide 33 : console.log() pour afficher dans la console
            // Slide 41 : Opérateur de concaténation (+)
    });
}