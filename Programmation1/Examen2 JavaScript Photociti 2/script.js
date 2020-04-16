//Par Julien Hébert

function prendrevaleur() {
//Réccupération du formulaire
    mot = document.getElementById("case").value;

//Messages d'erreur si le mot est trop court
    if (mot.length < 3) {
        alert("Votre mot est trop court.");
        return;
    }
//Messages d'erreur si le mot est trop long
    if (mot.length > 12) {
        alert("Votre mot est trop long.");
        return;
    }

//Modification des caractères spéciaux
    regAccentA = new RegExp('[àâ]', 'gi');
    regAccentE = new RegExp('[éèêë]', 'gi');
    regAccentI = new RegExp('[îï]', 'gi');
    regAccentO = new RegExp('[ô]', 'gi');
    regAccentU = new RegExp('[ùûü]', 'gi');
    regAccentC = new RegExp('[ç]', 'gi');


    mot = mot.replace(regAccentA, 'a');
    mot = mot.replace(regAccentE, 'e');
    mot = mot.replace(regAccentI, 'i');
    mot = mot.replace(regAccentO, 'o');
    mot = mot.replace(regAccentU, 'u');
    mot = mot.replace(regAccentC, 'c');


//Séparer le mot et le mettre dans un tableau
    tabmot = mot.split("");

//Affichage nombre colonnes selon nombre de lettres
    if (mot.length ===3) {
        $('#photo0').show();
        $("#photo0").attr('class', 'col-4 img-fluid px-1');
        $('#photo1').show();
        $("#photo1").attr('class', 'col-4 img-fluid px-1');
        $('#photo2').show();
        $("#photo2").attr('class', 'col-4 img-fluid px-1');
        $('#photo3').remove();
        $('#photo4').remove();
        $('#photo5').remove();
        $('#photo6').remove();
        $('#photo7').remove();
        $('#photo8').remove();
        $('#photo9').remove();
        $('#photo10').remove();
        $('#photo11').remove();
    }
    else if (mot.length === 4){
        $('#photo0').show();
        $("#photo0").attr('class', 'col-3 img-fluid px-1');
        $('#photo1').show();
        $("#photo1").attr('class', 'col-3 img-fluid px-1');
        $('#photo2').show();
        $("#photo2").attr('class', 'col-3 img-fluid px-1');
        $('#photo3').show();
        $("#photo3").attr('class', 'col-3 img-fluid px-1');
        $('#photo4').remove();
        $('#photo5').remove();
        $('#photo6').remove();
        $('#photo7').remove();
        $('#photo8').remove();
        $('#photo9').remove();
        $('#photo10').remove();
        $('#photo11').remove();
    }
    else if (mot.length === 5){
        $('#photo0').show();
        $("#photo0").attr('class', 'col-2 img-fluid px-1');
        $('#photo1').show();
        $("#photo1").attr('class', 'col-2 img-fluid px-1');
        $('#photo2').show();
        $("#photo2").attr('class', 'col-2 img-fluid px-1');
        $('#photo3').show();
        $("#photo3").attr('class', 'col-2 img-fluid px-1');
        $('#photo4').show();
        $("#photo4").attr('class', 'col-2 img-fluid px-1');
        $('#photo5').remove();
        $('#photo6').remove();
        $('#photo7').remove();
        $('#photo8').remove();
        $('#photo9').remove();
        $('#photo10').remove();
        $('#photo11').remove();
    }
    else if (mot.length === 6){
        $('#photo0').show();
        $("#photo0").attr('class', 'col-2 img-fluid px-1');
        $('#photo1').show();
        $("#photo1").attr('class', 'col-2 img-fluid px-1');
        $('#photo2').show();
        $("#photo2").attr('class', 'col-2 img-fluid px-1');
        $('#photo3').show();
        $("#photo3").attr('class', 'col-2 img-fluid px-1');
        $('#photo4').show();
        $("#photo4").attr('class', 'col-2 img-fluid px-1');
        $('#photo5').show();
        $("#photo5").attr('class', 'col-2 img-fluid px-1');
        $('#photo6').remove();
        $('#photo7').remove();
        $('#photo8').remove();
        $('#photo9').remove();
        $('#photo10').remove();
        $('#photo11').remove();
    }
    else if (mot.length === 7){
        $('#photo0').show();
        $("#photo0").attr('class', 'col-1 img-fluid px-1');
        $('#photo1').show();
        $("#photo1").attr('class', 'col-1 img-fluid px-1');
        $('#photo2').show();
        $("#photo2").attr('class', 'col-1 img-fluid px-1');
        $('#photo3').show();
        $("#photo3").attr('class', 'col-1 img-fluid px-1');
        $('#photo4').show();
        $("#photo4").attr('class', 'col-1 img-fluid px-1');
        $('#photo5').show();
        $("#photo5").attr('class', 'col-1 img-fluid px-1');
        $('#photo6').show();
        $("#photo6").attr('class', 'col-1 img-fluid px-1');
        $('#photo7').remove();
        $('#photo8').remove();
        $('#photo9').remove();
        $('#photo10').remove();
        $('#photo11').remove();
    }
    else if (mot.length === 8){
        $('#photo0').show();
        $("#photo0").attr('class', 'col-1 img-fluid px-1');
        $('#photo1').show();
        $("#photo1").attr('class', 'col-1 img-fluid px-1');
        $('#photo2').show();
        $("#photo2").attr('class', 'col-1 img-fluid px-1');
        $('#photo3').show();
        $("#photo3").attr('class', 'col-1 img-fluid px-1');
        $('#photo4').show();
        $("#photo4").attr('class', 'col-1 img-fluid px-1');
        $('#photo5').show();
        $("#photo5").attr('class', 'col-1 img-fluid px-1');
        $('#photo6').show();
        $("#photo6").attr('class', 'col-1 img-fluid px-1');
        $('#photo7').show();
        $("#photo7").attr('class', 'col-1 img-fluid px-1');
        $('#photo8').remove();
        $('#photo9').remove();
        $('#photo10').remove();
        $('#photo11').remove();
    }
    else if (mot.length === 9){
        $('#photo0').show();
        $("#photo0").attr('class', 'col-1 img-fluid px-1');
        $('#photo1').show();
        $("#photo1").attr('class', 'col-1 img-fluid px-1');
        $('#photo2').show();
        $("#photo2").attr('class', 'col-1 img-fluid px-1');
        $('#photo3').show();
        $("#photo3").attr('class', 'col-1 img-fluid px-1');
        $('#photo4').show();
        $("#photo4").attr('class', 'col-1 img-fluid px-1');
        $('#photo5').show();
        $("#photo5").attr('class', 'col-1 img-fluid px-1');
        $('#photo6').show();
        $("#photo6").attr('class', 'col-1 img-fluid px-1');
        $('#photo7').show();
        $("#photo7").attr('class', 'col-1 img-fluid px-1');
        $('#photo8').show();
        $("#photo8").attr('class', 'col-1 img-fluid px-1');
        $('#photo9').remove();
        $('#photo10').remove();
        $('#photo11').remove();

    }
    else if (mot.length === 10){
        $('#photo0').show();
        $("#photo0").attr('class', 'col-1 img-fluid px-1');
        $('#photo1').show();
        $("#photo1").attr('class', 'col-1 img-fluid px-1');
        $('#photo2').show();
        $("#photo2").attr('class', 'col-1 img-fluid px-1');
        $('#photo3').show();
        $("#photo3").attr('class', 'col-1 img-fluid px-1');
        $('#photo4').show();
        $("#photo4").attr('class', 'col-1 img-fluid px-1');
        $('#photo5').show();
        $("#photo5").attr('class', 'col-1 img-fluid px-1');
        $('#photo6').show();
        $("#photo6").attr('class', 'col-1 img-fluid px-1');
        $('#photo7').show();
        $("#photo7").attr('class', 'col-1 img-fluid px-1');
        $('#photo8').show();
        $("#photo8").attr('class', 'col-1 img-fluid px-1');
        $('#photo9').show();
        $("#photo9").attr('class', 'col-1 img-fluid px-1');
        $('#photo10').remove();
        $('#photo11').remove();
    }
    else if (mot.length === 11){
        $('#photo0').show();
        $("#photo0").attr('class', 'col-1 img-fluid px-1');
        $('#photo1').show();
        $("#photo1").attr('class', 'col-1 img-fluid px-1');
        $('#photo2').show();
        $("#photo2").attr('class', 'col-1 img-fluid px-1');
        $('#photo3').show();
        $("#photo3").attr('class', 'col-1 img-fluid px-1');
        $('#photo4').show();
        $("#photo4").attr('class', 'col-1 img-fluid px-1');
        $('#photo5').show();
        $("#photo5").attr('class', 'col-1 img-fluid px-1');
        $('#photo6').show();
        $("#photo6").attr('class', 'col-1 img-fluid px-1');
        $('#photo7').show();
        $("#photo7").attr('class', 'col-1 img-fluid px-1');
        $('#photo8').show();
        $("#photo8").attr('class', 'col-1 img-fluid px-1');
        $('#photo9').show();
        $("#photo9").attr('class', 'col-1 img-fluid px-1');
        $('#photo10').show();
        $("#photo10").attr('class', 'col-1 img-fluid px-1');
        $('#photo11').remove();
    }
    else if (mot.length === 12){
        $('#photo0').show();
        $("#photo0").attr('class', 'col-1 img-fluid px-1');
        $('#photo1').show();
        $("#photo1").attr('class', 'col-1 img-fluid px-1');
        $('#photo2').show();
        $("#photo2").attr('class', 'col-1 img-fluid px-1');
        $('#photo3').show();
        $("#photo3").attr('class', 'col-1 img-fluid px-1');
        $('#photo4').show();
        $("#photo4").attr('class', 'col-1 img-fluid px-1');
        $('#photo5').show();
        $("#photo5").attr('class', 'col-1 img-fluid px-1');
        $('#photo6').show();
        $("#photo6").attr('class', 'col-1 img-fluid px-1');
        $('#photo7').show();
        $("#photo7").attr('class', 'col-1 img-fluid px-1');
        $('#photo8').show();
        $("#photo8").attr('class', 'col-1 img-fluid px-1');
        $('#photo9').show();
        $("#photo9").attr('class', 'col-1 img-fluid px-1');
        $('#photo10').show();
        $("#photo10").attr('class', 'col-1 img-fluid px-1');
        $('#photo11').show();
        $("#photo11").attr('class', 'col-1 img-fluid px-1');
    }

    $("photo0-0").click(function(){
        // Change src attribute of image
        $(this).attr("src", "Letters/A/A2");
    });

//Boucle pour placer les bonnes images selon les lettres

    for (let j = 0; j < tabmot.length; j++) {
        let img = document.createElement("img");
        let letter = tabmot[j].toUpperCase();
        img.src = "Letters/" + letter + "/" + letter + "1.jpg";
        //if caratère spécial
        if (letter === "*") {
            img.src = "Letters/CS/CS1.jpg";
            let block = document.getElementById("lettre" + j);
            block.appendChild(img);
        }

        let block = document.getElementById("lettre" + j);
        block.appendChild(img);
    }
}


