class Student {
  // Constructor to initialize the student object
  constructor(name, roll, dept) {
    this.name = name
    this.roll= roll
    this.dept = dept
  }
}

function parseStudents() {


  const input = document.getElementById("dataInput").value.trim().split("\n");

  // const input = userinput.trim().split("\n"); // changes
  
  // Validate input
  
  // Extracting names, rolls, and departments from the input
  
  

  let students = []; // Array to hold student objects

  //Populate the students array with student objects

  return students;
}

function populateTable() {
  const students = parseStudents;
  const tbody = document.querySelector("#outputTable tbody");
  // Logic to polulate the table with student data
}

function deleteRow(button) {
  //Logic to delete a row from the table
}

parseStudents()
