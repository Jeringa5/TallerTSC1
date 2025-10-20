import { series } from "./data.js";

const seriesTable: HTMLElement = document.getElementById("series")!;
const avgEl: HTMLElement = document.getElementById("seasons-average")!;
const detailCard = document.getElementById("series-detail") as HTMLElement;

function mirarserie() {
  let serieRows: string = "";
  series.forEach((serie) => {
      serieRows += `
      <tr>
          <td>${serie.id}</td>
          <td><a href="#" class="serie-link" data-id="${serie.id}">
          ${serie.name}
           </a></td>
          <td>${serie.channel}</td>
          <td>${serie.seasons}</td>
      </tr>
      `;
  });
  seriesTable.innerHTML += serieRows;
}

function consultarPromedio(): number {
  if (series.length === 0) return 0;
  const totalSeasons = series.reduce((acc, s) => acc + s.seasons, 0);
  return totalSeasons / series.length;
}

function mostrarPromedio(): void {
  const promedio = consultarPromedio();
  avgEl.textContent = `Seasons average: ${promedio.toFixed(2)}`;
}

function renderDetail(id: number): void {
  const s = series.find((x) => x.id === id);
  if (!s) return;

  detailCard.style.display = "";
  detailCard.innerHTML = `
    <img src="${s.img}" alt="${s.name}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${s.name}</h5>
      <p class="card-text">${s.description}</p>
      <a href="${s.link}" target="_blank" rel="noopener noreferrer" class="card-link">
        ${s.link}
      </a>
    </div>
  `;
}

seriesTable.addEventListener("click", (ev) => {
  const target = ev.target as HTMLElement;
  const link = target.closest<HTMLAnchorElement>("a.serie-link");
  if (!link) return;
  ev.preventDefault();

  const id = Number(link.dataset.id);
  if (!Number.isNaN(id)) {
    renderDetail(id);
  }
});

mirarserie();
mostrarPromedio();