import { createTableContent } from "./createTableContent.js";
export function updateIngredientsTable(tableContentElement, numberOfPersonsElement, amountPersons, ingredients) {
    numberOfPersonsElement.innerHTML =
        amountPersons > 1 ? amountPersons.toString() + " Personen" : "eine Person";
    tableContentElement.innerHTML = createTableContent(ingredients, amountPersons);
}