//Refaire une fonction prendre valeur pour chaque photo de carousel comme la fonction d'en haut, fonction onclick sur le lien modal/carousel

//Lettre Carousel 0
function lettrecarousel0() {

//Boucle pour placer les bonnes images selon les lettres
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let letter = tabmot[0];
    img1.src = "Letters/" + letter + "/" + letter + "2.jpg";
    let block1 = document.getElementById("lettre0-0");
    block1.appendChild(img1);
    img2.src = "Letters/" + letter + "/" + letter + "3.jpg";
    let block2 = document.getElementById("lettre0-1");
    block2.appendChild(img2);
    img3.src = "Letters/" + letter + "/" + letter + "4.jpg";
    let block3 = document.getElementById("lettre0-2");
    block3.appendChild(img3);
    img4.src = "Letters/" + letter + "/" + letter + "5.jpg";
    let block4 = document.getElementById("lettre0-3");
    block4.appendChild(img4);

    if (letter === "*") {
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");
        let letter = tabmot[0];
        img1.src = "Letters/CS/CS2.jpg";
        let block1 = document.getElementById("lettre0-0");
        block1.appendChild(img1);
        img2.src = "Letters/CS/CS3.jpg";
        let block2 = document.getElementById("lettre0-1");
        block2.appendChild(img2);
        img3.src = "Letters/CS/CS4.jpg";
        let block3 = document.getElementById("lettre0-2");
        block3.appendChild(img3);
        img4.src = "Letters/CS/CS5.jpg";
        let block4 = document.getElementById("lettre0-3");
        block4.appendChild(img4);
    }


}

