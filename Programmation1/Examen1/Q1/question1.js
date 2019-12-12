//Le prix saisonnier d’un billet pour la ronde est de 50$. Toutefois, il y a des possibilités de rabais pour des inscriptions en groupe :
// Aucun rabais pour moins de 10 personnes.
// 10 personnes et plus, 5% de rabais.
// 20 personnes et plus, 10% de rabais.
// 30 personnes et plus, 15% de rabais.
// 40 personnes et plus, 20% de rabais.
//
// Écrivez un programme qui demande, pour une inscription donnée, le nombre de personnes et affichera le montant de l’inscription à la fin.

var nbpersonne;
var prixbase;
var prix10personnes;
var prix20personnes;
var prix30personnes;
var prix40personnes;

nbpersonne = Number (prompt("Combien de personnes compte votre groupe?"));

//Calcul du rabais seleon le nombre de personnes
prixbase = 50*nbpersonne;
prix10personnes = ((50*5)/100)*nbpersonne;
prix20personnes = ((50*10)/100)*nbpersonne;
prix30personnes = ((50*15)/100)*nbpersonne;
prix40personnes = ((50*20)/100)*nbpersonne;

if (nbpersonne <10){
    document.write("Aucun rabais n'est disponible pour les groupes de moins de 10 personnes. Le prix pour le groupe est de " +prixbase,"$.");
}

else if (nbpersonne >=10){
    document.write("Le prix pour votre groupe est de " +prix10personnes,"$.");
}

else if (nbpersonne >=20){
    document.write("Le prix pour votre groupe est de " +prix20personnes,"$.");
}

else if (nbpersonne >=30){
    document.write("Le prix pour votre groupe est de " +prix30personnes,"$.");
}

else if (nbpersonne >=40){
    document.write("Le prix pour votre groupe est de " +prix40personnes,"$.");
}

