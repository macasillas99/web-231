/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Maxine Casillas
      Date:   February 8, 2026

      Filename: project03-01.js
*/





 
// Collection of menu item checkboxes
let menuItems = document.getElementsByClassName("menuItem");

// Add a click event listener to each menu item
for (let i = 0; i < menuItems.length; i++) {
   menuItems[i].addEventListener("click", calcTotal);
}

// Calculate the total cost of the selected menu items
function calcTotal() {
   let orderTotal = 0;

   for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].checked) {
         orderTotal += Number(menuItems[i].value);
      }
   }

   document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }