//Créez un tableau de 10 cellules qui contient une chaîne de caractères à deux valeurs (Pile ou Face).
// Vous décidez manuellement des valeurs qui seront dans le tableau (ce n’est pas random)
// et affichez ces valeurs à l’aide d’une boucle Pour.

var tabpileface = [];

tabpileface [0] = "Pile";
tabpileface [1] = "Pile";
tabpileface [2] = "Face";
tabpileface [3] = "Pile";
tabpileface [4] = "Face";
tabpileface [5] = "Face";
tabpileface [6] = "Pile";
tabpileface [7] = "Face";
tabpileface [8] = "Face";
tabpileface [9] = "Face";

for(var i=0;i<5;i++){
    document.write(tabpileface[i] + "<br>");
}
