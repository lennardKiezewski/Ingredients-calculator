import { updateIngredientsTable } from "./functions/tableFunctions.js";
import { getIngredients } from "./functions/getIngredients.js";

let addElement = document.getElementById("increment");
let removeElement = document.getElementById("decrement");
let numberOfPersonsElement = document.getElementById("number");
let tableContentElement = document.getElementById("table-content");

const ingredients = getIngredients();
let amountPersons = 4;

/**
 * Initialize table of Ingredients
 */
if (tableContentElement != null && numberOfPersonsElement) {
  updateIngredientsTable(
    tableContentElement,
    numberOfPersonsElement,
    amountPersons,
    ingredients
  );
}

if (addElement != null) {
  addElement.addEventListener("click", function () {
    amountPersons += 1;
    if (tableContentElement != null && numberOfPersonsElement)
      updateIngredientsTable(
        tableContentElement,
        numberOfPersonsElement,
        amountPersons,
        ingredients
      );
  });
}

if (removeElement != null) {
  removeElement.addEventListener("click", function () {
    if (amountPersons > 1) {
      amountPersons -= 1;
      if (tableContentElement != null && numberOfPersonsElement)
        updateIngredientsTable(
          tableContentElement,
          numberOfPersonsElement,
          amountPersons,
          ingredients
        );
    }
  });
}
