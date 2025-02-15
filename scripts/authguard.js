"use strict";

(function (){
    if(!sessionStorage.getItem("user")){
        console.log("[AUTHGURAD] Unauthorized access detected. Redirecting to the login page");
        location.href = "login.html";
    }
})();