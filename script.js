let i = 1;

function voltar() {
if(i == 1){
    i = 8;
    document.getElementById("drink").setAttribute("src", "assets/drink" + i + ".png" )

} else {
    i--;
    document.getElementById("drink").setAttribute("src", "assets/drink" + i + ".png" )
}
}

function proximo() {
    if(i == 8) {
        i = 1;
        document.getElementById("drink").setAttribute("src", "assets/drink" + i + ".png" )
    } else {
        i++;
        document.getElementById("drink").setAttribute("src", "assets/drink" + i + ".png" )
    }
}