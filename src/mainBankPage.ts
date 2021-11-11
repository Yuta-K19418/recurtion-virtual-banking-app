import BankAccount from "./clssses/BankAccount";

const mainBankPage = (userBankAccount: BankAccount) => {
  let mainContainer = document.createElement("div");
  mainContainer.classList.add("bg-green", "col-12", "text-center", "pt-md-4", "px-4", "pt-1", "text-white");

  let userInfoDiv = document.createElement("div");
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

  mainContainer.append(userInfoDiv);
  return mainContainer;
}

export default mainBankPage;