//Lettre Carousel 1
function lettrecarousel1() {

//Boucle pour placer les bonnes images selon les lettres
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let letter = tabmot[1];
    img1.src = "Letters/" + letter + "/" + letter + "2.jpg";
    let block1= document.getElementById("lettre1-0");
    block1.appendChild(img1);
    img2.src = "Letters/" + letter + "/" + letter + "3.jpg";
    let block2 = document.getElementById("lettre1-1");
    block2.appendChild(img2);
    img3.src = "Letters/" + letter + "/" + letter + "4.jpg";
    let block3 = document.getElementById("lettre1-2");
    block3.appendChild(img3);
    img4.src = "Letters/" + letter + "/" + letter + "5.jpg";
    let block4 = document.getElementById("lettre1-3");
    block4.appendChild(img4);

    if (letter === "*") {
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");
        let letter = tabmot[1];
        img1.src = "Letters/CS/CS2.jpg";
        let block1 = document.getElementById("lettre1-0");
        block1.appendChild(img1);
        img2.src = "Letters/CS/CS3.jpg";
        let block2 = document.getElementById("lettre1-1");
        block2.appendChild(img2);
        img3.src = "Letters/CS/CS4.jpg";
        let block3 = document.getElementById("lettre1-2");
        block3.appendChild(img3);
        img4.src = "Letters/CS/CS5.jpg";
        let block4 = document.getElementById("lettre1-3");
        block4.appendChild(img4);
    }
}

