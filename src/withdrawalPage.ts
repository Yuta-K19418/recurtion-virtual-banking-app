import AppConfig from "./appConfig";
import BankAccount from "./clssses/BankAccount";
import DisplayBlock from "./displayBlock";
import DisplayNone from "./displayNone";
import GetBackAndNextButton from "./getBackAndNextButton";
import mainBankPage from "./mainBankPage";

const WithdrawalPage = (title: string, userBankAccount: BankAccount) => {
  let mainContainer = document.createElement("div");
  mainContainer.classList.add("p-5");

  let titleH2 = document.createElement("h2");
  titleH2.classList.add("pb-3");
  titleH2.innerHTML = title;
  mainContainer.append(titleH2);

  let div1 = document.createElement("div");
  div1.classList.add("form-group", "row");
  let label1 = document.createElement("label");
  label1.classList.add("col-2", "col-form-label", "col-form-label-sm");
  label1.innerHTML = "$100";
  label1.htmlFor = "moneyWithdraw100";
  let subDiv1 = document.createElement("div");
  subDiv1.classList.add("col-10");
  let inputMoney1 = document.createElement("input");
  inputMoney1.classList.add("form-control", "form-control-sm", "text-right", "withdraw-bill", "bill-input");
  inputMoney1.type = "number";
  inputMoney1.id = "moneyWithdraw100";
  inputMoney1.placeholder = "5";
  inputMoney1.setAttribute("data-bill", "100");
  subDiv1.append(inputMoney1);
  div1.append(label1, subDiv1);

  let div2 = document.createElement("div");
  div2.classList.add("form-group", "row");
  let label2 = document.createElement("label");
  label2.classList.add("col-2", "col-form-label", "col-form-label-sm");
  label2.innerHTML = "$50";
  label2.htmlFor = "moneyWithdraw50";
  let subDiv2 = document.createElement("div");
  subDiv2.classList.add("col-10");
  let inputMoney2 = document.createElement("input");
  inputMoney2.classList.add("form-control", "form-control-sm", "text-right", "withdraw-bill", "bill-input");
  inputMoney2.type = "number";
  inputMoney2.id = "moneyWithdraw50";
  inputMoney2.placeholder = "1";
  inputMoney2.setAttribute("data-bill", "50");
  subDiv2.append(inputMoney2);
  div2.append(label2, subDiv2);

  let div3 = document.createElement("div");
  div3.classList.add("form-group", "row");
  let label3 = document.createElement("label");
  label3.classList.add("col-2", "col-form-label", "col-form-label-sm");
  label3.innerHTML = "$20";
  label3.htmlFor = "moneyWithdraw20";
  let subDiv3 = document.createElement("div");
  subDiv3.classList.add("col-10");
  let inputMoney3 = document.createElement("input");
  inputMoney3.classList.add("form-control", "form-control-sm", "text-right", "withdraw-bill", "bill-input");
  inputMoney3.type = "number";
  inputMoney3.id = "moneyWithdraw20";
  inputMoney3.placeholder = "2";
  inputMoney3.setAttribute("data-bill", "20");
  subDiv3.append(inputMoney3);
  div3.append(label3, subDiv3);

  let div4 = document.createElement("div");
  div4.classList.add("form-group", "row");
  let label4 = document.createElement("label");
  label4.classList.add("col-2", "col-form-label", "col-form-label-sm");
  label4.innerHTML = "$10";
  label4.htmlFor = "moneyWithdraw10";
  let subDiv4 = document.createElement("div");
  subDiv4.classList.add("col-10");
  let inputMoney4 = document.createElement("input");
  inputMoney4.classList.add("form-control", "form-control-sm", "text-right", "withdraw-bill", "bill-input");
  inputMoney4.type = "number";
  inputMoney4.id = "moneyWithdraw10";
  inputMoney4.placeholder = "3";
  inputMoney4.setAttribute("data-bill", "10");
  subDiv4.append(inputMoney4);
  div4.append(label4, subDiv4);

  let div5= document.createElement("div");
  div5.classList.add("form-group", "row");
  let label5 = document.createElement("label");
  label5.classList.add("col-2", "col-form-label", "col-form-label-sm");
  label5.innerHTML = "$5";
  label5.htmlFor = "moneyWithdraw5";
  let subDiv5 = document.createElement("div");
  subDiv5.classList.add("col-10");
  let inputMoney5 = document.createElement("input");
  inputMoney5.classList.add("form-control", "form-control-sm", "text-right", "withdraw-bill", "bill-input");
  inputMoney5.type = "number";
  inputMoney5.id = "moneyWithdraw5";
  inputMoney5.placeholder = "1";
  inputMoney5.setAttribute("data-bill", "5");
  subDiv5.append(inputMoney5);
  div5.append(label5, subDiv5);

  let div6 = document.createElement("div");
  div6.classList.add("form-group", "row");
  let label6 = document.createElement("label");
  label6.classList.add("col-2", "col-form-label", "col-form-label-sm");
  label6.innerHTML = "$1";
  label6.htmlFor = "moneyWithdraw1";
  let subDiv6 = document.createElement("div");
  subDiv6.classList.add("col-10");
  let inputMoney6 = document.createElement("input");
  inputMoney6.classList.add("form-control", "form-control-sm", "text-right", "withdraw-bill", "bill-input");
  inputMoney6.type = "number";
  inputMoney6.id = "moneyWithdraw1";
  inputMoney6.placeholder = "4";
  inputMoney6.setAttribute("data-bill", "1");
  subDiv6.append(inputMoney6);
  div6.append(label6, subDiv6);

  let div7 = document.createElement("div");
  div7.classList.add("text-center", "money-box", "p-3");
  let itemP = document.createElement("p");
  itemP.id = "withdrawTotal";
  itemP.innerHTML = "$0.00";
  div7.append(itemP);

  mainContainer.append(div1);
  mainContainer.append(div2);
  mainContainer.append(div3);
  mainContainer.append(div4);
  mainContainer.append(div5);
  mainContainer.append(div6);
  mainContainer.append(div7);
  mainContainer.append(GetBackAndNextButton("back", "next"));
  let backButton = mainContainer.querySelectorAll<HTMLElement>(".back-btn").item(0);
  backButton.addEventListener("click", function(){
    const config = AppConfig();
    DisplayNone(config.sidePage);
    DisplayBlock(config.bankPage);
  });

  let billInputs = mainContainer.querySelectorAll<HTMLInputElement>(".bill-input");
  if (billInputs !== undefined) {
    for (let i = 0; i < billInputs.length; i++){
      billInputs[i].addEventListener("change", function(){
        document.getElementById("withdrawTotal")!.innerHTML = billSummation(billInputs, "data-bill").toString();
      });
    }
  }

  return mainContainer;
}

export default WithdrawalPage;


const billSummation = (inputElementNodeList: NodeListOf<HTMLInputElement>, multiplierAttribute: string): number => {
  let sum = 0;

  for (let i = 0; i < inputElementNodeList.length; i++){
    let currentElement = inputElementNodeList[i];
    let currentElementValue = parseInt(currentElement.value);

    if (currentElement.hasAttribute(multiplierAttribute)){
      let labelValue = currentElement.getAttribute(multiplierAttribute); 
      currentElementValue *= labelValue !== null ? parseInt(labelValue) : 0;
      sum += currentElementValue >= 0 ? currentElementValue : 0;
    }
  }

  return sum;
}