function add() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var data = [firstName, lastName, email, age];
    var studentTable = document.getElementById("student-table");
    var tableRow = document.createElement("tr");
    for (let count = 0; count < data.length ; count++) {
        var tableData = document.createElement("td");
        tableData.innerHTML = data[count];
        tableRow.appendChild(tableData);
    }
    console.log(tableRow);
    studentTable.appendChild(tableRow);
}