//Lettre Carousel 2
function lettrecarousel2() {

//Boucle pour placer les bonnes images selon les lettres
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let letter = tabmot[2];
    img1.src = "Letters/" + letter + "/" + letter + "2.jpg";
    let block1 = document.getElementById("lettre2-0");
    block1.appendChild(img1);
    img2.src = "Letters/" + letter + "/" + letter + "3.jpg";
    let block2 = document.getElementById("lettre2-1");
    block2.appendChild(img2);
    img3.src = "Letters/" + letter + "/" + letter + "4.jpg";
    let block3 = document.getElementById("lettre2-2");
    block3.appendChild(img3);
    img4.src = "Letters/" + letter + "/" + letter + "5.jpg";
    let block4 = document.getElementById("lettre2-3");
    block4.appendChild(img4);

    if (letter === "*") {
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");
        let letter = tabmot[2];
        img1.src = "Letters/CS/CS2.jpg";
        let block1 = document.getElementById("lettre2-0");
        block1.appendChild(img1);
        img2.src = "Letters/CS/CS3.jpg";
        let block2 = document.getElementById("lettre2-1");
        block2.appendChild(img2);
        img3.src = "Letters/CS/CS4.jpg";
        let block3 = document.getElementById("lettre2-2");
        block3.appendChild(img3);
        img4.src = "Letters/CS/CS5.jpg";
        let block4 = document.getElementById("lettre2-3");
        block4.appendChild(img4);
    }
}

//Lettre Carousel 3
function lettrecarousel3() {

//Boucle pour placer les bonnes images selon les lettres
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let letter = tabmot[3];
    img1.src = "Letters/" + letter + "/" + letter + "2.jpg";
    let block1 = document.getElementById("lettre3-0");
    block1.appendChild(img1);
    img2.src = "Letters/" + letter + "/" + letter + "3.jpg";
    let block2 = document.getElementById("lettre3-1");
    block2.appendChild(img2);
    img3.src = "Letters/" + letter + "/" + letter + "4.jpg";
    let block3 = document.getElementById("lettre3-2");
    block3.appendChild(img3);
    img4.src = "Letters/" + letter + "/" + letter + "5.jpg";
    let  block4 = document.getElementById("lettre3-3");
    block4.appendChild(img4);

    if (letter === "*") {
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");
        let letter = tabmot[3];
        img1.src = "Letters/CS/CS2.jpg";
        let block1 = document.getElementById("lettre3-0");
        block1.appendChild(img1);
        img2.src = "Letters/CS/CS3.jpg";
        let block2 = document.getElementById("lettre3-1");
        block2.appendChild(img2);
        img3.src = "Letters/CS/CS4.jpg";
        let block3 = document.getElementById("lettre3-2");
        block3.appendChild(img3);
        img4.src = "Letters/CS/CS5.jpg";
        let block4 = document.getElementById("lettre3-3");
        block4.appendChild(img4);
    }
}

