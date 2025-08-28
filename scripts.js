console.log("hello, world!");

// Heart Function
const heartElement = document.getElementById("heart");
let heartQuantity = 0;
const heartClick = () => {
  heartQuantity += 1;
  heartElement.innerText = heartQuantity;
};

// Coin
let coinBalance = 100;
const coinElement = document.getElementById("coin");
// Call Function
const callHistory = document.getElementById("history");
const onHotlineCall = (name, number) => {
  if (coinBalance < 20) return alert("You don't have enough coins to call.");
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();  
  const date = `${hour}:${minute}:${second}`;

  const history = document.createElement("div");
  const historyChild = document.createElement("div");
  history.classList.add(
    "w-full",
    "flex",
    "items-center",
    "justify-between",
    "gap-2",
    "bg-yellow-50",
    "p-3",
    "rounded-xl",
    "shadow"
  );
  historyChild.classList.add("flex", "flex-col", "gap-1", "items-start");

  const historyChildH3 = document.createElement("h3");
  historyChildH3.classList.add("text-lg", "font-semibold");

  const historyChildP = document.createElement("p");
  historyChildP.classList.add("font-medium", "text-gray-500");

  const historyP = document.createElement("p");
  historyP.classList.add("font-medium", "text-gray-500");

  historyChildH3.innerText = name;
  historyChildP.innerText = number;
  historyP.innerText = date;

  historyChild.appendChild(historyChildH3);
  historyChild.appendChild(historyChildP);
  history.appendChild(historyChild);
  history.appendChild(historyP);
  callHistory.appendChild(history);
  
  alert(`You have called ${name} ${number}.`);
  coinBalance -= 20;
  coinElement.innerText = coinBalance;
};