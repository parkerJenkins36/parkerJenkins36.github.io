const person = [];
const salaries = [];
const addSalary = document.getElementById("addSalary");
const modifySalary = document.getElementById("modifySalary");
const displayResults = document.getElementById("displayResults");
const displaySalary = document.getElementById("displaySalary"); 
addSalary.addEventListener("click",addSalary());
function addSalary(){
const name = document.getElementById("name").value;
const salary = document.getElementById("salary").value;
if (name === "" || salary === "" || isNaN(parseFloat(salary))) {
    alert("Please enter a valid name and salary.");
    return;
}
   person.push(name);
   salaries.push(parseFloat(salary));
   document.getElementById("name").value = "";
   document.getElementById("salary").value = "";

   document.getElementById("name").focus();
}


const selectWorkerDropdown = document.getElementById("selectWorker");
selectEmployeeDropdown.innerHTML = "";
const defaultOption = document.createElement("option");
defaultOption.text = "Select an employee";
selectEmployeeDropdown.appendChild(defaultOption);
person.forEach((name, index) => {
    const option = document.createElement("option");
    option.value = index; 
    option.text = name;
    selectWorkerDropdown.appendChild(option);
});

const newSalaryInput = document.getElementById("modifySalary");
newSalaryInput.addEventListener("click", modifySalary());
function modifySalary() {
    const selectedEmployee = document.getElementById("selectWorker").selectedIndex;
    if (selectedEmployee === -1) {
        alert("Please select an employee to modify.");
        return;
    }
    const newSalary = parseFloat(document.getElementById("newSalary").value);
    if (isNaN(newSalary) || newSalary <= 0) {
        alert("Please enter a valid salary value.");
        return;
    }
    salaries[selectedEmployee] = newSalary;
    document.getElementById("selectWorker").selectedIndex = -1;
    document.getElementById("newSalary").value = "";
    alert("Salary modified successfully.");
}
const displayResults = document.getElementById("displayResults");
displayResults.addEventListener("click", displayResults());
function displayResults() {
    const totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);
    const averageSalary = totalSalary / salaries.length;
    const highestSalary = Math.max(...salaries);
    const resultsDiv = document.getElementById("results");
    const content = `
        <h3>Results</h3>
        <p>Average Salary: $${averageSalary.toFixed(2)}</p>
        <p>Highest Salary: $${highestSalary.toFixed(2)}</p>
    `;
    resultsDiv.innerHTML = content;
}
function displaySalary() {
    const results = document.getElementById("results_table");
    results.innerHTML = "";
    const headerRow = results.insertRow();
    const WorkerName = headerRow.insertCell();
    WorkerName.textContent = "Name";
    const salaryHeader = headerRow.insertCell();
    salaryHeader.textContent = "Salary";

    for (let i = 0; i < person.length; i++) {
        const row = results.insertRow();
        const nameCell = row.insertCell();
        nameCell.textContent = person[i];
        const salaryCell = row.insertCell();
        salaryCell.textContent = `$${salaries[i].toFixed(2)}`;
    }
}