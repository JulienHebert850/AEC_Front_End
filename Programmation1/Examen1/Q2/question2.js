//Faire le code qui permet de lire au clavier la valeur de la variable âge et afficher tranche d'âge en fonction de l'âge. Pour faire ce choix, utiliser la table suivante :
//
//         tranche à afficher	                age
//
// 		  enfant			           0  <=  age  <= 12
// 		  adolescent		         13  <=  age  <= 17
// 		  adulte			         18  <=  age  <= 54
// 			 senior			         55  et plus
//
// Si note ne contient aucune de ces valeurs, alors affichez ″Pas encore né.″.


var age;

age = Number(prompt("Veuillez entrer votre age."));

if (age >=0 && age <=12){
    document.write ("Vous êtes dans la tranche d'age enfant.");
}

else if (age >=13 && age <=17){
    document.write ("Vous êtes dans la tranche d'age adolescent.");
}

else if (age >=18 && age <=54){
    document.write ("Vous êtes dans la tranche d'age adulte.");
}

else if (age >=55){
    document.write ("Vous êtes dans la tranche d'age senior.");
}

else document.write ("Pas encore né.");

