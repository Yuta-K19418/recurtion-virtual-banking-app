import InitializeUserAccount from "./app";

const CreateInitialPage = () => {
  let initialPage = document.getElementById("initialPage");
  initialPage?.classList.add("vh-100", "bg-dark", "d-flex", "flex-column", "justify-content-center", "align-items-center");
  
  let div1 = document.createElement("div");
  div1.classList.add("d-flex", "align-items-center", "col-md-7", "col-10");
  
  let div2 = document.createElement("div");
  div2.id = "initial-form";
  div2.classList.add("bg-white", "col-12", "text-center", "p-4");

  let titleH2 = document.createElement("h2");
  titleH2.innerHTML = "Please type your information below";
  titleH2.classList.add("pb-3");
  div2.append(titleH2);


  let formSection = document.createElement("form");
  formSection.id = "bank-form";
  formSection.addEventListener("submit", function(event){
    InitializeUserAccount();
    event.preventDefault();
  });
  formSection.classList.add("form");

  let emailDiv = document.createElement("div");
  emailDiv.classList.add("form-group");
  let emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "userEmail";
  emailInput.placeholder = "Email";
  emailInput.classList.add("form-control");
  emailInput.required =true;
  emailDiv.append(emailInput);
  formSection.append(emailDiv);

  let userFirstNameDiv = document.createElement("div");
  userFirstNameDiv.classList.add("form-group");
  let userFirstNameInput = document.createElement("input");
  userFirstNameInput.type = "text";
  userFirstNameInput.name = "userFirstName";
  userFirstNameInput.placeholder = "First name";
  userFirstNameInput.classList.add("form-control");
  userFirstNameInput.required =true;
  userFirstNameDiv.append(userFirstNameInput);
  formSection.append(userFirstNameDiv);

  let userLastNameDiv = document.createElement("div");
  userLastNameDiv.classList.add("form-group");
  let userLastNameInput = document.createElement("input");
  userLastNameInput.type = "text";
  userLastNameInput.name = "userLastName";
  userLastNameInput.placeholder = "Last name";
  userLastNameInput.classList.add("form-control");
  userLastNameInput.required =true;
  userLastNameDiv.append(userLastNameInput);
  formSection.append(userLastNameDiv);

  let userFirstDepositDiv = document.createElement("div");
  userFirstDepositDiv.classList.add("form-group");
  let userFirstDepositInput = document.createElement("input");
  userFirstDepositInput.type = "text";
  userFirstDepositInput.name = "userFirstDeposit";
  userFirstDepositInput.placeholder = "Enter your first deposit";
  userFirstDepositInput.classList.add("form-control");
  userFirstDepositInput.required =true;
  userFirstDepositDiv.append(userFirstDepositInput);
  formSection.append(userFirstDepositDiv);

  let userAccountTypeSection = document.createElement("div");
  userAccountTypeSection.classList.add("form-group");
  let userAccountTypeDiv1 = document.createElement("div");
  userAccountTypeDiv1.classList.add("form-check");
  let userAccountTypeInput1 = document.createElement("input");
  userAccountTypeInput1.classList.add("form-check-input");
  userAccountTypeInput1.id = "userAccountType1";
  userAccountTypeInput1.type = "radio";
  userAccountTypeInput1.name = "userAccountType";
  userAccountTypeInput1.value = "savings";
  userAccountTypeInput1.checked = true;
  userAccountTypeInput1.required = true;
  userAccountTypeDiv1.append(userAccountTypeInput1);
  let userAccountTypeLabel1 = document.createElement("label");
  userAccountTypeLabel1.classList.add("form-check-label");
  userAccountTypeLabel1.htmlFor = "userAccountType1";
  userAccountTypeLabel1.innerHTML = "Savings";
  userAccountTypeDiv1.append(userAccountTypeLabel1);

  let userAccountTypeDiv2 = document.createElement("div");
  userAccountTypeDiv2.classList.add("form-check");
  let userAccountTypeInput2 = document.createElement("input");
  userAccountTypeInput2.classList.add("form-check-input");
  userAccountTypeInput2.id = "userAccountType2";
  userAccountTypeInput2.type = "radio";
  userAccountTypeInput2.name = "userAccountType";
  userAccountTypeInput2.value = "checkings";
  userAccountTypeInput2.checked = true;
  userAccountTypeInput2.required = true;
  userAccountTypeDiv2.append(userAccountTypeInput2);
  let userAccountTypeLabel2 = document.createElement("label");
  userAccountTypeLabel2.classList.add("form-check-label");
  userAccountTypeLabel2.htmlFor = "userAccountType2";
  userAccountTypeLabel2.innerHTML = "Checkings"; 
  userAccountTypeDiv2.append(userAccountTypeLabel2);

  userAccountTypeSection.append(userAccountTypeDiv1);
  userAccountTypeSection.append(userAccountTypeDiv2);
  formSection.append(userAccountTypeSection);
  
  let submitButton = document.createElement("button");
  submitButton.classList.add("btn", "btn-primary", "col-12");
  submitButton.innerHTML = "Submit";
  submitButton.type = "submit";
  formSection.append(submitButton);

  div2.append(formSection);
  div1.append(div2);
  initialPage?.append(div1);

  let bankPageDiv = document.createElement("div");
  bankPageDiv.id = "bankPage";
  initialPage?.append(bankPageDiv);
}

export default CreateInitialPage;