
/**
 * JavaScript Functions and DOM manipulation
 * Course Resource Board
 * using resource-board-app.js, course-board.html and
 * style.css
 * Professor Lewis
 * October 6, 2026
 */

function startApp1(){
    console.log("Resource Board started.");
}

// startApp1();

function updateStatus(){
    const status = document.querySelector("#status");
    status.textContent = "Resource status updated by the user.";
}

// updateStatus();

function setupStatusButton(){
    const button = document.querySelector("#status-btn");
    button.addEventListener("click", updateStatus);

}

// setupStatusButton();

function listResources(){
    const resources = document.querySelectorAll(".resource");
    const output = document.querySelector("#output");

    output.innerHTML = "";
    resources.forEach(function(resource){
        output.innerHTML += resource.textContent + "<br>";
    });


}

// listResources();

function highlightJavaScript(){
    const item = document.querySelector(".js-resource");
    item.classList.toggle("focus");
}

function setupFocusButton(){
    const button = document.querySelector("#focus-btn");
    button.addEventListener("click", highlightJavaScript);
}

// setupFocusButton();

function addResource(){
    const input = document.querySelector("#new-resource");
    const resourceList = document.querySelector("#resource-list");

    const resourceName = input.value.trim();

    if(resourceName === ""){
        return;
    }

    const newItem = document.createElement("li");
    newItem.textContent = resourceName;

    newItem.classList.add("resource");

    resourceList.appendChild(newItem);
    input.value= "";
}

function setupAddButton() {
    const button = document.querySelector("#add-resource-btn");
    button.addEventListener("click", addResource);
}


// setupAddButton();

function startApp() {
    startApp1();
    setupStatusButton();
    setupFocusButton();
    setupAddButton();
    // setupResourceList();
    listResources();
}

document.addEventListener("DOMContentLoaded", startApp);
