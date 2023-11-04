const search = document.querySelector(".search");
const searchBtn = document.querySelector(".header-search");
const clear = document.querySelector(".search-clear");

searchBtn.addEventListener("click", () => {
  search.classList.add("open");
  searchBtn.classList.add("open");
  clear.classList.add("open");
});
clear.addEventListener("click", () => {
  search.classList.remove("open");
  searchBtn.classList.remove("open");
  clear.classList.remove("open");
  document.getElementById("input").value = "";
});
const list = document.querySelector(".nav-list");
const openBtn = document.querySelector(".nav-burger");
openBtn.addEventListener("click", () =>{
    list.classList.toggle("active")
openBtn.classList.toggle("active")    
})

// swiper
let swiper = new Swiper(".swiper",{
  pagination: {
    el: ".swiper-pagination",
  },

  // renderBullet: function (index, className) {
  //   return '<span class="' + className + '">' + (index + 1) + '</span>';
  // }
})
// tabs
const tabsBtn = document.querySelectorAll(".work-btn")
const tabsItem = document.querySelectorAll(".tab-content")
tabsBtn.forEach(clickTab)
function clickTab(item){
  item.addEventListener("click", function(){
    let currentBtn = item
    let tabId = currentBtn.getAttribute("data-tab")
    let currentTab = document.querySelector(tabId)

    if(!currentBtn.classList.contains("active")){
      tabsBtn.forEach(function(item){
        item.classList.remove("active")
      })
      tabsItem.forEach(function(item){
        item.classList.remove("active")
      })
      currentBtn.classList.add("active")
      currentTab.classList.add("active")
    
    }
  })
}
document.querySelector(".work-btn").click()
// accordion

const accordion = document.querySelectorAll("[data-collapse]")
accordion.forEach((question, index)=>{
  accordion[index].addEventListener("click",()=>{
    question.classList.toggle("active")
  })
})