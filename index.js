let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// Configure parameters
let countItem = items.length;
let itemActive = 0;

// Event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

// Event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

// Auto run slider
let refreshInterval = setInterval(() =>{
    next.click();
}, 3000);

function showSlider(){
    // Remove old active item
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');

    if (itemActiveOld) itemActiveOld.classList.remove('active');
    if (thumbnailActiveOld) thumbnailActiveOld.classList.remove('active');

    // Assigning the active to a new location
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}

// Clear and reset auto-run slider interval
clearInterval(refreshInterval);
refreshInterval = setInterval(() =>{
    next.click();
}, 5000);

// Click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});
