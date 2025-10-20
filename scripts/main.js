import { series } from "./data.js";
const seriesTable = document.getElementById("series");
const avgEl = document.getElementById("seasons-average");
function mirarserie() {
    let serieRows = "";
    series.forEach((serie) => {
        serieRows += `
      <tr>
          <td>${serie.id}</td>
          <td><a href="${serie.link}" target="_blank">${serie.name}</a></td>
          <td>${serie.channel}</td>
          <td>${serie.seasons}</td>
      </tr>
      `;
    });
    seriesTable.innerHTML += serieRows;
}
function consultarPromedio() {
    if (series.length === 0)
        return 0;
    const totalSeasons = series.reduce((acc, s) => acc + s.seasons, 0);
    return totalSeasons / series.length;
}
function mostrarPromedio() {
    const promedio = consultarPromedio();
    avgEl.textContent = `Seasons average: ${promedio.toFixed(2)}`;
}
mirarserie();
mostrarPromedio();
