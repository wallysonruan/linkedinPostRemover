async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

document.addEventListener("DOMContentLoaded", async () => {
    const activeTab = await getCurrentTab();

    if(activeTab.url.includes("linkedin.com/feed/")){

    }else{
    const container = document.getElementsByClassName("container")[0];
    container.innerHTML = "oi";
    }
});