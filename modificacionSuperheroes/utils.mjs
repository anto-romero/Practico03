// Nueva función para agregar superhéroes
export function agregarSuperheroes(rutaOriginal, rutaNuevos) {
    const datosOriginales = fs.readFileSync(rutaOriginal, "utf8");
    const datosNuevos = fs.readFileSync(rutaNuevos, "utf8");
    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperheroes = JSON.parse(datosNuevos);
  
    // Convertir los nuevos superhéroes a instancias de Superheroe
    const instanciasNuevos = nuevosSuperheroes.map(
      (hero) =>
        new Superheroe(
          hero.id,
          hero.nombreSuperheroe,
          hero.nombreReal,
          hero.nombreSociedad,
          hero.edad,
          hero.planetaOrigen,
          hero.debilidad,
          hero.poder,
          hero.habilidadEspecial,
          hero.aliado,
          hero.enemigo
        )
    );
  
    // Combinar listas
    const listaActualizada = [...superheroesOriginales, ...instanciasNuevos];
    // Guardar la lista actualizada
    fs.writeFileSync(
      rutaOriginal,
      JSON.stringify(listaActualizada, null, 2),
      "utf8"
    );
    console.log("Lista de superhéroes actualizada con éxito.");
  }
  