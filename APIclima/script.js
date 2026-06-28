const CIDADES = {
  "-28.435852": { nome: "Tubarão",       classe: "card-tubarao"   },
  "-27.592268": { nome: "Florianópolis", classe: "card-floripa"   },
  "-26.326889": { nome: "Joinville",     classe: "card-joinville" },
  "-27.803164": { nome: "Lages",         classe: "card-lages"     },
};

let aberto = null;

function formatarHorario(isoString) {
  if (!isoString) return "—";
  return isoString.split("T")[1]?.slice(0, 5) ?? "—";
}

function formatarData(isoString) {
  if (!isoString) return "";
  const [data] = isoString.split("T");
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

function toggle(id, btnEl, cidade, temperatura, horario, data) {
  const painel = document.getElementById("painel-detalhe");

  if (aberto === id) {
    painel.innerHTML = "";
    document.querySelector(".card.aberto")?.classList.remove("aberto");
    aberto = null;
    return;
  }

  document.querySelector(".card.aberto")?.classList.remove("aberto");
  btnEl.classList.add("aberto");
  aberto = id;

  painel.innerHTML = `
    <div class="detalhe visivel">
      <div class="detalhe-titulo">${cidade}</div>
      <div class="detalhe-linha">
        <span>Temperatura</span>
        <span>${temperatura}°C</span>
      </div>
      <div class="detalhe-linha">
        <span>Horário da leitura</span>
        <span>${horario}</span>
      </div>
      <div class="detalhe-linha">
        <span>Data</span>
        <span>${data}</span>
      </div>
    </div>
  `;
}

function renderizarCards(resultados) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  resultados.forEach(({ id, cidade, temperatura, horario, data, classe }) => {
    const btn = document.createElement("button");
    btn.className = `card ${classe}`;
    btn.setAttribute("aria-label", `Ver detalhes de ${cidade}`);
    btn.innerHTML = `
      <span class="card-chevron">&#8964;</span>
      <div class="card-label">${cidade}</div>
      <div class="card-temp">${temperatura}<span class="card-unit">°C</span></div>
      <div class="card-time">${horario}</div>
    `;

    btn.addEventListener("click", () => {
      toggle(id, btn, cidade, temperatura, horario, data);
    });

    grid.appendChild(btn);
  });
}

async function buscarClima() {
  try {
    const resposta = await fetch(
      "https://api.open-meteo.com/v1/forecast" +
      "?latitude=-28.4667,-27.5967,-26.3044,-27.8161" +
      "&longitude=-49.0069,-48.5492,-48.8456,-50.3261" +
      "&current=temperature_2m" +
      "&timezone=auto" +
      "&forecast_days=1"
    );

    if (!resposta.ok) {
      throw new Error(`Erro ${resposta.status}`);
    }

    const dados = await resposta.json();
    const localizacoes = Array.isArray(dados) ? dados : [dados];

    const resultados = localizacoes.map((clima, i) => {
      const latKey = String(clima.latitude);
      const config = CIDADES[latKey];
      const cidade = config?.nome ?? `Lat ${clima.latitude}`;
      const temperatura = Math.round(clima.current?.temperature_2m ?? 0);
      const horario = formatarHorario(clima.current?.time);
      const data = formatarData(clima.current?.time);
      const classe = config?.classe ?? "";

      return { id: `cidade-${i}`, cidade, temperatura, horario, data, classe };
    });

    renderizarCards(resultados);

    const agora = new Date();
    document.getElementById("ultima-atualizacao").textContent =
      `atualizado às ${agora.getHours().toString().padStart(2, "0")}:${agora.getMinutes().toString().padStart(2, "0")}`;
  } catch (erro) {
    document.getElementById("grid").innerHTML =
      `<p class="status">não foi possível carregar os dados.<br>${erro.message}</p>`;
    console.error("Erro ao buscar clima:", erro);
  }
}

document.addEventListener("DOMContentLoaded", buscarClima);
