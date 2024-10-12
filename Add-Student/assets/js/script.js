"use strict";

let inputs = document.querySelectorAll(".input");
let invalidInputs = document.querySelectorAll(".invalid-input");
let btn = document.querySelector(".add");
let studentTable = document.querySelector(".student-table")
let students = (JSON.parse(localStorage.getItem("students")) == null) ? [] : JSON.parse(localStorage.getItem("students"));
let student = {
    fullname: "",
    age: 0,
    email: ""
}


inputs.forEach((input, i) => {
    input.addEventListener("keyup", function () {
        if (this.value.trim() === "") {
            invalidInputs[i].classList.remove("d-none");
            btn.setAttribute("disabled", "true");
        } else {
            invalidInputs[i].classList.add("d-none");
            btn.removeAttribute("disabled");
            if (i == 0) {
                student.fullname = this.value
            }if(i == 1){
                student.age = this.value
            }if(i == 2){
                student.email = this.value
            }
        }
    });
});




btn.addEventListener("click",function(){
    students.push(student)
    console.log(students);
    
    localStorage.setItem("students",JSON.stringify(students))
    btn.setAttribute("disabled","true")
    
    location.reload()
})



if (JSON.parse(localStorage.getItem("students")).length == 0) {
    document.querySelector(".table-header").classList.add("d-none")
}else{
    document.querySelector(".table-header").classList.remove("d-none")
    let std = ``
    JSON.parse(localStorage.getItem("students")).forEach(stu => {
        std += `
        <tr>
            <td>${stu.fullname}</td>
            <td>${stu.age}</td>
            <td>${stu.email}</td>
            <td><button type="button" class="btn btn-danger delete">Delete</button></td>
        </tr>
        `
    });
    
    studentTable.innerHTML = std

    let deleteBtns = document.querySelectorAll(".delete")
    deleteBtns.forEach((btn, i) => {
        btn.addEventListener("click", function() {
            let stds = JSON.parse(localStorage.getItem("students"));
            stds.splice(i, 1); // Correctly modify stds
            localStorage.setItem("students", JSON.stringify(stds));
            location.reload();
        });
    });
    
}
