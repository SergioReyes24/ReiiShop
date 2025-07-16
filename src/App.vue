<template>
  <div id="app">
    <div class="store-title">Reii Shop</div>

    <header class="header-bar">
      <RouterLink to="/" class="logo-link">
        <img :src="logoUrl" alt="Rei Store Logo" class="logo" />
      </RouterLink>
      <div class="filters">
        <input
          v-model="search"
          placeholder="Buscar camisa..."
          class="filter-input"
          type="search"
        />
        <input
          type="range"
          min="100"
          max="1000"
          step="10"
          v-model="priceRange"
          class="filter-range"
        />
        <span class="price-label">Hasta ${{ priceRange }}</span>
      </div>
    </header>

    <RouterView :search="search" :maxPrice="priceRange" />

    <button class="floating-logo-btn" aria-label="Rei Store">
      <img :src="logoUrl" alt="Rei Store Logo" class="floating-logo-img" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const logoUrl = `${import.meta.env.BASE_URL}logo.png`
const search = ref('')
const priceRange = ref(1000)
</script>
