// GET URL
function getDomain() {
  return document.domain;
}

// SENDER: Communicate to background.js
chrome.runtime.sendMessage({greeting: getDomain()}, function(response) {
  console.log(response);
})

// LISTENER: Communication from background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.query === 'New domain') {
    sendResponse(getDomain())
  }
})

var port = chrome.runtime.connect({data: sessionInfo});
