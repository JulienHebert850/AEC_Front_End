//Lire deux nombres, si les deux nombres sont plus grands que 9 écrire le mot « BONJOUR » et si tel n’est pas le cas écrire « BONSOIR ».

var nb1;
var nb2;

nb1 = Number(prompt("Veuillez entrer le nombre 1"));
nb2 = Number(prompt("Veuillez entrer le nombre 2"));

if(nb1&&nb2 > 9){
    console.log ("BONJOUR");
}

else{
    console.log ("BONSOIR");
}
