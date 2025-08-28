console.log("hello, world!");

// Heart Function
const heartElement = document.getElementById("heart");
let heartQuantity = 0;
const heartClick = () => {
  heartQuantity += 1;
  heartElement.innerText = heartQuantity;
};