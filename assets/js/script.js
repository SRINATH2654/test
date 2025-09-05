// Load navbar and footer dynamically
document.addEventListener("DOMContentLoaded", function () {
    fetch("partials/navbar.html")
        .then(res => res.text())
        .then(data => document.getElementById("navbar").innerHTML = data);

    fetch("partials/footer.html")
        .then(res => res.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});
