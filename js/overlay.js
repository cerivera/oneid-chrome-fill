function removeOverlay() {
    var overlay = document.getElementById("ocrx-overlay");
    if (overlay) {
        document.body.removeChild(overlay);
    }
}

function launchOverlay() {
    removeOverlay();
    var overlay = document.createElement("div");
    overlay.setAttribute("id","ocrx-overlay");
    overlay.setAttribute("class", "ocrx-overlay");
    document.body.appendChild(overlay);
}

launchOverlay();

