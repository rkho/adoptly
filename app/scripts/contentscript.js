// GET URL
function getDomain() {
  return document.domain;
}

// SENDER: Communicate to background.js
chrome.runtime.sendMessage({domain: getDomain()}, function(response) {
  console.log('response object: ' + response);
})

// LISTENER: Communication from background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('sender tab: ' + sender.tab)
})
