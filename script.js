
var conso_min = 6.5;
var conso_max = 7.5;

function CalculConso() {
    var NbKm = document.getElementById("input1").value;
    var NbLitre = document.getElementById("input2").value;

    if (NbKm != "" && NbLitre != "")
    {
        var resultConso = Number(NbLitre) * 100 / Number(NbKm);
        document.getElementById("reponse").innerHTML = Math.round(resultConso*100)/100 + " L/100 km";

        var augmentation_min = ((Number(resultConso) - conso_min)/ conso_min) * 100;
        augmentation_min = String(Math.round(augmentation_min*100)/100);

        var augmentation_max = ((Number(resultConso) - conso_max)/ conso_max) * 100;
        augmentation_max = String(Math.round(augmentation_max*100)/100);
        
        document.getElementById("aug").innerHTML = Math.round(augmentation_max*100)/100 + " % " + Math.round(augmentation_min*100)/100 + " %";
    }

}

