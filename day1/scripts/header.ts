"use strict";

/**
 * Dynamically load the header from the header.html into the current page
 */

export async function LoadHeader() : Promise<void> {
    console.log("[INFO] Loading Header()");

    return fetch("./views/components/header.html")
        .then(response => response.text())
        .then(data => {
            const headerElement = document.querySelector('header');
            if(!headerElement){
                console.error("[ERROR] header element does not exist");
                return;
            }
            headerElement.innerHTML = data;
            updateActiveNewLink();
            CheckLogin();
        })
        .catch(error =>{
            console.error("[ERROR] Unable to load header")
        });
}

export function updateActiveNewLink(){
    console.log("[INFO] Updating active nav link...");

    const currentPath = location.hash.slice(1);
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {

        const linkPath = link.getAttribute("href")?.replace("#", "") || "";
        if(currentPath === linkPath) {
            link.classList.add("active");
        }else{
            link.classList.remove("active");
        }
    });

}
function handleLogout(event : Event){
    event.preventDefault();
    sessionStorage.removeItem("user");
    console.log("[INFO] User logged out. Updating UI...");

    LoadHeader().then(() => {
        location.hash = "/";
    });
}

function CheckLogin(){
    console.log("[INFO] Checking user login status...");
    const loginNav = document.getElementById("login") as HTMLAnchorElement;
    if (!loginNav) {
        console.warn("[WARNING] loginNav element not found! Skipping CheckLogin().");
        return;
    }

    const userSession = sessionStorage.getItem("user")
    if (userSession) {
        loginNav.innerHTML = `<i class="fas fas-sign-out-alt"></i> Logout`;
        loginNav.href = "#";
        loginNav.removeEventListener("click", handleLogout);
        loginNav.addEventListener("click", handleLogout);

    }else{
        loginNav.innerHTML = `<i class="fas fas-sign-in-alt"></i> Login`;
        loginNav.removeEventListener("click", handleLogout);
        loginNav.addEventListener("click", () => location.hash = "/login");
    }
}