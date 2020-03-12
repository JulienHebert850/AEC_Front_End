$( "#boutonGauche" ).click(function() {
    $("#flashID").css("left","25px");
});

$( "#boutonDroite" ).click(function() {
    $("#flashID").css("left","200px");
});

$( "#boutonDroite" ).click(function() {
    $("#flashID").css("left","100px");
});

$( "#boutonChangerImage" ).click(function() {
    $("#flashID").attr("src","img/Flash2.png");
});

$( "#boutonEnleverImage" ).click(function() {
    $("#flashID").hide(1000);
});

$( "#boutonAjouterImage" ).click(function() {
    $("#flashID").show(1000);
});

$( "#boutonAjouterAttribut" ).click(function() {
    $("#flashID").attr("alt","photo de flash");
});

$( "#boutonAjouterTitre" ).click(function() {
    $("<h1 class='text-white'>Justice League</h1>").insertBefore("#flashID");
});

$( "#boutonDupliquer" ).click(function() {
    $("body").prepend("<img id=\"flashID\" class=\"flashClass\" src=\"img/Flash1.png\" width=\"200px\"/>");
});

$( "#boutonRalentir" ).click(function() {
    $("#flashID").hide(1000);
});

$("#boutonTeleport").click(function() {
    $("<img id=\"flashID\" class=\"flashClass\" src=\"img/Flash1.png\" width=\"200px\"/>").detach().appendTo("body");
});

$("#boutonVitesseSupreme").click(function() {
    $("#flashID").setInterval(onpagehide, 1000)
});

$("#boutonFinVitesseSupreme").click(function() {
    $("#flashID").clearInterval(onpageshow, 1000)
});

