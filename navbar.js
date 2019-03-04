/*for the navigation bar*/
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += "responsive";
    } else {
        x.className = "navbar";
    }
}