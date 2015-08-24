if(!window.loaded){
    
    console.log("loaded");
    window.loaded = true;
    
    function showTitle(){
        alert(document.title);
    }

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
    
}