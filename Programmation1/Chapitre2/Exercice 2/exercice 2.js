// Un marchand décide d’accorder une réduction de 15% à tout acheteur, si le montant total de ses achats est plus grand que 200.00$.
// Écrire un algorithme qui permet de calculer et d’afficher la réduction que chaque acheteur a droit, connaissant le montant total des achats.

var achats;
var rabais = 0.85;
var reduction;

achats = Number(prompt("Veuillez entrer le montant total de vos achats. Ne pas inclure le signe $."));

    if(achats >= "200"){
    console.log ("Vous avez droit à une réduction de " +, "pour une facture totale de " +reduction,);
    }

    else{
        console.log ("Vous n'avez pas droit à la réduction de 15%, votre facture s'élève à " +achats,"$.");
    }




