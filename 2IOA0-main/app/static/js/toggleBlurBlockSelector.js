function blurOnClick() {
    let blockSelector = document.getElementsByClassName('blocklyToolboxDiv')[0];
    let blockSelectorFlyOut = document.getElementsByClassName('blocklyFlyout')[1];
    if (blockSelector.style.opacity === "" || blockSelector.style.opacity === "1" || blockSelectorFlyOut.style.opacity === "" || blockSelectorFlyOut.style.opacity === "1") {
        blockSelector.style.opacity = "0.3";
        blockSelectorFlyOut.style.opacity = "0.3";
        blockSelector.style.filter = "blur(5px) saturate(.05) brightness(.05)";
        blockSelectorFlyOut.style.filter = "blur(5px) saturate(.05) brightness(.05)";
    } else {
        blockSelector.style.opacity = "1";
        blockSelectorFlyOut.style.opacity = "1";
        blockSelector.style.filter = "none";
        blockSelectorFlyOut.style.filter = "none";
    }
}
