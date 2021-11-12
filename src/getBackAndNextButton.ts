function GetBackAndNextButton(backString: string, nextString: string): HTMLElement {
  let mainContainer = document.createElement("div");

  let subContainer = document.createElement("div");
  subContainer.classList.add("d-flex", "justify-content-between");
  let backButtonDiv = document.createElement("div");
  backButtonDiv.classList.add("col-6", "pl-0");
  let backButton = document.createElement("button");
  backButton.classList.add("btn", "btn-outline-primary", "col-12");
  backButton.innerHTML = backString;
  backButtonDiv.append(backButton);

  let nextButtonDiv = document.createElement("div");
  nextButtonDiv.classList.add("col-6", "pr-0");
  let nextButton = document.createElement("button");
  nextButton.classList.add("btn", "btn-primary", "col-12");
  nextButton.innerHTML = nextString;
  nextButtonDiv.append(nextButton);

  subContainer.append(backButtonDiv, nextButtonDiv);
  mainContainer.append(subContainer);
  return mainContainer;
}

export default GetBackAndNextButton;