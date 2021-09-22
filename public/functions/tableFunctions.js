export function updateIngredientsTable(
  tableContentElement,
  numberOfPersonsElement,
  amountPersons,
  ingredients
) {
  numberOfPersonsElement.innerHTML =
    amountPersons > 1 ? amountPersons.toString() + " Personen" : "eine Person";
  tableContentElement.innerHTML = createTableContent(
    ingredients,
    amountPersons
  );
}
export function createTableContent(ingredients, amountPeople) {
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
