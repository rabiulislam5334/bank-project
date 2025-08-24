const pin = 1234;
const transactionData = [];
// function
function getInput(id) {
  const inputfild = document.getElementById(id);
  const inputvalue = inputfild.value;
  const convertNumber = parseInt(inputvalue);
  return convertNumber;
}
function getInputText(id) {
  const inputfildText = document.getElementById(id);
  const inputvalue = inputfildText.value;
  return inputvalue;
}
function innerText(id) {
  const textel = document.getElementById(id);
  const inputText = textel.innerText;
  const convertNumber = parseInt(inputText);
  return convertNumber;
}
function setInnerText(value) {
  const avilableTextel = document.getElementById("balance");
  avilableTextel.innerText = value;
}
// date time function
function getDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  return `${date} ${time}`;
}

// add money

document.getElementById("btn-addMoney").addEventListener("click", function (e) {
  e.preventDefault();
  const bankName = document.getElementById("Bank").value;
  const accountNumber = getInput("Account-Number");
  const addAmount = getInput("Add-Amount");
  const pinNumber = getInput("pin-number");
  const newBalance = innerText("balance");

  if (accountNumber.toString().length < 11) {
    alert("Invalid account number");

    return;
  }
  if (pinNumber !== pin) {
    alert("Invalid pin number");

    return;
  }
  const totalBalance = addAmount + newBalance;
  setInnerText(totalBalance);
  const data = {
    name: "Add Money",
    date: getDateTime(),
  };
  transactionData.push(data);
});

// cashout
document.getElementById("btn-Withdraw").addEventListener("click", function (e) {
  e.preventDefault();
  const agentNumber = getInput("agent-Number");
  const amount = getInput("amount");
  const agentpin = getInput("pinNumber");
  const newCash = innerText("balance");
  if (agentNumber.toString().length < 11) {
    alert("Invalid agent number");

    return;
  }
  if (agentpin !== pin) {
    alert("Invalid pin number");

    return;
  }
  const totalBalance = newCash - amount;
  setInnerText(totalBalance);
  const data = {
    name: "Withdraw",
    date: getDateTime(),
  };
  transactionData.push(data);
});

// transaction section

document.getElementById("transaction").addEventListener("click", function () {
  const transactionCon = document.getElementById("transaction-con");
  for (let data of transactionData) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div
            class="border flex justify-between items-center border-gray-400 bg-white rounded-xl w-full p-4 mb-3"
          >
            <div class="flex items-center">
              <div class="p-3 border border-gray-300 bg-[#f4f5f7] rounded-full">
                <img src="./assets/wallet1.png" alt="" />
              </div>
              <div class="ml-4">
                <h1>${data.name}</h1>
                <p>${data.date}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>`;
    transactionCon.appendChild(div);
  }
  console.log(transactionData);
});
// togling
// function of togling
function handelTogling(id) {
  const forms = document.getElementsByClassName("form");
  for (let form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
// function hover togling
function hoverTogling(id) {
  const btns = document.getElementsByClassName("form-btn");
  for (let btn of btns) {
    console.log(btn);
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  document.getElementById(id).classList.remove("border-gray-300");
}
//
document.getElementById("addCash").addEventListener("click", function () {
  handelTogling("parent-addCash");
  hoverTogling("addCash");
});

document.getElementById("cashOut").addEventListener("click", function () {
  handelTogling("parent-cashOut");
  hoverTogling("cashOut");
});

document.getElementById("transfer").addEventListener("click", function () {
  handelTogling("parent-Transfer");
  hoverTogling("transfer");
});

document.getElementById("bonus").addEventListener("click", function () {
  handelTogling("parent-Bonus");
  hoverTogling("bonus");
});

document.getElementById("bill").addEventListener("click", function () {
  handelTogling("parent-paybill");
  hoverTogling("bill");
});

document.getElementById("transaction").addEventListener("click", function () {
  handelTogling("parent-Transaction");
  hoverTogling("transaction");
});
