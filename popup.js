document.getElementById('changeColor').addEventListener('click', async () => {
  try {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => { document.body.style.backgroundColor = 'lightgreen'; }
    });
  } catch (err) {
    console.error("Cannot execute script on this page:", err);
    alert("Cannot run on this page (chrome:// pages are blocked)");
  }
});
