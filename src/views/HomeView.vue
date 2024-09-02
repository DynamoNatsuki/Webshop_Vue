<template>
  <div class="home">
    <h1>Webbutik</h1>
    <div class="product-list">
      <!-- Loopar genom produkter och visar dem -->
      <div v-for="product in products" :key="product.id" class="product">
        <img :src="require(`@/assets/${product.image}`)" :alt="product.name" class="product-image" />
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
        { id: 1, name: 'Automobile', price: 100000, image: 'Automobile.jpg' },
        { id: 2, name: 'Clock', price: 2000, image: 'Clock.jpg' },
        { id: 3, name: 'Coffee beans', price: 70, image: 'Coffee_beans.jpg' },
        { id: 4, name: 'Cubes', price: 50, image: 'Cubes.jpg'},
        { id: 5, name: 'Faucet', price: 300, image: 'Faucet.jpg'},
        { id: 6, name: 'Old camera', price: 5000, image: 'Old_camera.jpg'},
        { id: 7, name: 'Star Wars figurines', price: 20000, image: 'SW_Figures.jpg'}
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
  width: 150px;
  height: 150px;
}
</style>

