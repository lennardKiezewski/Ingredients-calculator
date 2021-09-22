import { Ingredient } from "../types";

export function updateIngredientsTable(
  tableContentElement: HTMLElement,
  numberOfPersonsElement: HTMLElement,
  amountPersons: number,
  ingredients: Ingredient[]
) {
  numberOfPersonsElement.innerHTML =
    amountPersons > 1 ? amountPersons.toString() + " Personen" : "eine Person";

  tableContentElement.innerHTML = createTableContent(
    ingredients,
    amountPersons
  );
}

export function createTableContent(
  ingredients: Ingredient[],
  amountPeople: number
): string {
  let content = "";
  ingredients.forEach((ingredient) => {
    content = content + `<tr>`;
    content = content + `<td>${ingredient.name}</td>`;
    content =
      content +
      `<td class="ingredients-table-amount"><span>${
        (parseFloat(ingredient.amount) / 4) * amountPeople
      }</span> ${ingredient.unit}</td>`;
    content += `</tr>`;
  });
  return content;
}
