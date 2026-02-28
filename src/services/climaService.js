export const calcularEstadisticas = (ciudad) => {

  const temperaturas = ciudad.pronosticoSemana.map(d => d.temperatura)

  const max = Math.max(...temperaturas)
  const min = Math.min(...temperaturas)

  const promedio =
    temperaturas.reduce((acc, t) => acc + t, 0) / temperaturas.length

  // Conteo de estados
  const conteoEstados = {}

  ciudad.pronosticoSemana.forEach(d => {
    conteoEstados[d.estado] = (conteoEstados[d.estado] || 0) + 1
  })

  // Determinar tendencia
  const entradaMayor = Object.entries(conteoEstados)
    .sort((a, b) => b[1] - a[1])[0]

  let tendenciaMensaje = 'Semana de tiempo variable'

  if (entradaMayor && entradaMayor[1] > 3) {
    const estado = entradaMayor[0]

    if (estado === 'lluvia') {
      tendenciaMensaje = 'Semana mayormente lluviosa'
    } else if (estado === 'despejado') {
      tendenciaMensaje = 'Semana mayormente soleada'
    } else if (estado === 'nublado') {
      tendenciaMensaje = 'Semana mayormente nublada'
    } else if (estado === 'parcial') {
      tendenciaMensaje = 'Semana mayormente parcialmente nublada'
    }
  }

  return {
    max,
    min,
    promedio: promedio.toFixed(1),
    tendenciaMensaje
  }
}