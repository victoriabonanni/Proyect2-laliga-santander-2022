// equipo local, equipo visitante, jornada-matchday, fecha partido-utcdate, resultado equipo local, resultado equipo visitante

// console.log(partidos);
// console.log(partidos.matches[0]);

// let equipolocal = partidos.matches[0].homeTeam.name;
// equipolocal = "CA Osasuna"
// console.log(equipolocal);

// let equipovisitante = (partidos.matches[0].awayTeam.name)
// console.log(equipovisitante)

// console.log(partidos.matches[0].matchday)
// console.log(partidos.matches[0].utcDate)
// console.log(partidos.matches[0].score.fullTime.homeTeam)
// console.log(partidos.matches[0].score.fullTime.awayTeam)

// Como añadir datos a tags/divs/tables en HTML desde JavaScript
// Que es un innerHTML
// Primero le asigno el sitio, en este caso en el div del html es donde le
// voy a querer asignar un valor a esa variable

//Para asinarle el sitio a mi variable:
// let container = document.getElementById("matches");
// console.log(container);

//Para añadir contenido a mi variable: innerHTML
// container.innerHTML = "Matches 2022";
// console.log(container);

//ITERACIONES Y BUCLES
// let datospartidos = partidos.matches;
// console.log(datospartidos);

// i es la posición en mi array -
// for (let i = 0; i < datospartidos.length; i++) {
//   let equipolocal = datospartidos[i].homeTeam.name;
//   console.log(equipolocal);
//   let equipovisitante = datospartidos[i].awayTeam.name;
//   console.log(equipovisitante);
//   let matchday = datospartidos[i].matchday;
//   console.log(matchday);
//   let date = datospartidos[i].utcDate;
//   console.log(date);
//   let score1 = datospartidos[i].score.fullTime.homeTeam;
//   console.log(score1);
//   let score2 = datospartidos[i].score.fullTime.awayTeam;
//   console.log(score2);
// }

// let datospartidos = partidos.matches;
// console.log(datospartidos);
quitarAlert1();
quitarAlert2();
quitarAlert3();
quitarAlert4();
quitarAlert5();
quitarAlert6();

function getData() {
  document.getElementById("spinner").style.display = "block";

  const url = "https://api.football-data.org/v2/competitions/2014/matches";
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
      quitarSpinner();
      let partidos = data.matches;
      // console.log(partidos);
      crear_tabla(partidos);

      let search_button = document.getElementById("boton_buscar");
      search_button.addEventListener("click", () => {
        crear_filtros(partidos);
      });
      let reset = document.getElementById("reset");
      reset.addEventListener("click", () => {
        document.querySelector("input[type=text]").value = "";
        // no declaro variable porque solo quiero hacer una accion en concreto con ese elemento

        let radio_input = document.getElementsByName("statusPartido");

        for (let i = 0; i < radio_input.length; i++) {
          radio_input[i].checked = false;
        }
        quitarAlert1();
        quitarAlert2();
        quitarAlert3();
        quitarAlert4();
        quitarAlert5();
        quitarAlert6();
        crear_tabla(partidos);
      });
    })
    .catch((error) => {
      alert("Algo no ha salido bien");
      console.log(error);
    });
}
getData();

function crear_tabla(score) {
  let tablebody = document.getElementById("tablebody");
  tablebody.innerHTML = "";
  //se ejecuta solo cuando se vuelve a llamar la funcion de tabla

  for (let i = 0; i < score.length; i++) {
    let row = document.createElement("tr");

    let equipolocal = document.createElement("p");
    equipolocal.innerHTML = score[i].homeTeam.name;
    equipolocal.classList.add("equipoloc");

    let imagenLocal = document.createElement("img");
    imagenLocal.setAttribute(
      "src",
      "https://crests.football-data.org/" + score[i].homeTeam.id + ".svg"
    );
    imagenLocal.classList.add("escudos");

    let equipovisitante = document.createElement("p");
    equipovisitante.innerHTML = score[i].awayTeam.name;

    let imagenvisit = document.createElement("img");
    imagenvisit.setAttribute(
      "src",
      "https://crests.football-data.org/" + score[i].awayTeam.id + ".svg"
    );
    imagenvisit.classList.add("escudos");

    // let score1 = document.createElement("p");
    // score1.innerHTML = score[i].score.fullTime.homeTeam;

    // let score2 = document.createElement("p");
    // score2.innerHTML = score[i].score.fullTime.awayTeam;

    let resultados =
      score[i].score.fullTime.homeTeam + "-" + score[i].score.fullTime.awayTeam;
    if (resultados === "null-null") {
      resultados = "Por jugar";
    }

    let date = new Date(score[i].utcDate);

    let day = document.createElement("p");
    day.innerHTML = score[i].matchday;
    day.classList.add("matchday");

    let datostabla = [
      equipolocal,
      imagenLocal,
      resultados,
      imagenvisit,
      equipovisitante,
      day,
      date.toLocaleString(),
    ];
    // console.log(datostabla);

    for (let ii = 0; ii < datostabla.length; ii++) {
      let column = document.createElement("td");
      column.append(datostabla[ii]);
      row.append(column);
      // adjunto la tag p e img adentro de las columnas y las columnas (td) las adjunto dentro de las filas (tr)
    }
    tablebody.append(row);

    // adjunto las filas adentro del cuerpo de la table y recien ahora se pueden ver en mi página
  }
}
// crear_tabla(datospartidos);

