import { createTableContent } from "../../tableFunctions";

const testIngredients = [
  { amount: "0.5", name: "Milch", unit: "l" },
  { amount: "4", name: "Eier", unit: "Stk" },
  { amount: "300", name: "Mehl", unit: "g" },
  { amount: "2", name: "Öl", unit: "EL" },
  { amount: "1", name: "Salz", unit: "TL" },
  { amount: "2", name: "Zucker", unit: "EL" },
];

test("return the table body as expected", () => {
  const tableContent = createTableContent(testIngredients, 5);
  expect(tableContent).toEqual(
    '<tr><td>Milch</td><td class="ingredients-table-amount"><span>0.625</span> l</td></tr><tr><td>Eier</td><td class="ingredients-table-amount"><span>5</span> Stk</td></tr><tr><td>Mehl</td><td class="ingredients-table-amount"><span>375</span> g</td></tr><tr><td>Öl</td><td class="ingredients-table-amount"><span>2.5</span> EL</td></tr><tr><td>Salz</td><td class="ingredients-table-amount"><span>1.25</span> TL</td></tr><tr><td>Zucker</td><td class="ingredients-table-amount"><span>2.5</span> EL</td></tr>'
  );
});
