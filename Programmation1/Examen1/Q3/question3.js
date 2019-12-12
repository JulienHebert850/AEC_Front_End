//Vous devez compléter un programme qui permet de calculer une facture pour l’achat d’une grande Pizza.
//
// Le prix de base de la Pizza au fromage est de 10$.
// Si on veut des légumes, il faut ajouter 5$ au prix initial.
// Si on veut du pepperoni, il faut ajouter 8$ au prix initial.
// Si on veut de la sauce, il faut ajouter 1$ par personnes.
//
// Le TPS s’élève à 5% du prix sans les taxes.
// Le TVQ s’élève à 9,975% du prix sans les taxes.
// Produisez une facture qui résume l’achat, le prix avant et après les taxes.

var nbpersonne;
var legumes;
var prixlegumes;
var pepperoni;
var prixpepperoni;
var sauce;
var prixsauce;
var prixtotalbrut;
var tps;
var tvq;
var prixtotaltpstvq;


legumes = (prompt("Voulez-vous des légumes sur votre pizza? (5$)"));
pepperoni = (prompt("Voulez-vous du pepperoni sur votre pizza? (8$)"));
sauce = (prompt("Voulez-vous de la sauce sur votre pizza? (1$/personne)"));
nbpersonne = Number(prompt("Combien de personnes êtes-vous?"));

//calcul prix légumes
if (legumes === "oui"){
    prixlegumes = 5;
}
else (prixlegumes = 0);

//calcul prix pepperoni
if (pepperoni === "oui"){
    prixpepperoni = nbpersonne;
}
else (prixpepperoni = 0);

//calcul prix sauce
if (sauce === "oui"){
    prixsauce = nbpersonne;
}
else (prixsauce = 0);

//calcul total prix brut
prixtotalbrut = 10 + prixlegumes + prixpepperoni + prixsauce;

//calcul taxes
tps = (prixtotalbrut*.05);
tvq = (prixtotalbrut*.09975);
prixtotaltpstvq = (prixtotalbrut + tps + tvq);

//choix de la commande
if (legumes === "oui"){
    legumes = "avec légumes";
}
else (legumes = "sans légumes");

if (pepperoni === "oui"){
    pepperoni = "avec pepperoni";
}
else (pepperoni = "sans pepperoni");

if (sauce === "oui"){
    sauce = "avec sauce";
}
else (sauce = "sans sauce");


document.write ("Vous avez passé une commande pour une pizza " +legumes, ", " +pepperoni, " et " +sauce, ". Le prix avant taxes de votre pizza est de " +prixtotalbrut, "$ et " +prixtotaltpstvq, "$ après les taxes.");

