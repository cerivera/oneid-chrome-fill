chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.insertCSS(null, {file:"css/overlay.css"}, function() {
        chrome.tabs.executeScript(null, {file:"js/overlay.js"});
    });
});