function crear_filtros(equipos_name) {
  let search_input = document.querySelector("input[type=text]").value;
  let radio_input = document.querySelector("input[type=radio]:checked");

  let alerta1 = document.getElementById("alerta1");
  if (search_input === "") {
    alerta1.style.display = "block";
    return crear_tabla(equipos_name);
  }

  let alerta4 = document.getElementById("alerta4");
  let alerta5 = document.getElementById("alerta5");
  let alerta6 = document.getElementById("alerta6");

  let filter_name = equipos_name.filter((equipos) => {
    if (
      equipos.homeTeam.name
        .toLowerCase()
        .includes(search_input.toLowerCase()) ||
      equipos.awayTeam.name.toLowerCase().includes(search_input.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });
  let alerta2 = document.getElementById("alerta2");
  // si lo que escribo en el buscador es 0 (dato no valido) que me devuelva una alerta y la tabla con todos los datos
  if (filter_name.length === 0) {
    alerta2.style.display = "block";
    return crear_tabla(equipos_name);
  } else {
    alerta2.style.display = "none";
  }
  // si no esta ningún boton seleccionado que me devuelva la tabla del equipo filtrada
  let alerta3 = document.getElementById("alerta3");
  if (radio_input === null) {
    alerta3.style.display = "block";
    return crear_tabla(filter_name);
  } else {
    alerta3.style.display = "none";
  }

  let filter_buttons = filter_name.filter((equipos) => {
    if (radio_input.value === "Ganados") {
      if (
        (equipos.homeTeam.name
          .toLowerCase()
          .includes(search_input.toLowerCase()) &&
          equipos.score.winner === "HOME_TEAM") ||
        (equipos.awayTeam.name
          .toLowerCase()
          .includes(search_input.toLowerCase()) &&
          equipos.score.winner === "AWAY_TEAM")
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (radio_input.value === "Perdidos") {
      if (
        (equipos.homeTeam.name
          .toLowerCase()
          .includes(search_input.toLowerCase()) &&
          equipos.score.winner === "AWAY_TEAM") ||
        (equipos.awayTeam.name
          .toLowerCase()
          .includes(search_input.toLowerCase()) &&
          equipos.score.winner === "HOME_TEAM")
      ) {
        return true;
      } else {
        return false;
      }
    }

    if (radio_input.value === "Empatados" && equipos.score.winner === "DRAW") {
      return true;
    }

    if (radio_input.value === "Proximos" && equipos.status === "SCHEDULED") {
      return true;
    }
  });
  // console.log(filter_buttons);
  if (radio_input.value === "Ganados" && filter_buttons.length === 0) {
    alerta4.style.display = "block";
    return crear_tabla(filter_name);
  } else {
    alerta4.style.display = "none";
  }
  if (radio_input.value === "Perdidos" && filter_buttons.length === 0) {
    alerta5.style.display = "block";
    return crear_tabla(filter_name);
  } else {
    alerta5.style.display = "none";
  }
  if (radio_input.value === "Empatados" && filter_buttons.length === 0) {
    alerta6.style.display = "block";
    return crear_tabla(filter_name);
  } else {
    alerta6.style.display = "none";
  }
  console.log(alerta6);
  crear_tabla(filter_buttons);
}
// let search_button = document.getElementById("boton_buscar");
// search_button.addEventListener("click", () => {
//   crear_filtros(datospartidos);
// });
// let reset = document.getElementById("reset");
// reset.addEventListener("click", () => {
//   document.querySelector("input[type=text]").value = "";
//   // no declaro variable porque solo quiero hacer una accion en concreto con ese elemento (se declara variable cuando la tengo que volver a utilizar)

//   let radio_input = document.getElementsByName("statusPartido");

//   for (let i = 0; i < radio_input.length; i++) {
//     radio_input[i].checked = false;
//   }
//   quitarAlert1();
//   quitarAlert2();
//   quitarAlert3();
//   crear_tabla(datospartidos);
// });

function quitarAlert1() {
  let alerta1 = document.getElementById("alerta1");
  alerta1.style.display = "none";
}

function quitarAlert2() {
  let alerta2 = document.getElementById("alerta2");
  alerta2.style.display = "none";
}

function quitarAlert3() {
  let alerta3 = document.getElementById("alerta3");
  alerta3.style.display = "none";
}

function quitarAlert4() {
  let alerta4 = document.getElementById("alerta4");
  alerta4.style.display = "none";
}

function quitarAlert5() {
  let alerta5 = document.getElementById("alerta5");
  alerta5.style.display = "none";
}

function quitarAlert6() {
  let alerta6 = document.getElementById("alerta6");
  alerta6.style.display = "none";
}

function quitarSpinner() {
  let spinner = document.getElementById("spinner");
  spinner.style.display = "none";
}
