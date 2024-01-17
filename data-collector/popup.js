// popup.js
document.getElementById('clickMe').addEventListener('click', function() {
    // Collect data (URLs of open tabs)
    chrome.tabs.query({}, function(tabs) {
      var tabUrls = tabs.map(function(tab) {
        return tab.url;
      });
  
      // Display data in the HTML
      document.getElementById('result').textContent = 'Open Tab URLs:\n' + tabUrls.join('\n');
    });
  });
  