//Lettre Carousel 4
function lettrecarousel4() {

//Boucle pour placer les bonnes images selon les lettres
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let letter = tabmot[4];
    img1.src = "Letters/" + letter + "/" + letter + "2.jpg";
    let block1 = document.getElementById("lettre4-0");
    block1.appendChild(img1);
    img2.src = "Letters/" + letter + "/" + letter + "3.jpg";
    let block2 = document.getElementById("lettre4-1");
    block2.appendChild(img2);
    img3.src = "Letters/" + letter + "/" + letter + "4.jpg";
    let block3 = document.getElementById("lettre4-2");
    block3.appendChild(img3);
    img4.src = "Letters/" + letter + "/" + letter + "5.jpg";
    let block4 = document.getElementById("lettre4-3");
    block4.appendChild(img4);

    if (letter === "*") {
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");
        let letter = tabmot[4];
        img1.src = "Letters/CS/CS2.jpg";
        let block1 = document.getElementById("lettre4-0");
        block1.appendChild(img1);
        img2.src = "Letters/CS/CS3.jpg";
        let block2 = document.getElementById("lettre4-1");
        block2.appendChild(img2);
        img3.src = "Letters/CS/CS4.jpg";
        let block3 = document.getElementById("lettre4-2");
        block3.appendChild(img3);
        img4.src = "Letters/CS/CS5.jpg";
        let block4 = document.getElementById("lettre4-3");
        block4.appendChild(img4);
    }
}

//Lettre Carousel 5
function lettrecarousel5() {

//Boucle pour placer les bonnes images selon les lettres
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let letter = tabmot[5];
    img1.src = "Letters/" + letter + "/" + letter + "2.jpg";
    let block1 = document.getElementById("lettre5-0");
    block1.appendChild(img1);
    img2.src = "Letters/" + letter + "/" + letter + "3.jpg";
    let block2 = document.getElementById("lettre5-1");
    block2.appendChild(img2);
    img3.src = "Letters/" + letter + "/" + letter + "4.jpg";
    let block3 = document.getElementById("lettre5-2");
    block3.appendChild(img3);
    img4.src = "Letters/" + letter + "/" + letter + "5.jpg";
    let block4 = document.getElementById("lettre5-3");
    block4.appendChild(img4);

    if (letter === "*") {
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");
        let letter = tabmot[5];
        img1.src = "Letters/CS/CS2.jpg";
        let block1 = document.getElementById("lettre5-0");
        block1.appendChild(img1);
        img2.src = "Letters/CS/CS3.jpg";
        let block2 = document.getElementById("lettre5-1");
        block2.appendChild(img2);
        img3.src = "Letters/CS/CS4.jpg";
        let block3 = document.getElementById("lettre5-2");
        block3.appendChild(img3);
        img4.src = "Letters/CS/CS5.jpg";
        let block4 = document.getElementById("lettre5-3");
        block4.appendChild(img4);
    }
}

//Lettre Carousel 6
function lettrecarousel6() {

//Boucle pour placer les bonnes images selon les lettres
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let letter = tabmot[6];
    img1.src = "Letters/" + letter + "/" + letter + "2.jpg";
    let block1 = document.getElementById("lettre6-0");
    block1.appendChild(img1);
    img2.src = "Letters/" + letter + "/" + letter + "3.jpg";
    let block2 = document.getElementById("lettre6-1");
    block2.appendChild(img2);
    img3.src = "Letters/" + letter + "/" + letter + "4.jpg";
    let block3 = document.getElementById("lettre6-2");
    block3.appendChild(img3);
    img4.src = "Letters/" + letter + "/" + letter + "5.jpg";
    let block4 = document.getElementById("lettre6-3");
    block4.appendChild(img4);

    if (letter === "*") {
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");
        let letter = tabmot[6];
        img1.src = "Letters/CS/CS2.jpg";
        let block1 = document.getElementById("lettre6-0");
        block1.appendChild(img1);
        img2.src = "Letters/CS/CS3.jpg";
        let block2 = document.getElementById("lettre6-1");
        block2.appendChild(img2);
        img3.src = "Letters/CS/CS4.jpg";
        let block3 = document.getElementById("lettre6-2");
        block3.appendChild(img3);
        img4.src = "Letters/CS/CS5.jpg";
        let block4 = document.getElementById("lettre6-3");
        block4.appendChild(img4);
    }
}

