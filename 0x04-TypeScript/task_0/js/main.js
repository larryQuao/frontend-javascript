var student1 = {
    firstName: "Jude",
    lastName: "Mansah",
    age: 28,
    location: "Amasaman"
};
var student2 = {
    firstName: "Emmanuel",
    lastName: "Asante",
    age: 30,
    location: "Accra"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var headerRow = document.createElement("tr");
var headers = ["First Name", "Location"];
headers.forEach(function (headerText) {
    var header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
});
table.appendChild(headerRow);
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);
