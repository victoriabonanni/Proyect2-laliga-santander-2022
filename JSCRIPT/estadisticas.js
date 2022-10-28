// 0. Crear función que va calcular las estadísticas, recibiendo como param el array de partidos

// 1. Crear array vacía (será array de objetos)

// 2. Iterar por todos los partidos

// 3. Condición: si el partido no está acabado, no seguir y mirar siguiente partido

// 4. Buscar en la array estadisticas el objeto con el mismo id que el homeTeam del partido

// 5. Si el objeto buscado no existe, crearlo con estos keys: id, name, goals, matches.
// Rellenar cada key con el valor correspondiente

// 6. Si existe, actualizar los goles y los partidos

// 7. Hacer exactamente lo mismo a partir del punto 4, pero con awayTeam

// 8. Una vez fuera del loop de partidos, iterar por el array estadisticas

// 9. Añadir la key avg a cada objeto, con el valor goals/matches

// 10. Hacer console.log() para ver que todo está correcto.

function estadisticas(partidos) {
  let estadistica_partidos = [];

  for (let i = 0; i < partidos.length; i++) {
    if (partidos[i].status !== "FINISHED") {
      continue;
    }
    let id_local = partidos[i].homeTeam.id;

    let id_visit = partidos[i].awayTeam.id;

    let name_local = partidos[i].homeTeam.name;

    let name_visit = partidos[i].awayTeam.name;

    let goals_local = partidos[i].score.fullTime.homeTeam;

    let goals_visit = score[i].fullTime.awayTeam;

    let matches_local = partidos[i].matches.homeTeam;

    let matches_visit = partidos[i].matches.awayTeam;

    if (partidos[i].homeTeam == partidos[i].homeTeam.id) {
      return true;
    }
  }
}
estadisticas(datospartidos);
