<template>
  <div class="product-detail">
    <h1>{{ product.name }}</h1>
    <img :src="require(`@/assets/${product.image}`)" :alt="product.name" class="product-image" />
    <p>Price: {{ product.price }} kr</p>
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
      { id: 1, name: 'Automobile', price: 100000, image: 'Automobile.jpg', description: 'En leksaksbil i fint skick' },
      { id: 2, name: 'Clock', price: 2000, image: 'Clock.jpg', description: 'En fin klocka' },
      { id: 3, name: 'Coffee beans', price: 70, image: 'Coffee_beans.jpg', description: 'Kaffebönor' },
      { id: 4, name: 'Cubes', price: 50, image: 'Cubes.jpg', description: 'Tärningar i metall' },
      { id: 5, name: 'Faucet', price: 300, image: 'Faucet.jpg', description: 'En kran av fin kvalité' },
      { id: 6, name: 'Old camera', price: 5000, image: 'Old_camera.jpg', description: 'En fin gammal kamera som fortfarande fungerar' },
      { id: 7, name: 'Star Wars figurines', price: 20000, image: 'SW_Figures.jpg', description: 'Välbevarade Star Wars figurer' }
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
  width: 300px;
  height: 300px;
}
</style>
