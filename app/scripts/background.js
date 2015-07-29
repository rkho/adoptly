'use strict';

// BOILERPLATE
chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: '\'1'});

// SESSION CLASS
var Session = function(username, vendor) {
  this.username = username;
  this.vendor = vendor;
  this.duration = 0;
  this.startDate = new Date();
  this.endDate = undefined;
}

Session.prototype.getEndDate = function() {
  this.endDate = new Date();
}

Session.prototype.sendToDatabase = function() {
  // AJAX POST request to send this to the database
}

var session;

// TRACKED VENDORS
var trackedVendors = ['slack.com', 'apple.com']

// HELPER METHODS
var checkVendor = function(domain) {
  if (trackedVendors.indexOf(domain) !== -1 && !session) {
    session = new Session('Richard', domain);
    // alert(session.startDate);
  }
}

// LISTENERS: Communication from contentscript.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // If the message is received, we need to grab the URL of the active tab
  if (request.domain) {
    sendResponse({yes: 'ok'})
    // alert(sender.tab.id);
    checkVendor(request.domain);
  }
})


// LISTENERS: Tab Closed
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url) {
    alert(changeInfo.url);
  }
})


// LISTENERS: Active Tab
// When Chrome's active tab changes, fire a callback to:
  // 1. Store the current sessionInfo into a database
  // 2. Grab the new domain from the tab
    // 3. Determine if a new sessionInfo needs to be run if the new tab is a SaaS vendor
      // 4. If it does, start ti
      // 5. Otherwise, do nothing, waiting for the next time active tab changes

chrometabs.onActivated.addListener(function(activeInfo) {
  // Send a POST request to our server, pushing in sessionInfo
  chrome.tabs.sendMessage(tabs[0].url, {query: 'new'}, function(response) {
    checkVendor(response.domain);
  })
})

// When the current tab closes, fire a callback to:
  // 1. Store the current sessionInfo into a database

