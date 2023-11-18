import { data } from "./jsonData.js";
const tbody = document.querySelector("#stockTableContent");

console.log(data);

const stock = [];
window.addEventListener("load", (e) => {
  setInterval(addRecord, 3000);
});

//
//
function randRange(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function addRecord() {
  const randomInt = randRange(0, 18);
  const randomVariation = randRange(-100, 100);
  const stockEntry = {
    ...data[randomInt],
    variation: `${randomVariation}K`,
  };
  stock.push(stockEntry);
  draw();
}

function draw() {
  console.log(stock);
  tbody.innerHTML = "";

  for (let i = 0; i < stock.length; i++) {
    const stockTickerData = stock[i];

    let tr = document.createElement("tr");
    for (const propName in stockTickerData) {
      let td = document.createElement("td");
      td.textContent = stockTickerData[propName];

      if (propName === "variation") {
        const variationValue = parseFloat(stockTickerData[propName]);

        if (variationValue > 0) {
          td.classList.add("tickup");
        } else if (variationValue < 0) {
          td.classList.add("tickdown");
        }
      }

      tr.append(td);
    }
    tbody.append(tr);
  }
}
