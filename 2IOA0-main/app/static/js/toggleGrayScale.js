function grayscaleOnClick() {
    let html_elem = document.getElementById("gray");
    let blur_div_bottom = document.getElementById("blur_div_bottom");

    if (html_elem.style.filter === "none" || html_elem.style.filter === "") {
        html_elem.style.filter = "grayscale(100%)";
        blur_div_bottom.style.bottom = "-50px";
    } else {
        html_elem.style.filter = "none";
        blur_div_bottom.style.bottom = "0px";
    }
}
