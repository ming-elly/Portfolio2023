const element = document.querySelector(".hover-class");
element.addEventListener("mouseover",()=>{
  element.classList.add("current");
});

element.addEventListener("mouseout", ()=>{
  element.classList.remove("current");
});
