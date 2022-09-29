const inputBar = document.getElementById("words__input");
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

inputButton.addEventListener("click",  IfInputBarNotEmpty__addToList);
inputBar.addEventListener("keydown", event => {
    if(event.key == "Enter"){
         IfInputBarNotEmpty__addToList();
    }
})

function IfInputBarNotEmpty__addToList(){
    if(inputBar.value){
        const newTag = wordToTag(inputBar.value);
        const list = document.getElementsByClassName("words__list")[0];
        list.appendChild(newTag);
    
        clearTheInputBar();
    }
}

function clearTheInputBar(){
    inputBar.value = "";
}

function wordToTag(word){
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");
    const img = document.createElement("img");
    const undesiredWord = document.createTextNode(word);

    li.setAttribute("class", "words__item");
    li.appendChild(div);
    div.setAttribute("class", "words__tag");
    div.appendChild(p);
    div.appendChild(button);
    p.appendChild(undesiredWord);
    p.setAttribute("class", "words__text");
    button.setAttribute("class", "words__bttn");
    button.appendChild(img);
    img.setAttribute("alt", "Delete item")
    img.setAttribute("src", "/ASSETS/x-icon.png")

    return li;
}