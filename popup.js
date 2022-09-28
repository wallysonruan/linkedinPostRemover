const inputBar = document.getElementById("undesired-words-input");
const inputButton = document.getElementById("input-bttn");

document.addEventListener("DOMContentLoaded", async () => {
    const activeTab = await getCurrentTab();

    if(activeTab.url.includes("linkedin.com/feed/")){

    }else{
    const container = document.getElementsByClassName("container")[0];
    container.innerHTML = 
    `<div>
        <p>You're not on the LinkedIn home page.</p>
    </div>`;
    }
});

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

inputButton.addEventListener("click", addToUndesiredWordsList);
inputBar.addEventListener("keydown", event => {
    if(event.key == "Enter"){
        addToUndesiredWordsList();
    }
})

function addToUndesiredWordsList(){
    const listElement = document.createElement("li");
    const listContent = document.createTextNode(inputBar.value);

    listElement.appendChild(listContent);

    const list = document.getElementById("list-of-undesired-words");
    list.appendChild(listElement);

    clearTheInputBar();
}

function clearTheInputBar(){
    inputBar.value = "";
}