<template>
    <v-app>
        <v-app-bar app dark elevate-on-scroll>
            <v-toolbar-title class="titlebar">EducLib</v-toolbar-title>
        </v-app-bar>
        <v-main style="background-color: #ffffff">
            <v-container class="fill-height d-flex align-center justify-center" fluid>
                <v-card class="pa-4">
                    <v-card-title class="d-flex justify-center">
                        <h2>Login</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="email" label="Email" prepend-icon="mdi-email" type="email"
                                required></v-text-field>
                            <v-text-field v-model="password" label="Password" prepend-icon="mdi-lock" type="password"
                                required></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="d-flex align-center justify-center">
                        <v-btn width="150px" color="primary" @click="login()">Entrar</v-btn>
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then(() => {
                    console.log("Logado com sucesso!");
                    this.$router.push("/courses");
                })
                .catch((error) => {
                    console.error("Erro ao fazer login:", error);
                    // Exibir mensagem de erro para o usuário
                    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                        this.errorMessage = 'Credenciais inválidas. Verifique seu e-mail e senha.';
                    } else {
                        this.errorMessage = 'Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.';
                    }
                });
        },
    },
};

</script>
  
