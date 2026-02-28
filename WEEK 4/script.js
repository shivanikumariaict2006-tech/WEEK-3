let students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents(data = students) {
    const table = document.getElementById("studentTable");
    table.innerHTML = "";

    data.forEach((student, index) => {
        table.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.course}</td>
                <td>
                    <button onclick="editStudent(${index})">Edit</button>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function addStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;

    if (name === "" || age === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    students.push({ name, age, course });
    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function editStudent(index) {
    const student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("course").value = student.course;

    deleteStudent(index);
}

function searchStudent() {
    const searchValue = document.getElementById("search").value.toLowerCase();

    const filtered = students.filter(student =>
        student.name.toLowerCase().includes(searchValue)
    );

    displayStudents(filtered);
}

displayStudents();
