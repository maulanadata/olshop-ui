function change_image(image){

    var container = document.getElementById("main-image");

    container.src = image.src;
}

// untuk rating
function rating(rate){
    let temp = "";
    let kata = `<span class='text-primary'>
                    <i class='fas fa-star'></i>
                </span>`
    let i = 1;
    while (i <=rate){
        temp += kata;
        i++;
    }
   return temp;
}

let celanaJeansFemale = rating(document.getElementById("celanaJeansFemale-id").value);
document.getElementById("celanaJeansFemale-result").innerHTML = celanaJeansFemale;

let bajuTidurSexy = rating(document.getElementById("bajuTidurSexy-id").value);
document.getElementById("bajuTidurSexy-result").innerHTML = bajuTidurSexy;

let bajuKetiakTerbuka = rating(document.getElementById("bajuKetiakTerbuka-id").value);
document.getElementById("bajuKetiakTerbuka-result").innerHTML = bajuKetiakTerbuka;

let bajuPusarTerbuka = rating(document.getElementById("bajuPusarTerbuka-id").value);
document.getElementById("bajuPusarTerbuka-result").innerHTML = bajuPusarTerbuka;

let bajuPriaSantai = rating(document.getElementById("bajuPriaSantai-id").value);
document.getElementById("bajuPriaSantai-result").innerHTML = bajuPriaSantai;

let bajuPriaBerotot = rating(document.getElementById("bajuPriaBerotot-id").value);
document.getElementById("bajuPriaBerotot-result").innerHTML = bajuPriaBerotot;

let bajuTidurManja = rating(document.getElementById("bajuTidurManja-id").value);
document.getElementById("bajuTidurManja-result").innerHTML = bajuTidurManja;

let bajuFashionWanita = rating(document.getElementById("bajuFashionWanita-id").value);
document.getElementById("bajuFashionWanita-result").innerHTML = bajuFashionWanita;


// end rating

// document.addEventListener("DOMContentLoaded", function(event) {

// });