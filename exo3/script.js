"use strict";

// Tableau d'étudiants (slide 40 tableau d'objets)
const Students = [
    [1000, 'JOHN', 'DOE', 14, 5],
    [2000, 'BOB', 'CARLTON', 7, 1],
    [3000, 'RAYANE', 'SMITH', 13, 3]
];

// Fonction B - Vérifie condition d'admission (slide 45 Les fonctions)
function B(valeur) { 
    return valeur >= 10; // Admis si valeur >= 10 (slide 41 les conditions if else , on va l'utiliser plus tard)
}

// Fonction A - Appelle B et affiche résultats (slide 45 Les fonctions + 38 to access elements dans un tableau)
function deliberation() {
    Students.forEach(etudiant => {
        const id = etudiant[0];
        const valeur = etudiant[3];
        const admis = B(valeur); // Appel fonction B 
        
       // Condition if/else comme slide 42
        if (admis) {
            console.log(etudiant[0] + ': ADMIS');
        } else {
            console.log(etudiant[0] + ': AJOURNÉ');
        }
    });
}