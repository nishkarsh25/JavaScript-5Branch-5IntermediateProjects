const input=document.querySelector("input");
const btn= document.getElementById("btn");
const icon= document.querySelector(".icon");
const weather= document.querySelector(".weather")
const temperature= document.querySelector(".temperature")
const description= document.querySelector(".description")

btn.addEventListener("click",()=>{
    let city = input.value;
    getWeather(city);
})

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let city = input.value;
        getWeather(city);
    }
  });