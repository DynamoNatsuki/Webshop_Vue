<template>
    <div class="checkout">
      <h1>Slutför ditt köp</h1>
      <!-- Visa vald produkt -->
      <div v-if="product" class="product-summary">
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }} kr</p>
      </div>
  
      <!-- Betalningsformulär -->
      <form @submit.prevent="submitOrder">
        <div class="form-group">
          <label for="name">Namn</label>
          <input type="text" id="name" v-model="customerName" required />
        </div>
        <div class="form-group">
          <label for="card">Kortnummer</label>
          <input type="text" id="card" v-model="cardNumber" required />
        </div>
        <div class="form-group">
          <label for="expiry">Utgångsdatum</label>
          <input type="text" id="expiry" v-model="expiryDate" placeholder="MM/ÅÅ" required />
        </div>
        <div class="form-group">
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" v-model="cvv" required />
        </div>
        <button type="submit">Betala</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CheckoutForm',
    data() {
      return {
        product: null,
        customerName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
      };
    },
    created() {
      // Hämta produktinfo baserat på query-parametern
      const productId = this.$route.query.productId;
      const products = [
        { id: 1, name: 'Produkt 1', price: 100 },
        { id: 2, name: 'Produkt 2', price: 200 },
        { id: 3, name: 'Produkt 3', price: 300 }
      ];
      this.product = products.find(product => product.id == productId);
    },
    methods: {
      submitOrder() {
        // Här skulle man normalt skicka data till en server.
        alert(`Order för ${this.product.name} är lagd!`);
      }
    }
  };
  </script>
  
  <style scoped>
  .checkout {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .product-summary {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  form label {
    display: block;
    margin-bottom: 5px;
  }
  
  form input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  