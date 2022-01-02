let viewButtons = document.querySelectorAll(".open-window");
let windows = document.querySelector(".window").children;

viewButtons.forEach(viewButton => {
    for (let i = 0; i < windows.length - 1; i++) {
        let windowId = windows[i].getAttribute("id");
        let id = windowId.substr(windowId.length - 1);
        let projectClass = viewButton.parentElement.getAttribute("class")
        let projectId = projectClass.substr(projectClass.length - 1);
        if(projectId === id) {
            viewButton.addEventListener("click", function() {
                let desWindow = document.querySelector(".window");
                desWindow.style.display = "block";
                windows[i].style.display = "block";
            });
        }
    }
})


document.getElementById("closeButton").addEventListener("click", function (){
    let desWindow = document.querySelector(".window");
    desWindow.style.display = "none";
    let windowBlockInfo = document.querySelectorAll(".info");
    windowBlockInfo.forEach(info => {
       info.style.display = "none";
    });
})

document.querySelector(".menu").addEventListener("click",
    function () {
        let menu = document.querySelector(".mobileMenu");
        console.log(menu);
        let menuDisplay = menu.style.display;
        if(menuDisplay === "block"){
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
})

window.addEventListener(`resize`, event => {
    console.log(window.innerWidth)
    let normalMenu = document.querySelector(".normalMenu")
    let burger = document.querySelector(".hamburger")
    if(window.innerWidth >= 900) {
        console.log("normal")
        normalMenu.style.display = "flex";
        burger.style.display = "none";
    } else {
        console.log("burger")
        normalMenu.style.display = "none";
        burger.style.display = "flex";
    }

}, false);

