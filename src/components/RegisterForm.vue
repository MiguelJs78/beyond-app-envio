<template>
    <v-app>
      <v-app-bar app dark elevate-on-scroll>
        <v-toolbar-title class="titlebar">EducLib</v-toolbar-title>
      </v-app-bar>
      <v-main style="background-color: #ffffff">
        <v-container class="fill-height d-flex align-center justify-center" fluid>
          <v-card class="pa-4">
            <v-card-title class="d-flex justify-center">
              <h2>Registro</h2>
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="register">
                <v-text-field
                  v-model="email"
                  label="Email"
                  prepend-icon="mdi-email"
                  type="email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  prepend-icon="mdi-lock"
                  type="password"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions class="d-flex align-center justify-center">
              <v-btn width="150px" color="primary" @click="register()">Cadastrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-main>
  
      <v-footer dark padless>
        <v-col class="text-center" cols="12"> EducLib </v-col>
      </v-footer>
    </v-app>
  </template>
  
  <script>
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      register() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
            console.log("Registrado com sucesso!");
            // Aqui você pode redirecionar para a página de cursos ou qualquer outra página
            this.$router.push("/login");
          })
          .catch((error) => {
            console.error("Erro ao registrar:", error);
            // Exibir mensagem de erro para o usuário
            alert(error.message);
          });
      },
    },
  };
  </script>
  