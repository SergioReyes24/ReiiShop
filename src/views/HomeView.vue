<template>
  <div class="catalog-container">
    <div class="grid">
      <ShirtCard
        v-for="shirt in filteredShirts"
        :key="shirt.id"
        :shirt="shirt"
      />
      <p v-if="filteredShirts.length === 0" class="no-results">
        No se encontraron camisas.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import ShirtCard from '../components/ShirtCard.vue'
import shirtsData from '../assets/shirts.json'

const props = defineProps({
  search: { type: String, required: true },
  maxPrice: { type: Number, required: true }
})

const shirts = ref([])

onMounted(() => {
  shirts.value = shirtsData
})

const filteredShirts = computed(() =>
  shirts.value.filter(s =>
    s.name.toLowerCase().includes(props.search.toLowerCase()) &&
    s.price <= props.maxPrice
  )
)
</script>

<style scoped>
.catalog-container {
  margin-top: 2rem;
}

.no-results {
  color: var(--reiBlue);
  font-weight: 600;
  text-align: center;
  grid-column: 1 / -1;
  font-size: 1.1rem;
  user-select: none;
}
</style>
