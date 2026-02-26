<script setup>

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom-text p-3">
      <div class="container">
        <a href="index.html" class="navbar-brand fs-2">
          <img src="@/assets/images/logo.png" alt="logo" width="50">
          ClimApp
        </a>
        <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          class="navbar-toggler border border-white">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav align-items-center ms-auto ">
           <router-link class="nav-item nav-link" to="/"  aria-current="page">Home</router-link>
           <router-link class="nav-item nav-link" to="/pronosticos" >Pronósticos</router-link>
           <router-link class="nav-item nav-link" to="/about" >Acerca de</router-link>
           <router-link class="nav-item nav-link" to="/contacto" >Contacto</router-link>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<!-- <template>
  <div style="background: red; padding: 20px;">
    NAVBAR TEST
  </div>
</template> -->