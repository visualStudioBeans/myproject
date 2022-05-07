function backgroundOnClick() {
    if (document.body.style.backgroundImage === "none" || document.body.style.backgroundImage === "") {
        document.body.style.backgroundImage = "url(../static/images/bg_img.jpg)";
    } else {
        document.body.style.backgroundImage = "none";
    }
}
