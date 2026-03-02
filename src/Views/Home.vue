<script setup>
</script>

<template>
    <section class="hero my-5 p-4">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-6 hero__image">
          <img src="@/assets/images/hero1.jpg" alt="equipo meteorólogos" class="img-fluid rounded-2">
        </div>
        <div class="col-md-6 hero__text">
          <h1 class="text-center display-3 hero__text__title"><span class="text-primary">ClimApp</span>, tecnología y
            expertos trabajando
            para ti</h1>
          <p class="lead fw-normal mt-4 text-center hero__text__paragraph">Transformamos información compleja en una
            experiencia simple para
            que tomes mejores decisiones cada día</p>
          <router-link to="/contacto"
            class="btn hero__btn hero__btn--lg fw-semibold text-uppercase d-block mx-auto mt-5">Contáctanos</router-link>
        </div>
      </div>
    </div>
  </section>
</template>