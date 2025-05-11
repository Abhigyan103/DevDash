class Student {
  constructor(name, roll, department) {
    this.name = name;
    this.roll = roll;
    this.department = department;
  }
}

function parseStudents() {
  const input = document.getElementById("dataInput").value.trim().split("\n");
  // Validate input
  if (input.length === 0) {
    alert("Please enter student data.");
    return;
  }
  // Check if each line has the correct number of fields
  const isValid = input.every((line) => {
    const fields = line.split(",");
    return fields.length === 3;
  });
  if (!isValid) { 
    alert("Each line must contain exactly 3 fields: name, roll, and department.");
    return;
  }
  // Extracting names, rolls, and departments from the input
  const names = [];
  const rolls = [];
  const departments = [];
  input.forEach((line) => {
    const [name, roll, department] = line.split(" ").map((item) => item.trim());
    if (name && roll && department) {
      names.push(name);
      rolls.push(roll);
      departments.push(department);
    }
  });

  let students = []; // Array to hold student objects
  for (let i = 0; i < names.length; i++) {
    const student = new Student(names[i], rolls[i], departments[i]);
    students.push(student);
  }

  //Populate the students array with student objects
  const tbody = document.querySelector("#outputTable tbody");
  tbody.innerHTML = ""; // Clear previous data
  students.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.roll}</td>
      <td>${student.department}</td>
      <td><button onclick="deleteRow(this)">Delete</button></td>
    `;
    tbody.appendChild(row);
  });
  // Clear the input field

  return students;
}

function populateTable() {
  const students = parseStudents;
  const tbody = document.querySelector("#outputTable tbody");
  // Logic to polulate the table with student data
  tbody.innerHTML = ""; 
  students.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.roll}</td>
      <td>${student.department}</td>
      <td><button onclick="deleteRow(this)">Delete</button></td>
    `;
    tbody.appendChild(row);
  });
}

function deleteRow(button) {
  //Logic to delete a row from the table
}
