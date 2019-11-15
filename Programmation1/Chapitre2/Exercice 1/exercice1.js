//Lire deux nombres et afficher le plus grand des deux.

var nb1;
var nb2;

nb1 = Number(prompt("Veuillez entrer le nombre 1"));
nb2 = Number(prompt("Veuillez entrer le nombre 2"));

if(nb1 > nb2){
    console.log (+nb1," est plus grand que " +nb2,);
}

else if(nb1 < nb2){
    console.log (+nb2," est plus grand que " +nb1,);
}

else{
    console.log (+nb1," est égal à " +nb2,);
}


