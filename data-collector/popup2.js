// popup.js
// Collect data (URLs of open tabs)
chrome.tabs.query({}, function(tabs) {
    var tabUrls = tabs.map(function(tab) {
      return tab.url;
    });
  
    // Collect browser history
    chrome.history.search({text: ''}, function(historyItems) {
      var historyUrls = historyItems.map(function(item) {
        return item.url;
      });
  
      // Combine and format data for display
      var combinedUrls = 'Open Tab URLs:\n' + formatUrls(tabUrls) + '\n\nBrowser History URLs:\n' + formatUrls(historyUrls);
      document.getElementById('result').textContent = combinedUrls;
    });
  });
  
  // Function to format URLs with line breaks
  function formatUrls(urls) {
    return urls.join('\n') + '\n';
  }
  