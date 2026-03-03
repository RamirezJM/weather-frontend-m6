<script setup>
import { ciudades } from '@/data/data'
import Tarjeta from '@/components/Tarjeta.vue'
</script>

<template>
  <div class="container py-5">
    <h2 class="mb-5 text-center">Pronósticos</h2>

    <div class="row g-4">
      <div
        v-for="ciudad in ciudades"
        :key="ciudad.id"
        class="col-md-6 col-lg-4"
      >
        <Tarjeta :ciudad="ciudad" />
      </div>
    </div>
  </div>
</template>