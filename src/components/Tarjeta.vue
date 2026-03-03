<script setup>
defineProps({
  ciudad: {
    type: Object,
    required: true
  }
})

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
  <div class="card shadow-sm h-100 text-center">
    <img :src="ciudad.imagen" class="card-img-top" :alt="ciudad.nombre" />

    <div class="card-body">
      <h4 class="card-title">{{ ciudad.nombre }}</h4>

      <p class="mb-1"><span class="fw-semibold">Temperatura:</span> {{ ciudad.temperatura }}°C</p>
      <p class="mb-1"><span class="fw-semibold">Humedad:</span> {{ ciudad.humedad }}%</p>
      <p class="mb-1"><span class="fw-semibold">Viento:</span> {{ ciudad.viento }} km/h</p>
      <span><i :class="['bi', obtenerIcono(ciudad.estado), 'fs-2', 'my-2']"></i></span>
      <p class="mb-3 text-capitalize fw-semibold">{{ ciudad.estado }}</p>

      <RouterLink
        :to="`/ciudad/${ciudad.id}`"
        class="btn btn-primary btn-sm"
      >
        Ver detalles
      </RouterLink>
    </div>
  </div>
</template>