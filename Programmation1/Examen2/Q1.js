//Vous demandez au client le type de Jeep
// Sport 33290$
// SportS 37240$
// Havane 39235).

// Vous demandez ensuite le terme (24, 48, 60 ou 84) mois.

// Vous demandez la couleur, si c’est rouge ou vert, ajoutez 1399$ au prix du véhicule.

// Vous demandez si la transmission est manuelle (0$), automatique (1500$) ou automatique 8 vitesses (2400$).

// Calculez une taxe de 15%.
// Le taux d’intérêt est toujours 0%
// Affichez le paiement mensuel incluant la taxe et un résumé de la transaction.

//Choix du modèle -------------------------------------------------------------------------------------------------------------------------
let typejeep = prompt("Veuillez choisir le type de Jeep entre Sport, Sport S et Havane.");
let prixmodele;
if (typejeep === "Sport"){
    prixmodele = 33290;
}

else if (typejeep === "Sport S"){
    prixmodele = 37240;
}

else if (typejeep === "havane"){
    prixmodele = 39235;
}

//Choix du terme --------------------------------------------------------------------------------------------------------------------------
let terme = Number(prompt("Veuillez choisir le terme entre 24, 28, 60 ou 84 mois."));

//Choix de la couleur ---------------------------------------------------------------------------------------------------------------------
let prixcouleur = prompt("Veuillez choisir la couleur de votre Jeep. Les couleurs vert et rouge ajoutent 1399$ au prix du véhicule.");
if (prixcouleur === "rouge" || "vert"){
    prixcouleur === 1399;
}
else {
    prixcouleur === 0
}


//Choix de la transmission ----------------------------------------------------------------------------------------------------------------
let prixtransmission = prompt("Choisissez entre une transmission manuelle (0$), une transmission automatique (1500$) ou une transmission automatique 8 vitesses (2400$).");
if (prixtransmission === "automatique"){
    prixtransmission === 1500;
}
else if (prixtransmission === "automatique 8 vitesses"){
    prixtransmission === 2400;
}
else {
    prixtransmission === 0;
}

//Calcul du prix brut ---------------------------------------------------------------------------------------------------------------------
let prixbrut = (prixmodele + prixcouleur + prixtransmission);

//Calcul du prix net ----------------------------------------------------------------------------------------------------------------------
let prixnet = (prixbrut * .15);

//Calcul des paiements mensuels  ----------------------------------------------------------------------------------------------------------
let paiementmensuel = (prixnet/terme);

document.write ("Le Jeep que vous avez configué vous coutera " + paiementmensuel + " $ par mois.");
