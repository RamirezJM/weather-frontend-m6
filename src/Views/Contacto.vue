<script setup>
import { reactive, computed, ref } from 'vue'

const enviado = ref(false)

const form = reactive({
  nombre: '',
  email: '',
  mensaje: ''
})

// Validaciones

const nombreValido = computed(() => form.nombre.length >= 6)

const emailValido = computed(() =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
)

const mensajeValido = computed(() => form.mensaje.length >= 10)

const formularioValido = computed(() =>
  nombreValido.value &&
  emailValido.value &&
  mensajeValido.value
)

const enviarFormulario = () => {
  if (!formularioValido.value) return

  enviado.value = true

  // Simulación de envío on un pequeño desfase de tiempo

  setTimeout(() => {
    form.nombre = ''
    form.email = ''
    form.mensaje = ''
    enviado.value = false
  }, 2000)
}
</script>

<template>
  <section class="contacto my-5 p-4">
    <div class="container">
      <h2 class="text-center mb-4 contacto__title">Contacto</h2>
      <p class="text-center lead fw-normal mb-5 contacto__subtitle">
        Si tienes alguna pregunta o te gustaría trabajar con nosotros,
        envíanos tu mensaje.
      </p>

      <div class="contacto__form w-100 mx-auto">
        <form class="my-5 p-2 rounded-2" @submit.prevent="enviarFormulario">

          <!-- Nombre -->
          <input v-model="form.nombre" type="text" placeholder="Nombre" class="form-control border-primary w-100 my-3"
            :class="{ 'is-invalid': form.nombre && !nombreValido }">
          <div v-if="form.nombre && !nombreValido" class="invalid-feedback text-center">
            El nombre debe tener más de 6 caracteres
          </div>

          <!-- Email -->
          <input v-model="form.email" type="email" placeholder="Email" class="form-control border-primary w-100 my-3"
            :class="{ 'is-invalid': form.email && !emailValido }">
          <div v-if="form.email && !emailValido" class="invalid-feedback text-center">
            El formato de email no es válido
          </div>

          <!-- Mensaje -->
          <textarea v-model="form.mensaje" placeholder="Mensaje" class="form-control border-primary w-100 my-3"
            :class="{ 'is-invalid': form.mensaje && !mensajeValido }"></textarea>
          <div v-if="form.mensaje && !mensajeValido" class="invalid-feedback text-center">
            El mensaje debe tener más de 10 caracteres
          </div>

          <!-- Botón -->
          <button class="btn form__btn form__btn--lg text-uppercase fw-semibold d-block mx-auto mt-3" type="submit"
            :disabled="!formularioValido">
            Enviar
          </button>

          <!-- Mensaje éxito -->
          <div v-if="enviado" class="alert alert-success mt-3 text-center">
            Mensaje enviado correctamente ✔
          </div>

        </form>
      </div>
    </div>
  </section>
</template>