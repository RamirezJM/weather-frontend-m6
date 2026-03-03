<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { ciudades } from '@/data/data'
import { calcularEstadisticas } from '@/services/climaService'

const route = useRoute()

const unidad = ref('C')

const convertirTemp = (temp) => {
  if (unidad.value === 'C') return temp
  return (temp * 9 / 5) + 32
}

const estadisticas = computed(() =>
  ciudad.value ? calcularEstadisticas(ciudad.value) : null
)

const ciudad = computed(() =>
  ciudades.find(c => c.id === Number(route.params.id))
)

const iconos = {
  despejado: '<i class="bi bi-sun text-warning fs-2"></i>',
  nublado: '<i class="bi bi-cloud text-secondary fs-2"></i>',
  lluvia: '<i class="bi bi-cloud-rain text-primary fs-2"></i>',
  parcial: '<i class="bi bi-cloud-sun text-secondary fs-2"></i>',
};

const obtenerIcono = (estado) => {
  return iconos[estado] || 'bi-question-circle'
}

</script>

<template>
  <div class="container py-5" v-if="ciudad">

    <!-- Header -->
    <div class="text-center mb-4">
      <h1>{{ ciudad.nombre }}</h1>
      <img :src="ciudad.imagen" :alt="ciudad.nombre" class="img-fluid rounded shadow" style="max-height: 300px;" />
    </div>

    <div class="text-center mb-3">
      <p>Unidad de Temperatura</p>
      <select v-model="unidad" class="form-select w-auto mx-auto">
        <option value="C">°C (Celsius)</option>
        <option value="F">°F (Fahrenheit)</option>
      </select>
    </div>

    <!-- Datos actuales -->
    <div class="row text-center mb-5">
      <div class="col-md-4">
        <h4><span><i class="bi bi-thermometer text-danger"></i></span> Temperatura</h4>
        <p class="fs-4">{{ convertirTemp(ciudad.temperatura).toFixed(1) }}°{{ unidad }}</p>
      </div>

      <div class="col-md-4">
        <h4><span><i class="bi bi-moisture text-primary"></i></span> Humedad</h4>
        <p class="fs-4">{{ ciudad.humedad }}%</p>
      </div>

      <div class="col-md-4">
        <h4><span><i class="bi bi-wind text-secondary"></i></span> Viento</h4>
        <p class="fs-4">{{ ciudad.viento }} km/h</p>
      </div>
    </div>

    <!-- Pronóstico 7 días -->
    <h3 class="mb-3">Pronóstico semanal</h3>

    <div class="row g-3">
      <div v-for="dia in ciudad.pronosticoSemana" :key="dia.dia" class="col-md-3 col-sm-6">
        <div class="card text-center h-100 shadow-sm">
          <div class="card-body">
            <h6>{{ dia.dia }}</h6>
            <p class="mb-1">{{ convertirTemp(dia.temperatura).toFixed(1) }}°{{ unidad }}</p>
            <p class="text-muted">{{ dia.estado }}</p>
            <i :class="['bi', obtenerIcono(dia.estado), 'fs-2', 'my-2']"></i>
          </div>
        </div>
      </div>
    </div>

    <div v-if="estadisticas" class="mt-5">
      <h3 class="mb-4 text-center">Estadísticas semanales</h3>

      <div class="row text-center">
        <div class="col-md-4">
          <h5><span><i class="bi bi-thermometer-sun text-danger"></i></span> Máxima</h5>
          <p class="fs-5">{{ convertirTemp(estadisticas.max).toFixed(1) }}°{{ unidad }}</p>
        </div>

        <div class="col-md-4">
          <h5><span><i class="bi bi-thermometer-snow text-info"></i></span> Mínima</h5>
          <p class="fs-5">{{ convertirTemp(estadisticas.min).toFixed(1) }}°{{ unidad }}</p>
        </div>

        <div class="col-md-4">
          <h5><span><i class="bi bi-graph-up text-black"></i></span> Promedio</h5>
          <p class="fs-5">{{ convertirTemp(estadisticas.promedio).toFixed(1) }}°{{ unidad }}</p>
        </div>
      </div>

      <div class="text-center mt-4">
        <div class="alert alert-info">
          {{ estadisticas.tendenciaMensaje }}
        </div>
      </div>
    </div>

    <!-- Botón volver -->
    <div class="text-center mt-5">
      <button @click="$router.back()" class="btn btn-secondary">
        Volver
      </button>
    </div>

  </div>

  <!-- Seguridad si no encuentra ciudad -->
  <div v-else class="container py-5 text-center">
    <h2>Ciudad no encontrada</h2>
  </div>
</template>