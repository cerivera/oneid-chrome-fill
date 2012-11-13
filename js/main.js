chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file:"js/jquery.js"}, function() {
        chrome.tabs.executeScript(null, {file:"js/jquery-ui.js"}, function() {
          chrome.tabs.insertCSS(null, {file:"css/ui/jquery-ui.css"}, function() {
              chrome.tabs.insertCSS(null, {file:"css/overlay.css"}, function() {
                  chrome.tabs.executeScript(null, {file:"js/overlay.js"});
              });
          });
        });
    });
});

