import AppConfig from "./appConfig";
import BankAccount from "./clssses/BankAccount";
import DisplayBlock from "./displayBlock";
import DisplayNone from "./displayNone";
import withdrawalPage from "./withdrawalPage";

const mainBankPage = (userBankAccount: BankAccount) => {
  let mainContainer = document.createElement("div");

  let userInfoDiv = document.createElement("div");
  userInfoDiv.classList.add("pb-2", "pb-md-4", "text-right");
  let nameP = document.createElement("p");
  nameP.innerHTML = `Your Name: ${userBankAccount.getFullName()}`;
  nameP.classList.add("py-1");
  userInfoDiv.append(nameP);
  let bankIdP = document.createElement("div");
  bankIdP.innerHTML = `Your Back ID: ${userBankAccount.accountNumber}`;
  bankIdP.classList.add("py-1");
  userInfoDiv.append(bankIdP);
  let depositP = document.createElement("p");
  depositP.innerHTML = `Your First Deposit: $${userBankAccount.initialDeposit}`;
  depositP.classList.add("py-1");
  userInfoDiv.append(depositP);

  let balanceSection = document.createElement("div");
  balanceSection.classList.add("d-flex", "bg-danger", "py-1", "py-md-2");
  let balanceP = document.createElement("p");
  balanceP.classList.add("col-8", "text-left", "rem1p5");
  balanceP.innerHTML = "Available Balance";
  balanceSection.append(balanceP);
  let amountP = document.createElement("p");
  amountP.classList.add("col-4", "text-right", "rem1p5");
  amountP.innerHTML = `$${userBankAccount.money}`;
  balanceSection.append(amountP);

  let menuSection = document.createElement("div");
  menuSection.classList.add("d-flex", "justify-content-center", "flex-wrap", "text-center", "py-3", "mx-0");

  let buttonSection1 = document.createElement("div");
  buttonSection1.classList.add("col-lg-4", "col-12", "py-1", "py-md-3", "px-0", "px-md-1");
  let withdrawalDiv = document.createElement("div");
  withdrawalDiv.classList.add("bg-blue", "hover", "p-3");
  let withdrawalH5 = document.createElement("h5");
  withdrawalH5.innerHTML = "WITHDRAWAL";
  withdrawalDiv.append(withdrawalH5);
  let withdrawalIcon = document.createElement("i");
  withdrawalIcon.classList.add("fas", "fa-wallet", "fa-3x");
  withdrawalDiv.append(withdrawalIcon);
  buttonSection1.append(withdrawalDiv);
  buttonSection1.addEventListener("click", function(){
    const bankPage = document.getElementById("bankPage");
    if (bankPage !== null){
      const config = AppConfig();
      DisplayNone(config?.bankPage);
      DisplayBlock(config?.sidePage);
      config.sidePage?.append(withdrawalPage("Please Enter The Withdrawal Amount"))
      
    }
  });
  menuSection.append(buttonSection1);

  let buttonSection2 = document.createElement("div");
  buttonSection2.classList.add("col-lg-4", "col-12", "py-1", "py-md-3", "px-0", "px-md-1");
  let depositDiv = document.createElement("div");
  depositDiv.classList.add("bg-blue", "hover", "p-3");
  let depositH5 = document.createElement("h5");
  depositH5.innerHTML = "DEPOSIT";
  depositDiv.append(depositH5);
  let depositIcon = document.createElement("i");
  depositIcon.classList.add("fas", "fa-coins", "fa-3x");
  depositDiv.append(depositIcon);
  buttonSection2.append(depositDiv);
  menuSection.append(buttonSection2);

  let buttonSection3 = document.createElement("div");
  buttonSection3.classList.add("col-lg-4", "col-12", "py-1", "py-md-3", "px-0", "px-md-1");
  let comeBackLaterDiv = document.createElement("div");
  comeBackLaterDiv.classList.add("bg-blue", "hover", "p-3");
  let comeBackLaterH5 = document.createElement("h5");
  comeBackLaterH5.innerHTML = "COME BACK LATER";
  comeBackLaterDiv.append(comeBackLaterH5);
  let comeBackLaterIcon = document.createElement("i");
  comeBackLaterIcon.classList.add("fas", "fa-home", "fa-3x");
  comeBackLaterDiv.append(comeBackLaterIcon);
  buttonSection3.append(comeBackLaterDiv);
  menuSection.append(buttonSection3);


  mainContainer.append(userInfoDiv);
  mainContainer.append(balanceSection);
  mainContainer.append(menuSection);
  return mainContainer;
}

export default mainBankPage;