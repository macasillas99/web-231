/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Maxine Casillas
      Date:   01/25/2026

      Filename: project02-02.js
 */
// Function to verify that all form fields have been completed
function verifyForm() {
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let phone = document.getElementById("phone").value;

   (name && email && phone) ? window.alert("Thank you!") : window.alert("Please fill in all fields");
}

// Run verifyForm() when the user clicks the Submit button
document.getElementById("submit").addEventListener("click", verifyForm);
