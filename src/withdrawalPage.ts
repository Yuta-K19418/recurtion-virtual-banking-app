import GetBackAndNextButton from "./getBackAndNextButton";

const WithdrawalPage = (title: string) => {
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

  let billInputs = mainContainer.querySelectorAll<HTMLInputElement>(".bill-input");
  if (billInputs !== undefined) {
    for (let i = 0; i < billInputs.length; i++){
      billInputs[i].addEventListener("change", function(){
        document.getElementById("withdrawTotal")!.innerHTML = billInputs[i].value;
      });
    }
  }

  return mainContainer;
}

export default WithdrawalPage;