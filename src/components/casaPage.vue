<template>
  <div class="home">
    <h1>Vue.js CRUD com Firebase</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
        <button @click="editItem(item)">Edit</button>
        <button @click="deleteItem(item.id)">Delete</button>
      </li>
    </ul>
    <input type="text" v-model="newItem" placeholder="Add new item">
    <button @click="addItem">Add Item</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
      newItem: ''
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/api/data');
        this.items = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async addItem() {
      try {
        const response = await axios.post('http://localhost:3000/api/data', { name: this.newItem });
        this.items.push({ id: response.data.id, name: this.newItem });
        this.newItem = '';
      } catch (error) {
        console.error('Error adding item:', error);
      }
    },
    async editItem(item) {
      const newName = prompt('Enter new name:', item.name);
      if (newName !== null) {
        try {
          const response = await axios.put(`http://localhost:3000/api/data/${item.id}`, { name: newName });
          if (response.status === 200) {
            item.name = newName;
          }
        } catch (error) {
          console.error('Error editing item:', error);
        }
      }
    },
    async deleteItem(id) {
      if (confirm('Are you sure you want to delete this item?')) {
        try {
          const response = await axios.delete(`http://localhost:3000/api/data/${id}`);
          if (response.status === 200) {
            this.items = this.items.filter(item => item.id !== id);
          }
        } catch (error) {
          console.error('Error deleting item:', error);
        }
      }
    }
  }
};
</script>

<style scoped>
/* Adicione seu estilo aqui */
</style>
