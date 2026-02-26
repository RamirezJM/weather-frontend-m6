<script setup>
import { ciudades } from '@/data/data'
import Tarjeta from '@/components/Tarjeta.vue'
</script>

<template>
  <div class="container py-5">
    <h1 class="mb-4">Pronósticos</h1>

    <div class="row g-4">
      <div
        v-for="ciudad in ciudades"
        :key="ciudad.id"
        class="col-md-4"
      >
        <Tarjeta :ciudad="ciudad" />
      </div>
    </div>
  </div>
</template>