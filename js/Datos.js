


  const datos = [
    { cultivo: "Aguacate", enfermedad: "Antracnosis", lote: "Lote_A01", accion: "Podar ramas afectadas" },
    { cultivo: "Plátano", enfermedad: "Sigatoka Negra", lote: "Lote_B23", accion: "Aplicar fungicida" },
    { cultivo: "Café", enfermedad: "Roya", lote: "Lote_C15", accion: "Rociar con cobre" },
    { cultivo: "Tomate", enfermedad: "Tizon Tardío", lote: "Lote_D32", accion: "Controlar humedad" },
    { cultivo: "Maíz", enfermedad: "Mancha de Asfalto", lote: "Lote_E12", accion: "Aplicar tratamiento preventivo" },
    { cultivo: "Papa", enfermedad: "Pudrición Blanca", lote: "Lote_F45", accion: "Eliminar plantas infectadas" },
    { cultivo: "Fresa", enfermedad: "Moho Gris", lote: "Lote_G19", accion: "Mejorar ventilación" },
    { cultivo: "Cebolla", enfermedad: "Fusarium", lote: "Lote_H22", accion: "Reemplazar suelo" },
    { cultivo: "Lechuga", enfermedad: "Mildiu", lote: "Lote_I11", accion: "Reducir riego excesivo" }
  ];

  function crearTarjetas() {
    return datos.map(dato => `
      <div class="col">
        <div class="card d-flex flex-row align-items-center shadow-sm border-0 p-2">
          <div class="position-relative me-3">
            <img src="./platano/th.jfif" alt="${dato.cultivo}" class="rounded" style="width: 50px; height: 50px;">
            <span class="badge bg-success position-absolute top-0 start-0">Activo</span>
          </div>
          <div class="flex-grow-1">
            <h5 class="card-title mb-1">${dato.cultivo}</h5>
            <p class="card-text mb-1">Enfermedad: ${dato.enfermedad}</p>
            <p class="card-text mb-1">Acción: ${dato.accion}</p>
            <p class="card-text"><small class="text-muted">Ubicación: ${dato.lote}</small></p>
          </div>
        </div>
      </div>
    `).join('');
  }

  document.querySelector('.row').innerHTML = crearTarjetas();