//Lettre Carousel 7
function lettrecarousel7() {

//Boucle pour placer les bonnes images selon les lettres
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let letter = tabmot[7];
    img1.src = "Letters/" + letter + "/" + letter + "2.jpg";
    let block1 = document.getElementById("lettre7-0");
    block1.appendChild(img1);
    img2.src = "Letters/" + letter + "/" + letter + "3.jpg";
    let block2 = document.getElementById("lettre7-1");
    block2.appendChild(img2);
    img3.src = "Letters/" + letter + "/" + letter + "4.jpg";
    let block3 = document.getElementById("lettre7-2");
    block3.appendChild(img3);
    img4.src = "Letters/" + letter + "/" + letter + "5.jpg";
    let block4 = document.getElementById("lettre7-3");
    block4.appendChild(img4);

    if (letter === "*") {
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");
        let letter = tabmot[7];
        img1.src = "Letters/CS/CS2.jpg";
        let block1 = document.getElementById("lettre7-0");
        block1.appendChild(img1);
        img2.src = "Letters/CS/CS3.jpg";
        let block2 = document.getElementById("lettre7-1");
        block2.appendChild(img2);
        img3.src = "Letters/CS/CS4.jpg";
        let block3 = document.getElementById("lettre7-2");
        block3.appendChild(img3);
        img4.src = "Letters/CS/CS5.jpg";
        let block4 = document.getElementById("lettre7-3");
        block4.appendChild(img4);
    }
}

//Lettre Carousel 8
function lettrecarousel8() {

//Boucle pour placer les bonnes images selon les lettres
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let letter = tabmot[8];
    img1.src = "Letters/" + letter + "/" + letter + "2.jpg";
    let block1 = document.getElementById("lettre8-0");
    block1.appendChild(img1);
    img2.src = "Letters/" + letter + "/" + letter + "3.jpg";
    let block2 = document.getElementById("lettre8-1");
    block2.appendChild(img2);
    img3.src = "Letters/" + letter + "/" + letter + "4.jpg";
    let block3 = document.getElementById("lettre8-2");
    block3.appendChild(img3);
    img4.src = "Letters/" + letter + "/" + letter + "5.jpg";
    let block4 = document.getElementById("lettre8-3");
    block4.appendChild(img4);

    if (letter === "*") {
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");
        let letter = tabmot[8];
        img1.src = "Letters/CS/CS2.jpg";
        let block1 = document.getElementById("lettre8-0");
        block1.appendChild(img1);
        img2.src = "Letters/CS/CS3.jpg";
        let block2 = document.getElementById("lettre8-1");
        block2.appendChild(img2);
        img3.src = "Letters/CS/CS4.jpg";
        let block3 = document.getElementById("lettre8-2");
        block3.appendChild(img3);
        img4.src = "Letters/CS/CS5.jpg";
        let block4 = document.getElementById("lettre8-3");
        block4.appendChild(img4);
    }
}

//Lettre Carousel 9
function lettrecarousel9() {

//Boucle pour placer les bonnes images selon les lettres
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let letter = tabmot[9];
    img1.src = "Letters/" + letter + "/" + letter + "2.jpg";
    let block1 = document.getElementById("lettre9-0");
    block1.appendChild(img1);
    img2.src = "Letters/" + letter + "/" + letter + "3.jpg";
    let block2 = document.getElementById("lettre9-1");
    block2.appendChild(img2);
    img3.src = "Letters/" + letter + "/" + letter + "4.jpg";
    let block3 = document.getElementById("lettre9-2");
    block3.appendChild(img3);
    img4.src = "Letters/" + letter + "/" + letter + "5.jpg";
    let block4 = document.getElementById("lettre9-3");
    block4.appendChild(img4);

    if (letter === "*") {
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");
        let letter = tabmot[9];
        img1.src = "Letters/CS/CS2.jpg";
        let block1 = document.getElementById("lettre9-0");
        block1.appendChild(img1);
        img2.src = "Letters/CS/CS3.jpg";
        let block2 = document.getElementById("lettre9-1");
        block2.appendChild(img2);
        img3.src = "Letters/CS/CS4.jpg";
        let block3 = document.getElementById("lettre9-2");
        block3.appendChild(img3);
        img4.src = "Letters/CS/CS5.jpg";
        let block4 = document.getElementById("lettre9-3");
        block4.appendChild(img4);
    }
}

