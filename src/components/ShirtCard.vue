<template>
  <div class="card">
    <img :src="imageUrl" alt="" class="card-img-top" />
    <div class="card-body">
      <h3 class="card-title">{{ shirt.name }}</h3>
      <p class="card-price">${{ shirt.price }}</p>
      <button @click="buyWhatsApp" class="btn-primary whatsapp-btn">
        <svg xmlns="http://www.w3.org/2000/svg" class="whatsapp-icon" viewBox="0 0 32 32">
          <path
            fill="#25D366"
            d="M16.004 2.003c-7.732 0-13.999 6.267-13.999 13.999..."
          />
        </svg>
        Comprar
      </button>
    </div>
  </div>
</template>

<script setup>
const { shirt } = defineProps(['shirt'])

// Corrige la ruta quitando el "/" inicial si existe
const imageUrl = `${import.meta.env.BASE_URL}${shirt.image.replace(/^\//, '')}`

const buyWhatsApp = () => {
  const msg = `Hola, quiero comprar la camisa ${shirt.name}`;
  const url = `https://wa.me/522297805085?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}
</script>

<style scoped>
.whatsapp-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.whatsapp-icon {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>
