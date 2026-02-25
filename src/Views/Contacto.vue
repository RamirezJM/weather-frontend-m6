<script setup>

</script>

<template>
  <section class="contacto my-5 p-4" id="contacto">
      <div class="container">
        <h2 class="text-center mb-4 contacto__title">Contacto</h2>
        <p class="text-center lead fw-normal mb-5 contacto__subtitle">Si tienes alguna pregunta o te gustaría trabajar
          con nosotros,
          envíanos tu mensaje.</p>
        <div class="contacto__form w-100 mx-auto">
          <form class="my-5 p-2 rounded-2 needs-validation" novalidate>

            <input type="text" placeholder="Nombre" class="form-control border-primary w-100 my-3" required
              aria-describedby="nombre" aria-label="nombre" minlength="6">
            <div class="invalid-feedback text-center" id="nombre">El nombre debe tener más de 6 caracteres</div>

            <input type="email" placeholder="Email" class=" form-control border-primary w-100 my-3" required
              aria-describedby="email" aria-label="email">
            <div class="invalid-feedback text-center" id="email">El formato de email no es válido</div>

            <textarea placeholder="Mensaje" class="form-control border-primary w-100 my-3" required
              aria-describedby="mensaje" aria-label="mensaje" minlength="10"></textarea>
            <div class="invalid-feedback text-center" id="mensaje">El mensaje debe tener más de 10 caracteres</div>
            <button class="btn form__btn form__btn--lg text-uppercase fw-semibold d-block mx-auto mt-3" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
</template>