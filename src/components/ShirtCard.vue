<template>
  <div class="card">
    <img :src="imageUrl" alt="" class="card-img-top" />
    <div class="card-body">
      <h3 class="card-title">{{ shirt.name }}</h3>
      <p class="card-price">${{ shirt.price }}</p>
      <button @click="buyWhatsApp" class="btn-primary whatsapp-btn">
        <svg xmlns="http://www.w3.org/2000/svg" class="whatsapp-icon" viewBox="0 0 24 24" fill="#25D366" width="20" height="20">
          <path d="M20.52 3.48A11.865 11.865 0 0012 0C5.373 0 0 5.373 0 12a11.83 11.83 0 001.58 6.02L0 24l6.07-1.58A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12a11.865 11.865 0 00-3.48-8.52zM12 21.75a9.7 9.7 0 01-5.096-1.458l-.366-.22-3.605.938.962-3.516-.239-.375A9.717 9.717 0 012.25 12c0-5.384 4.366-9.75 9.75-9.75 2.606 0 5.058 1.015 6.898 2.853A9.72 9.72 0 0121.75 12c0 5.384-4.366 9.75-9.75 9.75zm5.2-7.032c-.285-.142-1.688-.833-1.948-.928-.26-.095-.45-.142-.64.142-.19.285-.73.928-.895 1.116-.164.19-.33.213-.615.07-.285-.142-1.204-.445-2.29-1.406-.847-.754-1.418-1.68-1.584-1.966-.165-.285-.018-.44.125-.58.128-.127.285-.33.427-.495.143-.165.19-.285.285-.475.095-.19.048-.356-.024-.497-.07-.142-.64-1.543-.876-2.11-.23-.553-.464-.48-.64-.49l-.548-.01c-.19 0-.5.07-.763.356-.26.285-1 1-1 2.438 0 1.438 1.025 2.83 1.167 3.025.142.19 2.015 3.075 4.88 4.31.682.293 1.213.468 1.63.6.683.215 1.305.185 1.796.113.548-.083 1.688-.69 1.927-1.36.237-.665.237-1.234.165-1.36-.07-.127-.255-.19-.54-.33z"/>
        </svg>
        Comprar
      </button>
    </div>
  </div>
</template>

<script setup>
const { shirt } = defineProps(['shirt'])

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
}
</style>
