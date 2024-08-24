document.getElementById('autofill-yes').addEventListener('click', () => {
    // Send a message to the content script to autofill the form
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
        browser.tabs.sendMessage(tabs[0].id, { action: "autofill" });
    }).catch(error => {
        console.error('Error sending message:', error);
    });
});

document.getElementById('autofill-no').addEventListener('click', () => {
    window.close(); // Close the popup
});
