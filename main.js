
var spanMedia = document.getElementById('span_media')
function getMedia(){
    var valueOne = document.getElementById('nota1').value;
    var valueTwo = document.getElementById('nota2').value;
    var valueThree = document.getElementById('nota3').value;
    var valueFour = document.getElementById('nota4').value;

    var notaFinal = calcMedia(parseInt(valueOne),parseInt(valueTwo),parseInt(valueThree),parseInt(valueFour));
    var notaFixed = notaFinal.toFixed(1)

    if (notaFixed > 6){
        spanMedia.innerHTML = "Sua média foi: " + notaFixed + "\n Parabéns você passou!";
    } else {
        spanMedia.innerHTML = "Sua média foi: " + notaFixed + "\n Infelizmente você foi reprovado!";
    }
}
function calcMedia(n1,n2,n3,n4) {
    media = (n1 + n2 + n3 + n4) / 4;
    return media;
}