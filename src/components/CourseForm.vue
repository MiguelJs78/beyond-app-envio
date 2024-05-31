<template>
    <div class="home">
      <h1>Vue.js CRUD com Firebase</h1>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.nome }} - {{ item.horario }} - {{ item.professor }} - {{ item.cargohoraria }} - {{ item.certificacao }} - {{ item.descricao }}
          <button @click="editItem(item)">Edit</button>
          <button @click="deleteItem(item.id)">Delete</button>
        </li>
      </ul>
      
      <form @submit.prevent="addItem">
        <h1 class="add">Adicionar Cursos</h1>
  
        <label for="nome">Nome do Curso:</label>
        <input v-model="newItem.nome" required class="form__input" type="text" id="nome" name="nome">
  
        <label for="horario">Horário:</label>
        <input v-model="newItem.horario" required class="form__input" type="text" id="horario" name="horario">
  
        <label for="professor">Professor:</label>
        <input v-model="newItem.professor" required class="form__input" type="text" id="professor" name="professor">
  
        <label for="cargohoraria">Carga Horária:</label>
        <input v-model="newItem.cargohoraria" required class="form__input" type="text" id="cargohoraria" name="cargohoraria">
  
        <label for="certificacao">Certificação:</label>
        <input v-model="newItem.certificacao" required class="form__input" type="text" id="certificacao" name="certificacao">
  
        <label for="descricao">Descrição:</label>
        <input v-model="newItem.descricao" required class="form__input" type="text" id="descricao" name="descricao">
  
        <button type="submit">Add Item</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [],
        newItem: {
          nome: '',
          horario: '',
          professor: '',
          cargohoraria: '',
          certificacao: '',
          descricao: ''
        }
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        const response = await fetch('http://localhost:3000/api/data');
        const data = await response.json();
        this.items = data;
      },
      async addItem() {
        const response = await fetch('http://localhost:3000/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.newItem)
        });
        const newItem = await response.json();
        this.items.push({ id: newItem.id, ...this.newItem });
        this.resetForm();
      },
      async editItem(item) {
        const newName = prompt('Enter new name:', item.nome);
        const newHorario = prompt('Enter new horario:', item.horario);
        const newProfessor = prompt('Enter new professor:', item.professor);
        const newCargaHoraria = prompt('Enter new carga horaria:', item.cargohoraria);
        const newCertificacao = prompt('Enter new certificacao:', item.certificacao);
        const newDescricao = prompt('Enter new descricao:', item.descricao);
  
        if (newName && newHorario && newProfessor && newCargaHoraria && newCertificacao && newDescricao) {
          const response = await fetch(`http://localhost:3000/api/data/${item.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              nome: newName,
              horario: newHorario,
              professor: newProfessor,
              cargohoraria: newCargaHoraria,
              certificacao: newCertificacao,
              descricao: newDescricao
            })
          });
          if (response.ok) {
            item.nome = newName;
            item.horario = newHorario;
            item.professor = newProfessor;
            item.cargohoraria = newCargaHoraria;
            item.certificacao = newCertificacao;
            item.descricao = newDescricao;
          }
        }
      },
      async deleteItem(id) {
        if (confirm('Are you sure you want to delete this item?')) {
          const response = await fetch(`http://localhost:3000/api/data/${id}`, { method: 'DELETE' });
          if (response.ok) {
            this.items = this.items.filter(item => item.id !== id);
          }
        }
      },
      resetForm() {
        this.newItem = {
          nome: '',
          horario: '',
          professor: '',
          cargohoraria: '',
          certificacao: '',
          descricao: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .add {
    display: flex;
    flex-direction: column;
    max-width: 240px;
    padding: 20px;
    background-color: rgb(233, 233, 233);
    border-radius: 10px;
  }
  .form__input {
    margin-bottom: 10px;
  }
  </style>
  