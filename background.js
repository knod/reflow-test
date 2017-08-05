
// Icon clicked in toolbar
function onIconClick( info, tab ) {
    browser.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        browser.tabs.sendMessage( tabs[0].id, {
            "action": "testReflow"
        });
    });
};

chrome.browserAction.onClicked.addListener( function( tab ) { onIconClick(); });
