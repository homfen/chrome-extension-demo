document.querySelector("#alert").addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "showTitle"}, function(response) {
            console.log("ok");
        });
    });
});