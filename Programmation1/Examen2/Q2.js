//À l’aide de 2 for imbriqués et des variables nbLignes, nbColonnes et nb, reproduisez le résultat suivant :
// (suite de nombres de 1000 à 5 par bons de 5)


let nb=1000;
let nblignes=10;
let nbcol=20;

for(let i=0;i<nblignes;i++){
    for(let j=0;j<nbcol;j++){
        document.write(nb+" ");
        nb-=5;
    }
    document.write("<br>");
}