//Lettre Carousel 10
function lettrecarousel10() {

//Boucle pour placer les bonnes images selon les lettres
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let letter = tabmot[10];
    img1.src = "Letters/" + letter + "/" + letter + "2.jpg";
    let block1 = document.getElementById("lettre10-0");
    block1.appendChild(img1);
    img2.src = "Letters/" + letter + "/" + letter + "3.jpg";
    let block2 = document.getElementById("lettre10-1");
    block2.appendChild(img2);
    img3.src = "Letters/" + letter + "/" + letter + "4.jpg";
    let block3 = document.getElementById("lettre10-2");
    block3.appendChild(img3);
    img4.src = "Letters/" + letter + "/" + letter + "5.jpg";
    let block4 = document.getElementById("lettre10-3");
    block4.appendChild(img4);

    if (letter === "*") {
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");
        let letter = tabmot[10];
        img1.src = "Letters/CS/CS2.jpg";
        let block1 = document.getElementById("lettre10-0");
        block1.appendChild(img1);
        img2.src = "Letters/CS/CS3.jpg";
        let block2 = document.getElementById("lettre10-1");
        block2.appendChild(img2);
        img3.src = "Letters/CS/CS4.jpg";
        let block3 = document.getElementById("lettre10-2");
        block3.appendChild(img3);
        img4.src = "Letters/CS/CS5.jpg";
        let block4 = document.getElementById("lettre10-3");
        block4.appendChild(img4);
    }
}

//Lettre Carousel 11
function lettrecarousel11() {

//Boucle pour placer les bonnes images selon les lettres
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let letter = tabmot[11];
    img1.src = "Letters/" + letter + "/" + letter + "2.jpg";
    let block1 = document.getElementById("lettre11-0");
    block1.appendChild(img1);
    img2.src = "Letters/" + letter + "/" + letter + "3.jpg";
    let block2 = document.getElementById("lettre11-1");
    block2.appendChild(img2);
    img3.src = "Letters/" + letter + "/" + letter + "4.jpg";
    let block3 = document.getElementById("lettre11-2");
    block3.appendChild(img3);
    img4.src = "Letters/" + letter + "/" + letter + "5.jpg";
    let block4 = document.getElementById("lettre11-3");
    block4.appendChild(img4);

    if (letter === "*") {
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");
        let letter = tabmot[11];
        img1.src = "Letters/CS/CS2.jpg";
        let block1 = document.getElementById("lettre11-0");
        block1.appendChild(img1);
        img2.src = "Letters/CS/CS3.jpg";
        let block2 = document.getElementById("lettre11-1");
        block2.appendChild(img2);
        img3.src = "Letters/CS/CS4.jpg";
        let block3 = document.getElementById("lettre11-2");
        block3.appendChild(img3);
        img4.src = "Letters/CS/CS5.jpg";
        let block4 = document.getElementById("lettre11-3");
        block4.appendChild(img4);
    }
}



//Changement couleur background
$('#backgroundblanc').on('click', function() {
    $('.background-image').css('background-image', 'url(background/blanc.jpg)');
});

$('#backgroundbleu').on('click', function() {
    $('.background-image').css('background-image', 'url(background/bleu.jpg)');
});

$('#backgroundbleuf').on('click', function() {
    $('.background-image').css('background-image', 'url(background/bleuFonce.jpg)');
});

$('#backgroundgris').on('click', function() {
    $('.background-image').css('background-image', 'url(background/gris.jpg)');
});

$('#backgroundnoir').on('click', function() {
    $('.background-image').css('background-image', 'url(background/noir.jpg)');
});

$('#backgroundrose').on('click', function() {
    $('.background-image').css('background-image', 'url(background/rose.jpg)');
});

$('#backgroundrouge').on('click', function() {
    $('.background-image').css('background-image', 'url(background/rouge.jpg)');
});
