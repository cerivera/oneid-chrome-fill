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
        .html(getHtmlForDraggables())
        .attr("id",SIDEBAR_ID)
        .attr("class", SIDEBAR_ID)
        .appendTo('#' + OVERLAY_ID);
}

function getHtmlForDraggables() {
    var html = '<div class="ocrx-draggables">'
        + '<div class="ocrx-draggable ui-widget-content">'
        + '<p>Full name</p>'
        + '</div>'
        + '<div class="ocrx-draggable ui-widget-content">'
        + '<p>First name</p>'
        + '</div>'
        + '<div class="ocrx-draggable ui-widget-content">'
        + '<p>Last name</p>'
        + '</div>'
        + '<div class="ocrx-draggable ui-widget-content">'
        + '<p>Telephone</p>'
        + '</div>'
        + '<div class="ocrx-draggable ui-widget-content">'
        + '<p>Email</p>'
        + '</div>'
        + '<div class="ocrx-draggable ui-widget-content">'
        + '<p>Street 1</p>'
        + '</div>'
        + '<div class="ocrx-draggable ui-widget-content">'
        + '<p>Street 2</p>'
        + '</div>'
        + '<div class="ocrx-draggable ui-widget-content">'
        + '<p>City</p>'
        + '</div>'
        + '<div class="ocrx-draggable ui-widget-content">'
        + '<p>State</p>'
        + '</div>'
        + '<div class="ocrx-draggable ui-widget-content">'
        + '<p>Zip</p>'
        + '</div>'
        + '</div>';
    return html;
}

function initDraggable() {
    $( ".ocrx-draggable" ).draggable();
}

function startApp() {
    if ($('#'+OVERLAY_ID).length) {
        removeOverlay();
    } else {
        showOverlay();
        showSidebar();
        initDraggable();
    }
}

startApp();

