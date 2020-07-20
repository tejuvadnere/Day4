//qs.3

shoppingList = ["Apple", "Bada Apple", "Chotta Apple", "Dhaansu Apple"];
shoppingList.push("Elephant Jaisa Apple");
console.log("shoppingList:", shoppingList);

shoppingBasket = [
  "Ratlami Sev",
  "Ujjaini Sev",
  "Laung Sev",
  ...shoppingList,
  "Hing Sev",
  "Lahsun Sev",
];
shoppingBasket.push("Dal Sev");

console.log("shoppingBasket:", shoppingBasket);