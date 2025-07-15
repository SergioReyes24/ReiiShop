<template>
  <div class="card">
    <img :src="`${import.meta.env.BASE_URL}${shirt.image}`" alt="" class="card-img-top" />
    <div class="card-body">
      <h3 class="card-title">{{ shirt.name }}</h3>
      <p class="card-price">${{ shirt.price }}</p>
      <button @click="buyWhatsApp" class="btn-primary whatsapp-btn">
        <svg xmlns="http://www.w3.org/2000/svg" class="whatsapp-icon" viewBox="0 0 32 32">
          <path
            fill="#25D366"
            d="M16.004 2.003c-7.732 0-13.999 6.267-13.999 13.999 0 2.474.646 4.9 1.872 7.03L2 30l7.263-1.855c2.057 1.114 4.37 1.702 6.741 1.702 7.732 0 13.999-6.267 13.999-13.999s-6.267-13.999-13.999-13.999zm0 2c6.63 0 11.999 5.37 11.999 11.999s-5.37 11.999-11.999 11.999c-2.04 0-4.045-.518-5.814-1.498l-.408-.229-4.285 1.094 1.14-4.152-.265-.426c-1.093-1.758-1.667-3.793-1.667-5.788 0-6.63 5.37-11.999 11.999-11.999zm-3.153 6.651c-.178 0-.362.011-.537.032-.514.064-1.205.423-1.205 1.525 0 1.101.706 2.167.804 2.318.097.15 1.872 3.119 4.63 4.25 2.757 1.131 2.652.84 3.132.786.48-.054 1.544-.628 1.762-1.234.219-.606.219-1.124.154-1.234-.064-.11-.239-.175-.497-.306s-1.544-.762-1.782-.85c-.239-.089-.41-.132-.586.131-.177.263-.676.849-.828 1.026-.15.175-.31.197-.574.065s-1.131-.417-2.154-1.33c-.796-.708-1.333-1.582-1.49-1.847-.155-.263-.017-.407.116-.536.119-.116.263-.305.395-.457.131-.153.175-.263.263-.438.089-.175.045-.329-.022-.457-.065-.132-.586-1.417-.804-1.936-.218-.52-.446-.6-.65-.612z"
          />
        </svg>
        Comprar
      </button>
    </div>
  </div>
</template>

<script setup>
const { shirt } = defineProps(['shirt'])

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
