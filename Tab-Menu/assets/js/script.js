"use strict";

let btns = document.querySelectorAll("button")

btns.forEach(btn => {
    btn.addEventListener("click",function(){
        btns.forEach(b => b.style.backgroundColor = "");
        this.style.backgroundColor = "#CCCCCC";
        btns.forEach(b => b.nextElementSibling.classList.add("d-none"));
        this.nextElementSibling.classList.remove("d-none")
    })
});