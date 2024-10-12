// Get the marksheet div element
const marksheetDiv = document.getElementById("marksheet");

// Function to create the marksheet
function createMarksheet() {
  // Get student name and marks from user input
  const studentName = prompt("Enter student name:");
  const mathsMarks = parseInt(prompt("Enter maths marks:"));
  const scienceMarks = parseInt(prompt("Enter science marks:"));
  const englishMarks = parseInt(prompt("Enter english marks:"));

  // Calculate total marks and percentage
  const totalMarks = mathsMarks + scienceMarks + englishMarks;
  const percentage = (totalMarks / 300) * 100;

  // Create the marksheet table
  const table = document.createElement("table");
  table.border = "1";

  const tableBody = document.createElement("tbody");

  const row1 = document.createElement("tr");
  const cell1 = document.createElement("td");
  cell1.innerHTML = "Student Name:";
  const cell2 = document.createElement("td");
  cell2.innerHTML = studentName;
  row1.appendChild(cell1);
  row1.appendChild(cell2);
  tableBody.appendChild(row1);

  const row2 = document.createElement("tr");
  const cell3 = document.createElement("td");
  cell3.innerHTML = "Maths Marks:";
  const cell4 = document.createElement("td");
  cell4.innerHTML = mathsMarks;
  row2.appendChild(cell3);
  row2.appendChild(cell4);
  tableBody.appendChild(row2);

  const row3 = document.createElement("tr");
  const cell5 = document.createElement("td");
  cell5.innerHTML = "Science Marks:";
  const cell6 = document.createElement("td");
  cell6.innerHTML = scienceMarks;
  row3.appendChild(cell5);
  row3.appendChild(cell6);
  tableBody.appendChild(row3);

  const row4 = document.createElement("tr");
  const cell7 = document.createElement("td");
  cell7.innerHTML = "English Marks:";
  const cell8 = document.createElement("td");
  cell8.innerHTML = englishMarks;
  row4.appendChild(cell7);
  row4.appendChild(cell8);
  tableBody.appendChild(row4);

  const row5 = document.createElement("tr");
  const cell9 = document.createElement("td");
  cell9.innerHTML = "Total Marks:";
  const cell10 = document.createElement("td");
  cell10.innerHTML = totalMarks;
  row5.appendChild(cell9);
  row5.appendChild(cell10);
  tableBody.appendChild(row5);

  const row6 = document.createElement("tr");
  const cell11 = document.createElement("td");
  cell11.innerHTML = "Percentage:";
  const cell12 = document.createElement("td");
  cell12.innerHTML = percentage.toFixed(2) + "%";
  row6.appendChild(cell11);
  row6.appendChild(cell12);
  tableBody.appendChild(row6);

  table.appendChild(tableBody);
  marksheetDiv.appendChild(table);
}

// Call the createMarksheet function when the page loads
window.onload = createMarksheet;