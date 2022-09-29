var listOf = ["a"];

document.addEventListener("DOMContentLoaded", alert(document.getElementsByClassName("scaffold-finite-scroll__content")))



function removePostsFromFeed(){
    const posts = document.getElementsByClassName("scaffold-finite-scroll__content")[0].children;
    console.log(posts);

    for(let i = 0; i < posts.length; i++){
        for(let i = 0; i < listOf.length; i++){
            if(posts[i].textContent.includes(listOf[i])){
                posts[i].remove();
            }
        }
    }
}