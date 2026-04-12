const $operationDiv = document.querySelector(".operation");
const $operationResult = document.querySelector(".operation-result");

let operation = "";

function handleInput(value) {
  let result = "";

  switch (value) {
    case "C":
      operation = "";
      $operationDiv.textContent = "";
      $operationResult.textContent = "";
      break;
    case "X":
      operation = operation.slice(0, -1);
      $operationDiv.textContent = operation;
      break;
    case "=":
      if (operation === "") return;

      try {
        result = eval(operation);
        operation = result.toString();

        $operationDiv.textContent = operation;
        $operationResult.textContent = result;
      } catch {
        $operationResult.textContent = "SYNTAX ERROR";
      }

      break;
    default:
      $operationResult.textContent = "";

      operation += value;
      $operationDiv.textContent = operation;
      break;
  }
}

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn")) {
    const value = e.target.textContent;
    handleInput(value);
  }
});

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if ("0123456789+-*/.".includes(key)) {
    handleInput(key);
  } else if (key === "Enter") {
    handleInput("=");
  } else if (key === "Backspace") {
    handleInput("X");
  } else if (key === "Escape") {
    handleInput("C");
  }
});
