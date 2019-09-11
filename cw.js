// reference main content button bt ID
let btn1 = document.getElementById("btn1");
// reference sidebar button by ID
let btn2 = document.getElementById("btn2");
// reference header section title by classname
let mainTitle = document.getElementsByClassName("headerTitle")[0];
// reference header section by classname
let mainSection = document.getElementsByClassName("header")[0];

// callback function
function btn1Click(){
    // update header title text
    mainTitle.innerText = "1";
    // remove potential existing background styling
    mainSection.classList.remove("redBG");
    mainSection.classList.remove("defaultBG");
    // add new background styling
    mainSection.classList.add("blueBG");
}
// add listener to btn1 to run function when button is clicked
btn1.addEventListener("click", btn1Click );

function btn2Click(){
    // update header title text
    mainTitle.innerText = "2";
    // remove potential existing background styling
    mainSection.classList.remove("blueBG");
    mainSection.classList.remove("defaultBG");
    // add new background styling
    mainSection.classList.add("redBG");
}
// add listener to btn2 to run function when button is clicked
btn2.addEventListener("click", btn2Click );