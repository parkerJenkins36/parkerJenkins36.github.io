const person = [];
const salaries = [];
document.getElementById("displaySalary").addEventListener("click", displaySalary);
document.getElementById("displayResults").addEventListener("click", displayResults);
document.getElementById("modifySalary").addEventListener("click", modifySalary);
document.getElementById("addSalary").addEventListener("click", addSalary);

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
const selectWorkerDropdown = document.getElementById("selectWorker");
selectWorkerDropdown.innerHTML = "";
const defaultOption = document.createElement("option");
defaultOption.text = "Select an employee";
selectWorkerDropdown.appendChild(defaultOption);
person.forEach((name, index) => {
    const option = document.createElement("option");
    option.value = index; 
    option.text = name;
    selectWorkerDropdown.appendChild(option);
});
}

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
    WorkerName.style.paddingRight = "20px"; 
    const salaryHeader = headerRow.insertCell();
    salaryHeader.textContent = "Salary";

    for (let i = 0; i < person.length; i++) {
        const row = results.insertRow();
        const nameCell = row.insertCell();
        nameCell.textContent = person[i];
        nameCell.style.paddingRight = "20px";
        const salaryCell = row.insertCell();
        salaryCell.textContent = `$${salaries[i].toFixed(2)}`;
    }
}