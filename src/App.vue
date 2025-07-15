<template>
  <div id="app">
    <div class="store-title">Reii Shop</div>

    <header class="header-bar">
      <RouterLink to="/" class="logo-link">
        <img src="/ReiiShop/logo.png" alt="Rei Store Logo" class="logo" />
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const search = ref('')
const priceRange = ref(1000)
</script>
