const hamBtn =document.getElementById("break-point");
const mobileNav= document.querySelector(".mobile-nav")  
const nav= document.querySelector(".nav")  
hamBtn.addEventListener("click",e=>{
    e.preventDefault()
    mobileNav.classList.toggle("show-mobile-nav")
    mobileNav.classList.toggle("mobile-nav")
});
let cartSection= document.getElementById("cart-section")
let task;
let addBtn= document.querySelectorAll(".add-button")
addBtn.forEach(btn=>{
    btn.addEventListener("click",e=>{
 
 task = document.createElement("div")
task.classList.add("task")

let porduct= e.target.closest(".product")
let img =porduct.querySelector("img").src
let price =porduct.querySelector(".price a").innerText
let name =porduct.querySelector(".name").innerText
task.innerHTML=` <img src="${img}" alt="">
     <div class="task-name">${name}</div>
    <div class="task-price">${price}</div>
    <i class="bx bxs-trash-alt delete-icon"></i>
    `;
  
cartSection.append(task)
save()
    });


})



function save(){

    localStorage.setItem("cart" ,cartSection.innerHTML)

    
}
 

    


 document.addEventListener("DOMContentLoaded" , e=>{
        e.preventDefault()
    
        
    })

