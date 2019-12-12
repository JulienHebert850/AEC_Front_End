//Calculer le prix des assurances pour un véhicule.
// Pour un garçon entre 16 et 25 ans, le prix des assurances est de 5 % de la valeur du véhicule.
// S’il est plus vieux, le taux sera de 3 %.
// Pour une fille entre 16 et 25 ans, le taux est de 3 % et de 2% pour une fille plus âgée.


var prixassurances;
var sexe;
var age;
var valeurvehicule;
var taux;

sexe = (prompt ("Veuillez entrer votre sexe : M ou F."));
age = Number(prompt ("Veuillez entre votre age"));
valeurvehicule = Number(prompt ("Veuillez entrer la valeur de votre véhicule"));

