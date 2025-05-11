class Student {
  constructor(name, roll, department) {
    this.name = name;
    this.roll = roll;
    this.department = department;
  }
}

function parseStudents() {
  const input = document
    .getElementById('dataInput')
    .value.trim()
    .split('\n')
    .map((data) => data.trim().split(' '));

  console.log('Hi');
  console.log(input);

  const checkName = (name) => {
    return typeof name == 'string';
  };

  const checkRoll = (input) => {
    const parsed = parseInt(input, 10);
    return !isNaN(parsed) && input === parsed.toString();
  };

  const checkDepartment = (input) => {
    const departments = ['CSE', 'IT', 'ECE', 'ME', 'CIVIL', 'EEE'];
    return departments.includes(input);
  };

  let students = [];
  const studentNumbers = input[0].length;
  const isDataOk = [input[1], input[2]].every(
    ({ length }) => length === studentNumbers
  );

  if (isDataOk) {
    for (let i = 0; i < input[0].length; i++) {
      const isStudentDataOk =
        checkName(input[0][i]) &&
        checkRoll(input[1][i]) &&
        checkDepartment(input[2][i]);

      if (isStudentDataOk)
        students.push(new Student(input[0][i], input[1][i], input[2][i]));
      else alert('Data input is Wrong');
    }
  } else {
    alert('Wrong number of Data inputs.');
  }

  console.log(students);

  populateTable(students);
  return students;
}

function populateTable(studentsList) {
  const students = studentsList;
  const container = document.querySelector('#outputTable tbody');
  container.innerHTML = '';
  let HTML = [];

  for (let i = 0; i < students.length; i++) {
    let row = container.insertRow(i);
    row.insertCell(0).innerHTML = students[i].name;
    row.insertCell(1).innerHTML = students[i].roll;
    row.insertCell(2).innerHTML = students[i].department;
    row.insertCell(3);
  }

  HTML.forEach((el, i) => {
    const fragment = document.createRange().createContextualFragment(el);
    console.log(fragment.children[0]);
    container.appendChild(fragment.children[0]);
  });
}

function deleteRow(button) {
  //Logic to delete a row from the table
}

setTimeout(3000, populateTable);
