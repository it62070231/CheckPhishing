
var text = document.getElementById("url")
var predicted_result = document.getElementById("result-status")
var result_img = document.getElementById("result-img")

chrome.storage.sync.get(['url', 'predict'], function(result) {
    text.innerHTML = result.url
    predicted_result.innerHTML = result.predict
    if (predicted_result.innerHTML == 'Phishing') {
        result_img.innerHTML = '<svg class="crossmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="crossmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 14.1l23.8 23.8 m0,-23.8 l-23.8,23.8"/></svg>'
    } else if (predicted_result.innerHTML == 'Legitimate'){
        result_img.innerHTML = '<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>'
    } else {
        result_img.innerHTML = '<img src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" width="100px" height="100px">'
    }
    console.log('Value currently is ' + result.url);
    })

