console.log("loaded");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {  
    var action = request.action;
    switch(action){
        case "showTitle":
            showTitle();
            break;
        default:
            console.log("unknown action");
            break;
    }
});