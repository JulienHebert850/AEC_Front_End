//Lire 10 nombres quelconques et les placer dans un tableau.
//Par la suite, trouver le plus petit et le plus grand de ces nombres.

var tabnombres = [];

for(var i=0;i<10;i++){
    tabnombres[i] = Number(prompt("Entrez un nombre quelconque."));
}

document.write("Le plus petit nombre est " +Math.min(tabnombres[0],tabnombres[1],tabnombres[2],tabnombres[3],tabnombres[4],tabnombres[5],tabnombres[6],tabnombres[7],tabnombres[8],tabnombres[9]));
document.write(" et le plus grand nombre est " +Math.max(tabnombres[0],tabnombres[1],tabnombres[2],tabnombres[3],tabnombres[4],tabnombres[5],tabnombres[6],tabnombres[7],tabnombres[8],tabnombres[9]));

