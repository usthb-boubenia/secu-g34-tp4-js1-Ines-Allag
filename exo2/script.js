"use strict";
// Slide 51 : Mode strict pour éviter les erreurs silencieuses

const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
// Slide 38 : Déclaration d'un tableau (type complexe)
// Slide 37 : Déclaration avec const pour un tableau

const etudiant = {nom: "John", prenom: "DOE", age: 30};
// Slide 39 : Déclaration d'un objet avec propriétés (nom, prenom, age)
// Slide 37 : Déclaration avec const

const tableauobjet = [
    {nom: "nom1", prenom: "prenom1", age: 21},
    {nom: "nom2", prenom: "prenom2", age: 22},
    {nom: "nom3", prenom: "prenom3", age: 23},
];
// Slide 40 : Tableau d'objets
// Slide 38 : Tableau contenant des objets
// Slide 39 : Objets avec propriétés

function f1(){
    // Slide 45 : Définition d'une fonction sans paramètres
    
    for(let i = 0; i < 3; i++){
        // Slide 44 : Boucle for classique avec compteur
        // Slide 37 : Déclaration de variable i avec let
        // Slide 41 : Opérateurs de comparaison (<) et d'incrémentation (++)
        
        console.log(etudiants[i]);
        // Slide 33 : console.log() pour afficher dans la console
        // Slide 38 : Accès à un élément du tableau par index [i]
    }
}

function f2(){
    // Slide 45 : Définition d'une fonction sans paramètres
    
    console.log(etudiant);
    // Slide 33 : console.log() pour afficher dans la console
}

function f3(){
    // Slide 45 : Définition d'une fonction sans paramètres
    
    tableauobjet.forEach(etudiantn => {
        // Slide 44 : Méthode forEach pour parcourir un tableau
        // Slide 46 : Fonction fléchée (arrow function)
        
        console.log(etudiantn.nom + "-" + etudiantn.prenom + "-" + etudiantn.age);
        // Slide 33 : console.log() pour afficher dans la console
        // Slide 39 : Accès aux propriétés d'un objet (etudiantn.nom, etudiantn.prenom, etudiantn.age)
        // Slide 41 : Opérateur de concaténation (+)
    });
}