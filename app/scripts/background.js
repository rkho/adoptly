'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: '\'1'});

// Listen for contact from contentscript.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // If the message is received, we need to grab the URL of the active tab

  sendResponse({farewell: checkVendor(request.greeting)})

})

function checkVendor(domain) {
  if (domain === 'slack.com') {
    return domain;
  }
}

function respondToClient() {
  chrome.tabs.sendMessage(tabs[0].url, {greeting: 'It works!'}, function(response) {
    console.log(response.farewell);
  })
}
// chrome.tabs.query({currentWindow: true, active:true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].url, {greeting: 'hello there'}, function(response) {
//     console.log(response.farewell);
//   })
// }
// });

// chrome.tabs.onRemoved.addListener(function() {
//   alert('Closed Tab');
// })

