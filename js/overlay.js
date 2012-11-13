var $ = jQuery;
var OVERLAY_ID = 'ocrx-overlay';
var SIDEBAR_ID = 'ocrx-sidebar';
var fieldMap = {};

function revertAll() {
    $('#'+OVERLAY_ID).remove();
    $('input').removeClass("ocrx-droppable");
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
        + '<div id="ocrx-full-name" class="ocrx-draggable ui-widget-content">'
        + '<p>Full name</p>'
        + '</div>'
        + '<div id="ocrx-first-name" class="ocrx-draggable ui-widget-content">'
        + '<p>First name</p>'
        + '</div>'
        + '<div id="ocrx-last-name" class="ocrx-draggable ui-widget-content">'
        + '<p>Last name</p>'
        + '</div>'
        + '<div id="ocrx-telephone" class="ocrx-draggable ui-widget-content">'
        + '<p>Telephone</p>'
        + '</div>'
        + '<div id="ocrx-email" class="ocrx-draggable ui-widget-content">'
        + '<p>Email</p>'
        + '</div>'
        + '<div id="ocrx-street1" class="ocrx-draggable ui-widget-content">'
        + '<p>Street 1</p>'
        + '</div>'
        + '<div id="ocrx-street2" class="ocrx-draggable ui-widget-content">'
        + '<p>Street 2</p>'
        + '</div>'
        + '<div id="ocrx-city" class="ocrx-draggable ui-widget-content">'
        + '<p>City</p>'
        + '</div>'
        + '<div id="ocrx-state" class="ocrx-draggable ui-widget-content">'
        + '<p>State</p>'
        + '</div>'
        + '<div id="ocrx-zip" class="ocrx-draggable ui-widget-content">'
        + '<p>Zip</p>'
        + '</div>'
        + '</div>';
    return html;
}

function initDraggable() {
    $(".ocrx-draggable").draggable();
    $("input").addClass("ocrx-droppable");
    $("input").droppable({
        drop: function( event, ui ) {
            fieldMap[extractSelectorFromInput(this)] = ui.draggable.attr('id');
            console.log(JSON.stringify(fieldMap));
        }
    });
}


function extractSelectorFromInput(elm) {
    var selector = $(elm).attr('id');
    if (selector) {
        selector = 'id:' + selector;
    } else {
        selector = $(elm).attr('name');
        selector = 'name:' + selector;
    }

    return selector;
}

function startApp() {
    if ($('#'+OVERLAY_ID).length) {
        revertAll();
    } else {
        showOverlay();
        showSidebar();
        initDraggable();
    }
}

startApp();

