import { updateIngredientsTable } from "../../tableFunctions";

const testIngredients = [
  { amount: "0.5", name: "Milch", unit: "l" },
  { amount: "4", name: "Eier", unit: "Stk" },
  { amount: "300", name: "Mehl", unit: "g" },
  { amount: "2", name: "Öl", unit: "EL" },
  { amount: "1", name: "Salz", unit: "TL" },
  { amount: "2", name: "Zucker", unit: "EL" },
];

const initialDocumentBody = `<table class="center">
<thead>
    <tr>
        <th scope="col">
            <h2>Zutaten</h2>
        </th>
        <th scope="col">
            <div class="ingredients-amount-heading">
                <button class="button  decrement-button" id="decrement"><img src="assets/minus.svg"
                        alt="-" /></button>
                <div class="ingredients-amount-heading-text">Zutaten für <strong id='number'></strong>
                </div>
                <button class="button increment-button" id="increment"> <img src="assets/plus.svg"
                        alt="+" /></button>
            </div>
        </th>
    </tr>
</thead>
<tbody id="table-content">
</tbody>
</table>`;

test("changes html correctly after function is called", () => {
  document.body.innerHTML = initialDocumentBody;

  let numberOfPersonsElement = document.getElementById("number");
  let tableContentElement = document.getElementById("table-content");

  if (tableContentElement && numberOfPersonsElement) {
    updateIngredientsTable(
      tableContentElement,
      numberOfPersonsElement,
      5,
      testIngredients
    );
    expect(numberOfPersonsElement.innerHTML).toBe("5 Personen");
    expect(tableContentElement.innerHTML).toBe(
      '<tr><td>Milch</td><td class="ingredients-table-amount"><span>0.625</span> l</td></tr><tr><td>Eier</td><td class="ingredients-table-amount"><span>5</span> Stk</td></tr><tr><td>Mehl</td><td class="ingredients-table-amount"><span>375</span> g</td></tr><tr><td>Öl</td><td class="ingredients-table-amount"><span>2.5</span> EL</td></tr><tr><td>Salz</td><td class="ingredients-table-amount"><span>1.25</span> TL</td></tr><tr><td>Zucker</td><td class="ingredients-table-amount"><span>2.5</span> EL</td></tr>'
    );
  }
});
