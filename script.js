const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let table = document.querySelector("table");
let prices = document.querySelectorAll(".price");

const getSum = () => {
	let total = 0;
	prices.forEach((el)=>{
		total+=Number(el.innerText);
	});
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
	td1.innerText = 'Total Price';
	td1.className = 'item';
  td2.innerText = total;
  td2.className = "price";
  // td.id = "ans";
  tr.append(td1,td2);
  table.append(tr);
};

getSumBtn.addEventListener("click", getSum);