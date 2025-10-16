import { series } from "./data";

const seriesTable: HTMLElement = document.getElementById("series")!;

function mirarserie() {
    let serieRows: string = "";
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