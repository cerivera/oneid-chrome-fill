var $ = jQuery;
var OVERLAY_ID = 'ocrx-overlay';
var SIDEBAR_ID = 'ocrx-sidebar';

function removeOverlay() {
    $('#'+OVERLAY_ID).remove();
}

function showOverlay() {
    $('<div></div>')
        .attr("id",OVERLAY_ID)
        .attr("class", OVERLAY_ID)
        .appendTo('body');
}

function showSidebar() {
    $('<div></div>')
        .attr("id",SIDEBAR_ID)
        .attr("class", SIDEBAR_ID)
        .appendTo('#' + OVERLAY_ID);
}

function startApp() {
    if ($('#'+OVERLAY_ID).length) {
        removeOverlay();
    } else {
        showOverlay();
        showSidebar();
    }
}

startApp();

