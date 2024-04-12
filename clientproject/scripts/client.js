function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}
document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("dropdown");
    var button = document.querySelector(".more-details-button");
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});