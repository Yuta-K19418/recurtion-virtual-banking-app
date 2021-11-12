import AppConfig from "./appConfig";
import BankAccount from "./clssses/BankAccount";
import CreateInitialPage from "./createInitialPage";
import DisplayBlock from "./displayBlock";
import DisplayNone from "./displayNone";
import mainBankPage from "./mainBankPage";

CreateInitialPage();

const config = AppConfig();

function getRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

const InitializeUserAccount = () => {
  
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
  DisplayNone(config.initialForm);

  // 2ページ目を呼び出す
  DisplayBlock(config.bankPage);
  config.bankPage?.append(mainBankPage(userBankAccount));
}

export default InitializeUserAccount;


