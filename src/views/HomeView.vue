<template>
  <div class="home">
    <h1>Webbutik</h1>
    <div class="product-list">
      <!-- Loopar genom produkter och visar dem -->
      <div v-for="product in products" :key="product.id" class="product">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }} kr</p>
        <!-- Länk till produktdetaljsidan -->
        <router-link :to="{ name: 'product', params: { id: product.id } }">Visa mer</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PlaceholderComponent from '@/components/PlaceholderComponent.vue';

export default {
  name: 'HomeView',
  components: PlaceholderComponent,
  data() {
    return {
      products: [
        { id: 1, name: 'Produkt 1', price: 100, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Produkt 2', price: 200, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Produkt 3', price: 300, image: 'https://via.placeholder.com/150' }
      ]
    };
  }
};
</script>

<style scoped>
.product-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.product {
  width: 200px;
  text-align: center;
  margin: 20px;
}

.product-image {
  width: 100%;
  height: auto;
}
</style>

