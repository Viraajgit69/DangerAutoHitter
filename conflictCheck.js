let timeout = setTimeout(() => {
    window.location.href = chrome.runtime.getURL('warning.html');
  }, 1000);
  chrome.runtime.sendMessage({ type: 'check_conflicts' }, (response) => {
    clearTimeout(timeout);
    if (response && response.hasConflicts) {
      window.location.href = chrome.runtime.getURL('warning.html');
    }
  });