// Get the URL for the list:

var url = document.domain;

var sessionInfo = {
  username: 'Richard',
  vendor: undefined,
  duration: 0
}

chrome.runtime.sendMessage({greeting: url}, function(response) {
  if (response.farewell === 'slack.com') {
    sessionInfo.vendor = 'Slack';
    startTimer();
    console.log('SLACK');
  } else {
    console.log('Not a vendor');
  }
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('grettings');
})

function startTimer() {
  setInterval(function() {
    sessionInfo.duration++;
    console.log(sessionInfo.duration);
  }, 1000)
}