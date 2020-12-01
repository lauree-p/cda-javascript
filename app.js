function paireOuImpaire() {
var chiffre = document.getElementById('myInput').value;
    if (chiffre%2 == 0) {
        alert("Paire");
    } 
    else {
        alert("Impaire");
    }
}

function premierMot() {
    var str = document.getElementById('myInput1').value;
    var words = str.split(' ');
    alert(words[0]);
}
    
function majuscule1() {
    var str = document.getElementById('myInput2').value;
    var words = str.split(' ');
    alert(words[0].toUpperCase());

}

function majuscule2() {
    var str = document.getElementById('myInput3').value;
    
}