let dayNight =  document.querySelector(".dayNight");
let banner = document.querySelector(".banner");
let day =  document.querySelector(".day");
let night =  document.querySelector(".night");

dayNight.addEventListener("click", () => {
    banner.classList.toggle("bg-gray-900");
    banner.classList.toggle("text-white");
    
    // Add or toggle other classes as needed
    day.classList.toggle("hidden");
    night.classList.toggle("hidden");
});