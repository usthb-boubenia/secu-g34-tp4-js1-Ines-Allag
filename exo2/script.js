"use strict";

// Fonction f1 - Afficher étudiants (slide 44)
function f1() {
    console.log("Etudiant1");
    console.log("Etudiant2"); 
    console.log("Etudiant3");
}

// Fonction f2 - Afficher objet étudiant (slide 39)
function f2() {
    const etudiant = {
        nom: 'JOHN',
        prenom: 'DOE',
        age: 30}; 
    console.log(etudiant);
}

// Fonction f3 - Afficher tableau formaté (slide 44)
function f3() {
    const students = [
        {
            nom: 'nom1',
            prenom: 'prenom1',
            age: 21
        },
        {
            nom: 'nom2',
            prenom: 'prenom2',
            age: 22
        },
        {
            nom: 'nom3',
            prenom: 'prenom3',
            age: 23
        }
    ];
// Boucle for each ( slide 44 )
    students.forEach(function(etudiant) {
        console.log(etudiant.nom + '-' + etudiant.prenom + '-' + etudiant.age);
    });
}