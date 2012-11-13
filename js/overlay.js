var $ = jQuery;
var OVERLAY_ID = 'ocrx-overlay';

function removeOverlay() {
    $('#'+OVERLAY_ID).remove();
}

function launchOverlay() {
    removeOverlay();
    $('<div></div>')
        .attr("id",OVERLAY_ID)
        .attr("class", OVERLAY_ID)
        .appendTo('body');
}

launchOverlay();

