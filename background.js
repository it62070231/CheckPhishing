const data = {};
const tabs = {};

async function getData(query1) {
    // console.log("https://bqjfjhabx62v6p537aalvz6q7u0uyovs.lambda-url.ap-northeast-1.on.aws/predict?url=" + query1)
    const response = await fetch("https://bqjfjhabx62v6p537aalvz6q7u0uyovs.lambda-url.ap-northeast-1.on.aws/predict?url=" + query1);
    const data = await response.json();
    return data;
};

searchPhishing = (info, tabs) => {  

    console.log(info);
    // console.log(tabs);
    if (typeof info.selectionText == "undefined") {
        query1 = info.linkUrl;
        typecheck = "URL"
    } else {
        query1 = info.selectionText;
        typecheck = "Selection"
    };

    // For Productive
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello", data: query1, typed: typecheck, result: "Loading..."}, function(response) {
            console.log(response.farewell);
        });
        getData(query1).then(checkdata => {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello", data: query1, typed: typecheck, result: checkdata.is_Phishing}, function(response) {
                console.log(response.farewell);
            });
        });
    });

    // For Testing
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello", data: query, typed: typecheck}, function(response) {
    //         console.log(response.farewell);
    //     });
    // });

};

function setStorageLocal(current_url) {
    chrome.storage.sync.set({url: current_url}, function() {
        console.log('Value is set to ' + current_url);
    });
    chrome.storage.sync.set({predict: "Loading..."}, function() {
        console.log("Loading... Prediction")
    });
    getData(current_url).then(predicted_data => {
        chrome.storage.sync.set({predict: predicted_data.is_Phishing}, function() {
            console.log('Value is set to ' + predicted_data.is_Phishing);
        })
    })
}

chrome.contextMenus.create({
    id: "CheckPhishingURL",
    title: "Check URL for Phishing",
    contexts:["link", "selection"]
});

chrome.contextMenus.onClicked.addListener(searchPhishing);

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
    var url = tabInfo.url;
    if (url !== undefined && changeInfo.status === "complete" && (!url.includes("chrome://"))) {
        console.log(url)
        setStorageLocal(url)
    }
})


chrome.tabs.onActivated.addListener(function(tabId, windowId){
    chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
        var current_url = tabs[0].url;
        if (current_url !== undefined) {
            // console.log(current_url)
            // const popup = await chrome.action.openPopup()
            // setStorageLocal(current_url)
            // console.log(popup)
        }
    })
})

chrome.storage.onChanged.addListener(function (changes, namespace) {
    
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        console.log(
        `Storage key "${key}" in namespace "${namespace}" changed.`,
        `Old value was "${oldValue}", new value is "${newValue}".`
        );
    }
});