<template>
  <div class="product-detail">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" :alt="product.name" />
    <p>{{ product.price }} kr</p>
    <p>{{ product.description }}</p>
    <!-- Köp-knapp som leder till checkout-sidan -->
    <router-link :to="{ name: 'checkout', query: { productId: product.id } }">
      <button>Köp</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
      product: {}
    };
  },
  created() {
    const productId = this.$route.params.id;
    // Här kan man normalt hämta produktdata från en server/API.
    // För nuvarande, använd dummydata.
    const products = [
      { id: 1, name: 'Produkt 1', price: 100, image: 'https://via.placeholder.com/150', description: 'Beskrivning av Produkt 1' },
      { id: 2, name: 'Produkt 2', price: 200, image: 'https://via.placeholder.com/150', description: 'Beskrivning av Produkt 2' },
      { id: 3, name: 'Produkt 3', price: 300, image: 'https://via.placeholder.com/150', description: 'Beskrivning av Produkt 3' }
    ];
    this.product = products.find(product => product.id == productId);
  }
};
</script>

<style scoped>
.product-detail {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.product-detail img {
  width: 100%;
  height: auto;
}
</style>
