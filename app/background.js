chrome.tabs.onRemoved.addListener(function() {
  alert('CLOSED!');
})

$(function() {

  $('body').append('Hello World');

  var usageInfo = {
    vendorName: undefined,
    timeSpent: 0,
    trackedVendor: false
  };

  var url = window.location.href;

  function extractDomain(url) {
      var domain;
      //find & remove protocol (http, ftp, etc.) and get domain
      if (url.indexOf("://") > -1) {
          domain = url.split('/')[2];
      }
      else {
          domain = url.split('/')[0];
      }

      //find & remove port number
      domain = domain.split(':')[0];

      return domain;
  }

  if (extractDomain(url) === 'slack.com') {
    usageInfo.vendorName = 'Slack';
    console.log(usageInfo.vendorName);
  }

  // Every second, increase the time spent on this site by one.
  setInterval(function() {
    usageInfo.timeSpent++;
  }, 1000)

})