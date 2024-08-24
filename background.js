chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'autofill') {
        // Execute the autofill script
        chrome.scripting.executeScript({
            target: { tabId: sender.tab.id },
            files: ['content.js']
        });
    }
});
