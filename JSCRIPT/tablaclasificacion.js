// Posición;
// PJ- Partidos jugados;
// V- Victorias,
// E- empates,
// D- Derrotas
// GF - goles marcados
// GC - goles encajados
// DG - diferencia de goles
// PTS - puntos

// console.log(clasificacion);
// let name = clasificacion.standings[0].table[0].team.name;
// console.log(name);

// // por qué sale tachado?

// let position = clasificacion.standings[0].table[0].position;
// console.log(position);
// console.log(clasificacion.standings[0].table[0].playedGames);
// console.log(clasificacion.standings[0].table[0].won);
// console.log(clasificacion.standings[0].table[0].lost);
// console.log(clasificacion.standings[0].table[0].goalsFor);
// console.log(clasificacion.standings[0].table[0].goalsAgainst);
// console.log(clasificacion.standings[0].table[0].goalDifference);
// console.log(clasificacion.standings[0].table[0].points);

// console.log(clasificacion.standings[0].table[1].team.name);
// console.log(clasificacion.standings[0].table[1].playedGames);
// console.log(clasificacion.standings[0].table[1].won);
// console.log(clasificacion.standings[0].table[1].lost);
// console.log(clasificacion.standings[0].table[1].goalsFor);
// console.log(clasificacion.standings[0].table[1].goalsAgainst);
// console.log(clasificacion.standings[0].table[1].goalDifference);
// console.log(clasificacion.standings[0].table[1].points);

//  imagenLocal[i]).team.crestUrl;

// let datosclasif = clasificacion.standings[0].table;
// console.log(datosclasif);

function getData() {
  const url = "https://api.football-data.org/v2/competitions/2014/standings";
  fetch(url, {
    method: "GET",
    headers: {
      "X-Auth-Token": "f6790e7021944633b908e9e636b09c95",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      // - hasta aquí tenemos lo que conseguimos con el POSTMAN
    })
    .then((data) => {
      let clasificacion = data.standings[0].table;
      console.log(data);
      crear_tabla2(clasificacion);
    })

    .catch((error) => {
      alert("Algo no ha salido bien");
      console.log(error);
    });
}
getData();

function crear_tabla2(clasif) {
  let tablebody = document.getElementById("tableBody");

  for (let i = 0; i < clasif.length; i++) {
    let row = document.createElement("tr");

    let position = document.createElement("p");
    position.innerHTML = clasif[i].position;

    let played = document.createElement("p");
    played.innerHTML = clasif[i].playedGames;

    let victorys = document.createElement("p");
    victorys.innerHTML = clasif[i].won;

    let lost = document.createElement("p");
    lost.innerHTML = clasif[i].lost;

    let goalsFor = document.createElement("p");
    goalsFor.innerHTML = clasif[i].goalsFor;

    let goalsAgainst = document.createElement("p");
    goalsAgainst.innerHTML = clasif[i].goalsAgainst;

    let goalDiff = document.createElement("p");
    goalDiff.innerHTML = clasif[i].goalDifference;

    let points = document.createElement("p");
    points.innerHTML = clasif[i].points;

    let datostabla = [
      position,
      played,
      victorys,
      lost,
      goalsFor,
      goalsAgainst,
      goalDiff,
      points,
    ];

    for (let ii = 0; ii < datostabla.length; ii++) {
      let column = document.createElement("td");
      column.append(datostabla[ii]);
      row.append(column);
    }
    tablebody.append(row);
  }
}

// crear_tabla2(clasificacion);
