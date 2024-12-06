
const pointsSaturday = [18, 15, 13, 10, 8, 6, 4, 3, 2, 1];
const pointsSunday = [7, 6, 5, 4, 3, 2, 1];
const pointsPowerStage = [5, 4, 3, 2, 1];

const drivers = [];

const form = document.getElementById("add-driver-form");
const resultsTableBody = document.getElementById("results-table-body");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("driver-name").value;
  const saturdayPosition = parseInt(document.getElementById("saturday-position").value, 10);
  const sundayPosition = parseInt(document.getElementById("sunday-position").value, 10);
  const powerStagePosition = parseInt(document.getElementById("power-stage-position").value, 10);

  const saturdayPoints = pointsSaturday[saturdayPosition - 1] || 0;
  const sundayPoints = pointsSunday[sundayPosition - 1] || 0;
  const powerStagePoints = pointsPowerStage[powerStagePosition - 1] || 0;

  const totalPoints = saturdayPoints + sundayPoints + powerStagePoints;

  drivers.push({ name, saturdayPoints, sundayPoints, powerStagePoints, totalPoints });

  renderTable();
  form.reset();
});

function renderTable() {
  resultsTableBody.innerHTML = "";
  drivers.sort((a, b) => b.totalPoints - a.totalPoints).forEach(driver => {
    const row = `
      <tr>
        <td>${driver.name}</td>
        <td>${driver.saturdayPoints}</td>
        <td>${driver.sundayPoints}</td>
        <td>${driver.powerStagePoints}</td>
        <td>${driver.totalPoints}</td>
      </tr>
    `;
    resultsTableBody.innerHTML += row;
  });
}
