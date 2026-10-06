const TARGET_URL = "https://Chaotic369.github.io/Ring/";

chrome.action.onClicked.addListener(async (tab) => {
  try {
    const tabs = await chrome.tabs.query({ url: TARGET_URL + "*" });
    if (tabs && tabs.length > 0) {
      await chrome.tabs.update(tabs[0].id, { active: true });
    } else {
      await chrome.tabs.create({ url: TARGET_URL });
    }
  } catch (e) {
    chrome.tabs.create({ url: TARGET_URL });
  }
});