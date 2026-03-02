<script setup>
defineProps({
  ciudad: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card shadow-sm h-100">
    <img :src="ciudad.imagen" class="card-img-top" :alt="ciudad.nombre" />

    <div class="card-body">
      <h5 class="card-title">{{ ciudad.nombre }}</h5>

      <p class="mb-1"><span><i class="bi bi-thermometer text-danger"></i></span> {{ ciudad.temperatura }}°C</p>
      <p class="mb-1"><span><i class="bi bi-moisture text-primary"></i></span> {{ ciudad.humedad }}%</p>
      <p class="mb-1"><span><i class="bi bi-wind text-secondary"></i></span> {{ ciudad.viento }} km/h</p>
      <p class="mb-3">{{ ciudad.estado }}</p>

      <RouterLink
        :to="`/ciudad/${ciudad.id}`"
        class="btn btn-primary btn-sm"
      >
        Ver detalles
      </RouterLink>
    </div>
  </div>
</template>