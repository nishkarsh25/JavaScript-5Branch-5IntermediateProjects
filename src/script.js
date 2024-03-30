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