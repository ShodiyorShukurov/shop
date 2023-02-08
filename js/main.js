// Get elements 
const elResultList = document.querySelector(".js-result-list");



for (shop of shop_list) {

    let newItem = document.createElement("li");
    let newImg = document.createElement("img");
    let newTitle = document.createElement("h4");
    let newPrice = document.createElement("span");
    let newDiv = document.createElement("div");
    let newRating1 = document.createElement("p");
    let newRating2 = document.createElement("p");
    let newButton = document.createElement("button");

    newImg.src = shop.image;
    newImg.width = "300";
    newImg.height = "250"
    newTitle.textContent = shop.title;
    newPrice.textContent = "Price: " + shop.price + "$";
    newRating1.textContent = "Rate: " + shop.rating.rate;
    newRating2.textContent = "Count: " + shop.rating.count;
    newButton.textContent = "Add to card";

    newDiv.append(newRating1, newRating2);
    newItem.appendChild(newImg);
    newItem.appendChild(newTitle);
    newItem.appendChild(newPrice);
    newItem.appendChild(newDiv);
    newItem.appendChild(newButton);;

    elResultList.appendChild(newItem);

    newItem.classList.add("shop-item");
    newImg.classList.add("card-img");
    newTitle.classList.add("title-text");
    newDiv.classList.add("Card-text");
    newPrice.classList.add("price-text");
    newButton.classList.add("button-card");
};