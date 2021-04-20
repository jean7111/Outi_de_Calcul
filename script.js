
var conso_base = 6.3;

function CalculConso() {
    var NbKm = document.getElementById("input1").value;
    var NbLitre = document.getElementById("input2").value;

    if (NbKm != "" && NbLitre != "")
    {
        var resultConso = Number(NbLitre) * 100 / Number(NbKm);

        var augmentation = ((Number(resultConso) - conso_base)/ conso_base) * 100;
        augmentation = String(Math.round(augmentation*100)/100);
        document.getElementById("reponse").innerHTML = Math.round(resultConso*100)/100 + " L/100 km";
        document.getElementById("aug").innerHTML = Math.round(augmentation*100)/100 + " %";  
    }

}

// function change_conso_base() {
//     var conso_base = document.getElementById("input-conso-base").value;

// }
