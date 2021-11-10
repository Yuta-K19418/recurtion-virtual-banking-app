import BankAccount from "./clssses/BankAccount";

const config = {
  initialForm: document.getElementById('initial-form'),
  bankPage: document.getElementById('bankPage'),
};


function getRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

function initializeUserAccount(){
  const form = document.getElementById("bank-form");

  let userBankAccount = new BankAccount(
    form!.querySelectorAll<HTMLInputElement>(`input[name="userFirstName"]`)[0].value,
    form!.querySelectorAll<HTMLInputElement>(`input[name="userLastName"]`)[0].value,
    form!.querySelectorAll<HTMLInputElement>(`input[name="userEmail"]`)[0].value,
    form!.querySelectorAll<HTMLInputElement>(`input[name="userAccountType"]:checked`)[0].value,
    getRandomInteger(1, Math.pow(10, 8)),
    parseInt(form!.querySelectorAll<HTMLInputElement>(`input[name="userFirstDeposit"]`)[0].value)
  );

  // ページの非表示
  config.initialForm?.classList.add("d-none");
}