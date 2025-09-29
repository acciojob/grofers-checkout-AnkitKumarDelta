const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let table = document.querySelector("table");
let prices = document.querySelectorAll(".price");

const getSum = () => {
//Add your code here
	let total = 0;
	prices.forEach((el)=>{
		total+=Number(el.innerText);
	});
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.innerText = total;
  td.className = "price";
  tr.append(td);
  table.append(tr);
};

getSumBtn.addEventListener("click", getSum);