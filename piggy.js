const bouton = document.getElementById("bouton");
var titre = document.getElementById("titre");
var calcul = document.getElementById("calcul");
var prix = document.querySelectorAll(".prix");
var calcul = document.getElementById("calcul");

//Form
var formNom = document.getElementById("formNom");
var formDesc = document.getElementById("formDesc");
var formPrix = document.getElementById("formPrix");
var envoie = document.getElementById("envoie");






bouton.addEventListener("click", function (){
    alert(titre.innerText)
})

price = 0;
for (var i = 0; i < prix.length; i++){
    price += parseInt(prix[i].innerHTML);
}

calcul.addEventListener("click", function (){
    alert(price)
})


envoie.addEventListener("click", function (){
    alert(formNom.value + formDesc.value + formPrix.value)
})

const deleteB = document.querySelectorAll('[id^=delete-button-]')

deleteB.forEach(element => {
    element.addEventListener('click', function (event) {
        var cell = event.target.parentNode;
        var row = cell.parentNode;
        row.removeChild(cell);
    })
});
