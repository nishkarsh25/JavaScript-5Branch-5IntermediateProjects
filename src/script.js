const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const categoryBtns = document.querySelectorAll(".category-btn");

function filterProduct(){
    const searchValue = searchInput.value.toLowerCase();
    const productItems = document.querySelectorAll(".product-item");
    const activeCategory = document.querySelector(".category-btn.bg-red-500").dataset.category;
    console.log(activeCategory);
    productItems.forEach(item=>{
        const title = item.querySelector("h3").innerText.toLowerCase();
        const category = item.dataset.category;


        if((title.includes(searchValue) || searchValue === "") && (category === activeCategory || activeCategory === "all")){
            item.classList.remove("hidden"); //item.style.display="block";
        }
        else{
            item.classList.add("hidden");// item.style.display="none";
        }
    })
}

function setCategory(e){
    categoryBtns.forEach(btn=>{
        btn.classList.add("bg-blue-500");
        btn.classList.remove("bg-red-500"); // Remove red background from all buttons
    });
    e.target.classList.remove("bg-blue-500");
    e.target.classList.add("bg-red-500"); // Add red background to the clicked button
    filterProduct();
   
}