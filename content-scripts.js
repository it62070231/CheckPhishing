resultfunction = (res) => {
    var link, links;
 
    var result = res.result;

    if (result === undefined) {
        // console.log("Not A Website");
        alert("Not a Website or Can't Detect this Website")
        // result = "Not a Website or Can't Detect this Website";
    };
    console.log(link);
    if (result === "Phishing") {
        alert('This Website is Phishing!');
    } else if (result === "Legitimate") {
        alert('This Website is Legitimate')
    }

    // if (res.typed === "Selection") {
    //     link = document.createElement("span");
    //     link.setAttribute("id", "Popover" + result)
    //     // link.setAttribute("tabindex", "0");
    //     // link.setAttribute('data-toggle', 'popover');
    //     // link.setAttribute('data-bs-trigger', 'hover focus');
    //     // link.setAttribute('data-bs-placement', 'top')
    //     // link.setAttribute('data-content', "popover for checking phishing website");
    //     // link.setAttribute('title', result);

    //     var sel = window.getSelection()
    //     var range = sel.getRangeAt(0).cloneRange();
    //     range.surroundContents(link);
    //     sel.removeAllRanges();
    //     sel.addRange(range);
    // } else {
    //     links = document.getElementsByTagName("a");
    //     var indexed = -1
    //     for (var i = 0; i < links.length; i++) {
    //         if (links[i].href === res.data) {
    //             console.log("Found URL");
    //             indexed = i;
    //             break;
    //         }
    //     }

    //     if (indexed == -1) {
    //         console.log("Didn't find URL in this page");
    //     } else {
    //         console.log(indexed)
    //         link = document.getElementsByTagName("a")[indexed]
    //         console.log(link)
    //         link.setAttribute("id", "Popover" + result)
    //         // link.setAttribute("tabindex", "0");
    //         // link.setAttribute('data-toggle', 'popover');
    //         // link.setAttribute('data-bs-trigger', 'hover focus');
    //         // link.setAttribute('data-bs-placement', 'top');
    //         // link.setAttribute('data-content', "popover for checking phishing website");
    //         // link.setAttribute('title', result);
    //         // link.setAttribute('data-bs-original-title', result);
    //     };
    // };

    // var popover = new bootstrap.Popover(link, {
    //     html: true,
    //     placement: 'top',
    //     trigger: 'hover focus',
    //     customClass: 'popover-' + result,
    //     content: '<b>' + result + '</b>',
    //     // template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body text-danger"></div></div>'
    // });

}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
    
        if (request.greeting === "hello") {
            // console.log(request.result)
            resultfunction(request)
            sendResponse({farewell: request.result});
        };
        
    }
  );

