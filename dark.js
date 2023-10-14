var typed = new Typed(".type", {
    strings: ["Coder", "Data Analist", "Learner"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

let icon = document.getElementById("icon");

icon.onclick = function(){

    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
    }
    else{
        icon.src = "moon.png";
    }
}