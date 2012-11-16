var $ = jQuery;
var OVERLAY_ID = 'ocrx-overlay';
var SIDEBAR_ID = 'ocrx-sidebar';
var fieldMap = {};
var personalFields = {
    'full-name' : 'Full name',
    'first-name' : 'First name',
    'last-name' : 'Last name',
    'telephone' : 'Telephone'
}

var addressFields = {
    'street1' : 'Street 1',
    'street2' : 'Street 2',
    'city' : 'City',
    'state' : 'State',
    'zip' : 'Zip code'
};

var billingFields = {
    'card-number' : 'CC number',
    'card-expiration' : 'CC expiration date'
}

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
function showSidebar() {
    $('<div></div>')
        .html(getHtmlForDraggables())
        .attr("id",SIDEBAR_ID)
        .attr("class", SIDEBAR_ID)
        .appendTo('#' + OVERLAY_ID);
}

function getHtmlForDraggables() {
    var html = ''
        + getSaveToCloudButton()
        + getTitleHtml('Personal Info')
        + convertFieldDictToDraggablesHtml(personalFields)
        + getTitleHtml('Address Info')
        + convertFieldDictToDraggablesHtml(addressFields)
        + getTitleHtml('Billing Info')
        + convertFieldDictToDraggablesHtml(billingFields);

    return html;
}

// Return something like id:telephone or name:telephone
function extractSelectorFromInput(elm) {
    var selector = $(elm).attr('id');
    if (selector) {
        selector = 'id:' + selector; } else {
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
        // Something liket his works
//        $('#carlos').click(function() {
//            test();
//        });
    }
}

startApp();


/**
 * HTML BUILDERS
 */

function getTitleHtml(title) {
    return '<h1>'+title+'</h1>';

}

function convertFieldDictToDraggablesHtml(dict) {
    var html = '';
    for (var f in dict) {
        var id = 'ocrx-' + f;
        html += '<div id="'+id+'" class="ocrx-draggable ui-widget-content"><p>'+dict[f]+'</p></div>';
    }
    html += getClearHtml();

    return html;
}

function getClearHtml() {
    return '<div style="clear: both;"></div>';
}


