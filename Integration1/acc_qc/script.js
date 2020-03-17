$('#infospchqc').hide();
$('#infostchqc').hide();
$('#inforegles').hide();

$("#gtspqc").click(function(){
    $("#infospchqc").show();
    $("#infogtchqc").hide();
    $("#infostchqc").hide();
    $('#inforegles').hide();
});

$("#stchqc").click(function(){
    $("#infostchqc").show();
    $("#infogtchqc").hide();
    $("#infospchqc").hide();
    $('#inforegles').hide();
});

$("#regles").click(function(){
    $('#inforegles').show();
    $("#infostchqc").hide();
    $("#infogtchqc").hide();
    $("#infospchqc").hide();
});
