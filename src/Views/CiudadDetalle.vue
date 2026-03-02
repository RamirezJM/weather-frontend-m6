<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { ciudades } from '@/data/data'
import { calcularEstadisticas } from '@/services/climaService'

const unidad = ref('C')

const convertirTemp = (temp) => {
  if (unidad.value === 'C') return temp
  return (temp * 9 / 5) + 32
}

const estadisticas = computed(() =>
  ciudad.value ? calcularEstadisticas(ciudad.value) : null
)

const route = useRoute()

const ciudad = computed(() =>
  ciudades.find(c => c.id === Number(route.params.id))
)
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
        <h4><span><i class="bi bi-thermometer"></i></span> Temperatura</h4>
        <!-- <p class="fs-4">{{ ciudad.temperatura }}°C</p> -->
         <p class="fs-4">{{ convertirTemp(ciudad.temperatura).toFixed(1) }}°{{ unidad }}</p>
      </div>

      <div class="col-md-4">
        <h4><span><i class="bi bi-moisture"></i></span> Humedad</h4>
        <p class="fs-4">{{ ciudad.humedad }}%</p>
      </div>

      <div class="col-md-4">
        <h4><span><i class="bi bi-wind"></i></span> Viento</h4>
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
            <!-- <p class="mb-1">{{ dia.temperatura }}°C</p> -->
             <p class="mb-1">{{ convertirTemp(dia.temperatura).toFixed(1) }}°{{ unidad }}</p>
            <p class="text-muted">{{ dia.estado }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="estadisticas" class="mt-5">
      <h3 class="mb-4 text-center">Estadísticas semanales</h3>

      <div class="row text-center">
        <div class="col-md-4">
          <h5>🌡 Máxima</h5>
          <!-- <p class="fs-5">{{ estadisticas.max }}°C</p> -->
           <p class="fs-5">{{ convertirTemp(estadisticas.max).toFixed(1) }}°{{ unidad }}</p>
        </div>

        <div class="col-md-4">
          <h5>❄ Mínima</h5>
          <p class="fs-5">{{ convertirTemp(estadisticas.min).toFixed(1) }}°{{ unidad }}</p>
        </div>

        <div class="col-md-4">
          <h5>📊 Promedio</h5>
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