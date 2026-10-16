function regnUt() {
    let inntekt = Number(document.getElementById("inntekt").value);
    let bolig = Number(document.getElementById("bolig").value);
    let forbruksgjeld = Number(document.getElementById("forbruksgjeld").value);
    let strom = Number(document.getElementById("strom").value);
    let internett = Number(document.getElementById("internett").value);
    let mat = Number(document.getElementById("mat").value);
    let transport = Number(document.getElementById("transport").value);
    let bil = Number(document.getElementById("bil").value);
    let forsikring = Number(document.getElementById("forsikring").value);
    let lan = Number(document.getElementById("lan").value);
    let abonnement = Number(document.getElementById("abonnement").value);
    let helse = Number(document.getElementById("helse").value);
    let klaer = Number(document.getElementById("klaer").value);
    let fritid = Number(document.getElementById("fritid").value);
    let barn = Number(document.getElementById("barn").value);
    let sparing = Number(document.getElementById("sparing").value);
    let annet = Number(document.getElementById("annet").value);

    let beregnetUtgift = bolig + forbruksgjeld + strom + internett + mat + transport + bil + forsikring + lan + abonnement + helse + klaer + fritid + barn + sparing + annet;

    let budsjettet = inntekt - beregnetUtgift;

    document.getElementById("resultat").textContent =
        budsjettet.toLocaleString("NO") + " kr";

        document.getElementById("sereslutat").textContent =
    visStatus(budsjettet);
}

function visStatus(budsjettet) {
    if (budsjettet > 0) {
        return "Du har penger til overs!";
    } else if (budsjettet === 0) {
        return "Det går akkurat!";
    } else {
        return "Du har ikke nok. Prøv å redusere en utgift.";
    }
}