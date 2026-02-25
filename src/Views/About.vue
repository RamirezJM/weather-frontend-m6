<script setup>
</script>

<template>
    <section class="acerca-de my-4 p-4" id="acerca-de">
      <div class="container">
        <h2 class="text-center mb-5 acerca-de__title">Acerca de</h2>
        <div class="row flex-sm-column-reverse flex-md-row g-4 mt-4">
          <div class="col-md-6">
            <p class="lead fw-normal acerca-de__text">En <span class="text-primary">ClimApp</span> somos un equipo de
              especialistas
              apasionados por entender el clima y anticipar sus cambios.
              Combinamos experiencia meteorológica con tecnología de punta para analizar datos, detectar tendencias y
              ofrecer pronósticos confiables. Nuestro trabajo se centra en entregar información clara y precisa,
              diseñada para ayudar a cada cliente a tomar mejores decisiones en su día a día.</p>
          </div>
          <div class="col-md-6">
            <img src="@/assets/images/equipo2.jpg" alt="equipo de profesionales"
              class="img-fluid rounded-2 acerca-de__image">
          </div>
        </div>
      </div>
    </section>

    <section class="conceptos my-5 py-4 bg-secondary-subtle">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-6 col-lg-3 d-flex flex-column align-items-center text-center">
            <span class="conceptos__icon"><i class="bi bi-journal-text text-primary display-4 fw-bold"></i></span>
            <h4 class="conceptos__title">Reportes detallados</h4>
            <p class="fs-5 conceptos__text">Información clara, organizada y fácil de interpretar</p>
          </div>
          <div class="col-md-6 col-lg-3 d-flex flex-column align-items-center text-center">
            <span class="conceptos__icon"><i class="bi bi-cpu text-primary display-4 fw-bold"></i></span>
            <h4 class="conceptos__title">Tecnología de punta</h4>
            <p class="fs-5 conceptos__text">Análisis avanzado con herramientas modernas</p>
          </div>
          <div class="col-md-6 col-lg-3 d-flex flex-column align-items-center text-center">
            <span class="conceptos__icon"><i class="bi bi-bullseye text-primary display-4 fw-bold"></i></span>
            <h4 class="conceptos__title">Pronósticos precisos</h4>
            <p class="fs-5 conceptos__text">Datos confiables para decisiones seguras</p>
          </div>
          <div class="col-md-6 col-lg-3 d-flex flex-column align-items-center text-center">
            <span class="conceptos__icon"><i class="bi bi-speedometer2 text-primary display-4 fw-bold"></i></span>
            <h4 class="conceptos__title">Monitoreo al instante</h4>
            <p class="fs-5 conceptos__text">Actualizaciones constantes de eventos dinámicos</p>
          </div>
        </div>
      </div>
    </section>

</template>