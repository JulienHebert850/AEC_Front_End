var controleur;
var moteurs;
var camera;
var leds;
var prix;
var prixlivraison;
var prixcontroleur;
var prixmoteurs;
var prixcamera;
var prixleds;
var prixfilament3d;
var prixbatterieusb;

controleur = (prompt("Vous devez choisir entre un contrôleur RaspBerry Pi (55$) ou un RaspBerry Pi Zero (15$)?"));
moteurs =  Number(prompt("Combien de moteurs souhaitez-vous avoir?(5$/ch.) (Entre 2 et 24)"));
camera = (prompt("Désirez-vous avoir une caméra USB au coût de 35$?"));
leds = (prompt("Voulez-vous avoir une matrice de LEDS pour les yeux du robot? (10$)"));

//calcul du prix contrôleur
if (controleur === "RaspBerry Pi"){
    prixcontroleur = 55
}
else (prixcontroleur = 15);

//calcul du prix moteur
prixmoteurs = moteurs*5;

//calcul du prix caméra
if (camera === "oui"){
    prixcamera = 35
}
else (prixcamera = 0);

//calcul prix leds
if (leds === "oui"){
    prixleds = 10
}
else (prixleds = 0);

prixfilament3d = 20;
prixbatterieusb = 15;

prix = (prixcontroleur+prixmoteurs+prixcamera+prixleds+prixfilament3d+prixbatterieusb);
prixlivraison = ((prix * .15) + prix);


//Choix du controleur
if (controleur === "RaspBerry Pi"){
    controleur = "robot avec RaspBerry Pi"
}
else (controleur = "robot avec RaspBerry Pi Zero");


//Choix de la caméra
if (camera === "non"){
    camera = "pas de caméra";
}
else (camera ="avec une caméra");


//Choix des leds
if (leds === "non"){
    leds = "sans leds";
}
else (leds ="avec des leds");


//Résumé de la commande
document.write ("Vous avez commandé un " +controleur, ", "+moteurs, " moteurs, " +camera, " et " +leds,". Le prix de votre robot est de " +prix,"$. Le prix de votre robot incluant la livraison est de " +prixlivraison, "$.");


