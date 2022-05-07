function blurCursorOnClick(event) {
    let blur_div_top = document.getElementById("blur_div_top");
    let blur_div_bottom = document.getElementById("blur_div_bottom");
    let blur_relative_bottom = document.getElementById("rel_blur").getBoundingClientRect().bottom;

    if (blur_div_top.style.visibility === "hidden" || blur_div_top.style.visibility === "") {
        blur_div_top.style.visibility = "visible";
        blur_div_bottom.style.visibility = "visible";
        blur_div_top.style.height = Math.max(event.clientY - 150, 0).toString() + "px";
        blur_div_bottom.style.height =
            Math.max(blur_relative_bottom - event.clientY - 150, 0).toString() + "px";
    } else {
        blur_div_top.style.visibility = "hidden";
        blur_div_bottom.style.visibility = "hidden";
    }

    document.onmousemove = (evt) => {
        if (blur_div_top.style.visibility === "visible") {
            blur_div_top.style.height = Math.max(evt.clientY - 150, 0).toString() + "px";
            blur_div_bottom.style.height =
                Math.max(blur_relative_bottom - evt.clientY - 150, 0).toString() + "px";
        }
    };
}
